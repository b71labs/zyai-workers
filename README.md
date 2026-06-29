# ZyAI

> AI-powered security & developer knowledge base. Web2/Web3 security, onchain analysis, CVE tracking, real-time DeFi data — built on Cloudflare.

**Live:** [zyai.org](https://zyai.org) · **Telegram:** [@zyorgbot](https://t.me/zyorgbot) · **Discord:** [Join](https://discord.gg/DpPUDUYAXS) · **GitHub:** [b71labs](https://github.com/b71labs)

---

## What is ZyAI?

ZyAI is a security-focused AI assistant built for developers and researchers. It combines a self-growing knowledge base with real-time security feeds, onchain analysis, and live DeFi data.

## Features

- 💬 **AI Chat** — Multi-model support with 4-provider fallback (Cloudflare AI → Groq → OpenRouter → Mistral)
- 🔐 **Security Knowledge** — Web2/Web3 vulnerabilities, OWASP, smart contract audit patterns
- ⛓ **Onchain Analysis** — Contract analysis on Base Mainnet
- 📡 **Live CVE Feed** — Real-time critical vulnerability tracking via NVD
- 📈 **Real-time DeFi Data** — Live yields, TVL, and protocol data via DeFiLlama
- 📎 **File Analysis** — Upload PDF, Word, Excel, or code files for AI analysis
- 🖥 **Live Preview** — AI-generated HTML rendered instantly in the browser
- 🔍 **Knowledge Search** — Full-text search across the knowledge base
- 🤖 **Telegram Bot** — [@zyorgbot](https://t.me/zyorgbot)
- 💬 **Discord Bot** — `/ask`, `/security`, `/contract`, `/help` commands
- 🔌 **Chrome Extension** — Ask ZyAI from any webpage
- 👤 **User Accounts** — Chat history, API keys, subscription management
- 🌍 **8 Languages** — English, Turkish, German, French, Spanish, Arabic, Japanese, Chinese
- 💳 **Subscriptions** — USDC payments on Base, Optimism, Arbitrum, HyperEVM

## Architecture

```
zyai.org (Cloudflare Worker)
├── /api/chat          — AI chat with knowledge context + DeFi data
├── /api/auth          — User authentication
├── /api/search        — Knowledge base search
├── /api/v1/chat       — Developer API
├── /api/v1/search     — Developer search API
├── /api/v1/keys       — API key generation
├── /api/subscribe     — USDC subscription verification
├── /api/profile       — User profile & stats
└── /                  — Web UI

Cloudflare D1 (zy-brain)
├── knowledge        — 3000+ developer & security entries
├── knowledge_fts    — Full-text search index
├── users            — User accounts
├── chats            — Chat history
├── telegram_history — Telegram conversation history
├── api_keys         — Developer API keys
└── subscriptions    — User subscriptions

Workers
├── knowledge-pipeline   — GitHub data ingestion (6h cron) — 178 sources
├── knowledge-enricher   — AI content enrichment (30min cron)
├── security-feed        — CVE + security blog feeds (4h cron)
├── telegram-bot         — Telegram interface
└── discord-bot          — Discord slash commands
```

## Knowledge Base Categories

| Category | Description |
|----------|-------------|
| `web2-security` | OWASP, CVEs, pentesting, bug bounty |
| `smart-contract-security` | Audit tools, exploit patterns, CTFs |
| `defi` | DeFi protocols, MEV, flash loans |
| `onchain-research` | Blockchain forensics, analytics |
| `web3` | Dev tools (Hardhat, Wagmi, Viem...) |
| `ai-coding` | AI coding assistants |
| `agents` | AI agent frameworks |
| `llm-tools` | LLM infrastructure |
| `devops` | Self-hosting, CI/CD |
| `frontend` | UI frameworks |
| `rust` | Rust ecosystem |
| `python-ai` | Python ML/AI |
| `database` | ORMs and databases |
| `cve` | Real-time CVE entries |
| `defi-hack` | DeFi hack analysis |

## Developer API

```bash
# Get API key
curl -X POST https://zyai.org/api/v1/keys \
  -H "Content-Type: application/json" \
  -d '{"email": "you@example.com"}'

# Ask a question
curl -X POST https://zyai.org/api/v1/chat \
  -H "Authorization: Bearer zyai_xxxx" \
  -H "Content-Type: application/json" \
  -d '{"question": "What is a reentrancy attack?"}'

# Search knowledge base
curl "https://zyai.org/api/v1/search?q=solidity" \
  -H "Authorization: Bearer zyai_xxxx"

# API status
curl https://zyai.org/api/v1/status
```

## Worker Bindings

| Binding | Type | Description |
|---------|------|-------------|
| `DB` | D1 Database | zyai-brain database |
| `AI` | Workers AI | Cloudflare AI models |
| `AI_SEARCH` | AI Search | Semantic search instance |
| `ASSETS` | R2 Bucket | zyai-assets storage |
| `PIPELINE_SECRET` | Secret | Pipeline auth key |
| `OPENROUTER_KEY` | Secret | OpenRouter API key |
| `GROQ_KEY` | Secret | Groq API key |
| `MISTRAL_KEY` | Secret | Mistral API key |
| `TELEGRAM_TOKEN` | Secret | Telegram bot token |
| `DISCORD_TOKEN` | Secret | Discord bot token |
| `DISCORD_APP_ID` | Secret | Discord application ID |
| `DISCORD_PUBLIC_KEY` | Secret | Discord public key |

## Chrome Extension

Install from the extension files:
1. Download all extension files
2. Open `chrome://extensions`
3. Enable Developer Mode
4. Click "Load unpacked" and select the folder

## License

MIT © 2026 ZyAI — [zyai.org](https://zyai.org)
