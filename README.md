# Trials Next

Minimal Next.js 14 + TypeScript + Tailwind app for testing real deployment pipelines and GitHub webhooks.

## Quickstart

1. Install deps

   ```bash
   npm install
   ```

2. Configure env

   - Copy `env.example.txt` to `.env`
   - Set `GITHUB_WEBHOOK_SECRET`

3. Run dev server

   ```bash
   npm run dev
   ```

4. Test endpoints

   - App: http://localhost:3000
   - API: http://localhost:3000/api/ping
   - Webhook: POST http://localhost:3000/api/webhook with `x-hub-signature-256` header and raw JSON body

## GitHub Webhook Setup

- Endpoint: `/api/webhook`
- Method: POST
- Content type: `application/json`
- Secret: use `GITHUB_WEBHOOK_SECRET`

Signature verification uses `sha256` HMAC via `x-hub-signature-256`.