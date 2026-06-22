# ZyAI

> AI-powered security & developer knowledge base. Web2/Web3 security, onchain analysis, CVE tracking — built on Cloudflare.

**Live:** [zyai.org](https://zyai.org) · **Telegram:** [@zyai_bot](https://t.me/zyai_bot)

---

## What is ZyAI?

ZyAI is a security-focused AI assistant built for developers. It combines a self-growing knowledge base with real-time security feeds and onchain analysis capabilities.

## Features

- 💬 **AI Chat** — Multi-model support (Cloudflare AI, Groq, OpenRouter, Mistral)
- 🔐 **Security Knowledge** — Web2/Web3 vulnerabilities, OWASP, smart contract audit patterns
- ⛓ **Onchain Analysis** — Contract analysis on Base Mainnet
- 📡 **Live CVE Feed** — Real-time critical vulnerability tracking via NVD
- 📎 **File Analysis** — Upload code files for AI security review
- 🖥 **Live Preview** — AI-generated HTML rendered instantly
- 🤖 **Telegram Bot** — Same knowledge base via Telegram
- 👤 **User Accounts** — Chat history saved per user

## Architecture

```
zyai.org (Cloudflare Worker)
├── /api/chat        — AI chat with knowledge context
├── /api/auth        — User authentication
└── /                — Web UI

Cloudflare D1 
├── knowledge        — 1500+ developer & security entries
├── knowledge_fts    — Full-text search index
├── users            — User accounts
├── chats            — Chat history
└── telegram_history — Telegram conversation history

Workers
├── knowledge-pipeline   — GitHub data ingestion (6h cron)
├── knowledge-enricher   — AI content enrichment (30min cron)
├── security-feed        — CVE + security blog feeds (4h cron)
└── telegram-bot         — Telegram interface
```

## Knowledge Base Categories

- `ai-coding` — AI coding tools (Aider, Continue, Cline...)
- `agents` — AI agent frameworks (CrewAI, LangChain, AutoGPT...)
- `web3` — Blockchain dev tools (Hardhat, Wagmi, Viem...)
- `smart-contract-security` — Audit tools & patterns
- `web2-security` — OWASP, CVEs, penetration testing
- `defi` — DeFi protocols (Uniswap, Aave, Compound...)
- `llm-tools` — LLM infrastructure (Ollama, LiteLLM...)
- `devops` — Self-hosting (Coolify, Dokploy...)
- `frontend` — UI frameworks (Next.js, Tailwind, shadcn...)
- `rust` — Rust ecosystem
- `python-ai` — Python ML/AI (PyTorch, HuggingFace...)
- `database` — ORMs and databases
- `cve` — Real-time CVE entries
- `defi-hack` — DeFi hack analysis

## Setup

All workers are deployed via Cloudflare dashboard. Each worker requires:

| Binding | Type | Description |
|---------|------|-------------|
| `DB` | D1 Database | eip-brain database |
| `AI` | Workers AI | Cloudflare AI binding |
| `PIPELINE_SECRET` | Secret | Pipeline auth key |
| `OPENROUTER_KEY` | Secret | OpenRouter API key |
| `GROQ_KEY` | Secret | Groq API key |
| `MISTRAL_KEY` | Secret | Mistral API key |
| `TELEGRAM_TOKEN` | Secret | Telegram bot token |

## License

MIT © 2026 ZyAI — [zyai.org](https://zyai.org)
