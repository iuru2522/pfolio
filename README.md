# Cyberdeck Portfolio

Neuromancer-inspired single-page portfolio for a junior developer — CRT cyberdeck UI with `/CONNECT`, `/ARCHIVES`, `/PROTOCOLS`, and `/SIGNAL`.

## Stack

- Next.js (App Router) + React + TypeScript
- Tailwind CSS v4
- Zod validation + Server Action contact uplink (optional Resend)
- Vitest + Playwright

## Setup

```bash
pnpm install
cp .env.example .env.local   # optional mail provider keys
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Purpose |
|---------|---------|
| `pnpm dev` | Local deck |
| `pnpm build` / `pnpm start` | Production |
| `pnpm lint` | ESLint |
| `pnpm typecheck` | TypeScript |
| `pnpm test` | Vitest unit tests |
| `pnpm test:e2e` | Playwright e2e |

## Edit content

Owner-editable modules (no CMS):

- `content/profile.ts` — identity + fallback email
- `content/archives.ts` — projects
- `content/protocols.ts` — skills
- `content/console-logs.ts` — simulated sys logs

## Themes

Deck Override toggles **Matrix Grid** / **Night City**. Preference is stored in `localStorage` under `deck.theme`.

## Contact uplink

Without `RESEND_API_KEY` + `SIGNAL_FROM_EMAIL`, `/SIGNAL` returns a delivery failure and mailto fallback from `content/profile.ts`.

## Spec Kit docs

See `specs/001-cyberdeck-portfolio/quickstart.md` for full validation scenarios.
