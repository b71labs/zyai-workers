const WORKER = 'https://zyai.org';
let history = [];
let loading = false;

// Init
(function init() {
  const theme = localStorage.getItem('zyai_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', theme);
  document.getElementById('theme-btn').textContent = theme === 'dark' ? '☀' : '☾';

  // Check if there's selected text from context menu
  chrome.storage.session.get('selectedText', (data) => {
    if (data.selectedText) {
      document.getElementById('input').value = 'Explain: ' + data.selectedText;
      chrome.storage.session.remove('selectedText');
    }
  });
})();

function toggleTheme() {
  const html = document.documentElement;
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  document.getElementById('theme-btn').textContent = next === 'dark' ? '☀' : '☾';
  localStorage.setItem('zyai_theme', next);
}

function clearChat() {
  history = [];
  loading = false;
  document.getElementById('send-btn').disabled = false;
  document.getElementById('messages').innerHTML = '<div class="empty" id="empty"><div class="empty-logo">Zy<em>AI</em></div><div class="empty-sub">Security-focused developer AI.<br>Ask about Web2/Web3, security, code.</div><div class="chips"><button class="chip" onclick="suggest(this)">What is reentrancy?</button><button class="chip" onclick="suggest(this)">Explain SQL injection</button><button class="chip" onclick="suggest(this)">What is MEV?</button><button class="chip" onclick="suggest(this)">How does Wagmi work?</button></div></div>';
}

function suggest(btn) {
  document.getElementById('input').value = btn.textContent;
  send();
}

function openWeb() {
  chrome.tabs.create({ url: 'https://zyai.org' });
}

const inp = document.getElementById('input');
inp.addEventListener('keydown', function(e) {
  if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
});
inp.addEventListener('input', function() {
  this.style.height = 'auto';
  this.style.height = Math.min(this.scrollHeight, 80) + 'px';
});

function renderMarkdown(text) {
  return text
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/```[\w]*\n?([\s\S]*?)```/g, function(_, code) { return '<pre><code>' + code.trim() + '</code></pre>'; })
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/^- (.+)$/gm, '• $1')
    .replace(/\n/g, '<br>');
}

function addMsg(role, text, isLoading) {
  const empty = document.getElementById('empty');
  if (empty) empty.remove();
  const msgs = document.getElementById('messages');
  const div = document.createElement('div');
  div.className = 'msg msg-' + role;
  const label = role === 'user' ? 'you' : 'AI';
  const content = isLoading ? '' : (role === 'ai' ? renderMarkdown(text) : esc(text));
  div.innerHTML = '<div class="msg-label">' + label + '</div><div class="bubble bubble-' + role + (isLoading ? ' loading' : '') + '">' + content + '</div>';
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
  return div.querySelector('.bubble');
}

async function send() {
  if (loading) return;
  const q = inp.value.trim();
  if (!q) return;
  inp.value = ''; inp.style.height = 'auto';
  loading = true;
  document.getElementById('send-btn').disabled = true;
  addMsg('user', q);
  history.push({ role: 'user', content: q });
  const bubble = addMsg('ai', '', true);
  try {
    const res = await fetch(WORKER + '/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: history, model: '@cf/meta/llama-3.3-70b-instruct-fp8-fast' })
    });
    const data = await res.json();
    const answer = data.answer || data.error || 'No response';
    bubble.classList.remove('loading');
    bubble.innerHTML = renderMarkdown(answer);
    history.push({ role: 'assistant', content: answer });
  } catch(e) {
    bubble.classList.remove('loading');
    bubble.textContent = 'Error: ' + e.message;
  }
  loading = false;
  document.getElementById('send-btn').disabled = false;
  document.getElementById('messages').scrollTop = 99999;
}

function esc(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
