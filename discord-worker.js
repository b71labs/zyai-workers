const WORKER_URL = 'https://zyai.org';

async function verifyDiscordRequest(request, publicKey) {
  const signature = request.headers.get('x-signature-ed25519');
  const timestamp = request.headers.get('x-signature-timestamp');
  if (!signature || !timestamp) return { valid: false, body: '' };

  const body = await request.text();

  try {
    const encoder = new TextEncoder();
    const message = encoder.encode(timestamp + body);
    const sigBytes = hexToUint8Array(signature);
    const keyBytes = hexToUint8Array(publicKey);

    const cryptoKey = await crypto.subtle.importKey(
      'raw',
      keyBytes,
      { name: 'NODE-ED25519', namedCurve: 'NODE-ED25519' },
      false,
      ['verify']
    );

    const valid = await crypto.subtle.verify(
      { name: 'NODE-ED25519', namedCurve: 'NODE-ED25519' },
      cryptoKey,
      sigBytes,
      message
    );

    return { valid, body };
  } catch (e) {
    // Try alternative algorithm name
    try {
      const cryptoKey2 = await crypto.subtle.importKey(
        'raw',
        keyBytes,
        { name: 'Ed25519' },
        false,
        ['verify']
      );
      const valid2 = await crypto.subtle.verify(
        { name: 'Ed25519' },
        cryptoKey2,
        sigBytes,
        message
      );
      return { valid: valid2, body };
    } catch(e2) {
      return { valid: false, body };
    }
  }
}

function hexToUint8Array(hex) {
  const arr = new Uint8Array(hex.length / 2);
  for (let i = 0; i < hex.length; i += 2) {
    arr[i / 2] = parseInt(hex.slice(i, i + 2), 16);
  }
  return arr;
}

async function registerCommands(appId, token) {
  const commands = [
    { name: 'ask', description: 'Ask ZyAI a question', options: [{ name: 'question', description: 'Your question', type: 3, required: true }] },
    { name: 'security', description: 'Ask about security topics', options: [{ name: 'topic', description: 'Security topic', type: 3, required: true }] },
    { name: 'contract', description: 'Analyze a smart contract address', options: [{ name: 'address', description: 'Contract address (0x...)', type: 3, required: true }] },
    { name: 'help', description: 'Show ZyAI help and commands' },
  ];

  const res = await fetch(`https://discord.com/api/v10/applications/${appId}/commands`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', 'Authorization': 'Bot ' + token },
    body: JSON.stringify(commands),
  });
  return res.json();
}

async function handleInteraction(interaction, env) {
  const type = interaction.type;

  if (type === 1) return { type: 1 };

  if (type === 2) {
    const commandName = interaction.data.name;
    const options = interaction.data.options || [];

    if (commandName === 'help') {
      return {
        type: 4,
        data: {
          embeds: [{
            title: '🤖 ZyAI Commands',
            color: 0x4ade80,
            description: 'AI-powered security & developer assistant',
            fields: [
              { name: '/ask', value: 'Ask any development or security question', inline: false },
              { name: '/security', value: 'Deep dive into security topics', inline: false },
              { name: '/contract', value: 'Analyze a smart contract on Base Mainnet', inline: false },
            ],
            footer: { text: 'zyai.org' }
          }]
        }
      };
    }

    let question = '';
    if (commandName === 'ask' || commandName === 'security') {
      question = options.find(o => o.name === 'question' || o.name === 'topic')?.value || '';
    } else if (commandName === 'contract') {
      const address = options.find(o => o.name === 'address')?.value || '';
      question = 'Analyze this smart contract address: ' + address;
    }

    if (!question) return { type: 4, data: { content: 'Please provide a question.' } };

    return { type: 5, _question: question, _commandName: commandName };
  }

  return { type: 4, data: { content: 'Unknown interaction' } };
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const jsonHeaders = { 'Content-Type': 'application/json' };

    if (url.pathname === '/register') {
      if (url.searchParams.get('secret') !== env.PIPELINE_SECRET) {
        return new Response('unauthorized', { status: 401 });
      }
      const result = await registerCommands(env.DISCORD_APP_ID, env.DISCORD_TOKEN);
      return new Response(JSON.stringify(result, null, 2), { headers: jsonHeaders });
    }

    if (url.pathname === '/interactions' && request.method === 'POST') {
      const { valid, body } = await verifyDiscordRequest(request, env.DISCORD_PUBLIC_KEY);
      if (!valid) return new Response('Invalid signature', { status: 401 });

      const interaction = JSON.parse(body);
      const response = await handleInteraction(interaction, env);

      const question = response._question;
      const commandName = response._commandName;
      delete response._question;
      delete response._commandName;

      if (question) {
        ctx.waitUntil((async () => {
          try {
            const res = await fetch(WORKER_URL + '/api/chat', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                messages: [{ role: 'user', content: question }],
                model: '@cf/meta/llama-3.3-70b-instruct-fp8-fast',
              }),
            });
            const data = await res.json();
            const answer = data.answer || data.error || 'No response';
            const truncated = answer.length > 1900 ? answer.slice(0, 1900) + '...' : answer;

            await fetch(`https://discord.com/api/v10/webhooks/${env.DISCORD_APP_ID}/${interaction.token}/messages/@original`, {
              method: 'PATCH',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                embeds: [{
                  color: 0x4ade80,
                  description: truncated,
                  footer: { text: 'zyai.org' }
                }]
              }),
            });
          } catch (e) {
            await fetch(`https://discord.com/api/v10/webhooks/${env.DISCORD_APP_ID}/${interaction.token}/messages/@original`, {
              method: 'PATCH',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ content: '❌ Error: ' + e.message }),
            });
          }
        })());
      }

      return new Response(JSON.stringify(response), { headers: jsonHeaders });
    }

    return new Response(JSON.stringify({
      name: 'discord-bot',
      endpoints: {
        '/register?secret=X': 'Register slash commands',
        '/interactions': 'Discord webhook endpoint',
      }
    }), { headers: jsonHeaders });
  }
};
