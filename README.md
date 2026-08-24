# vitorfarias.dev

Personal portfolio — trajectory and projects. Next.js (App Router) + TypeScript, CSS Modules, English/Portuguese i18n, and a contact form backed by a Resend-powered API route.

## Getting started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — it redirects to `/en` (or use `/pt` directly).

Copy `.env.local.example` to `.env.local` and fill in `RESEND_API_KEY` / `CONTACT_EMAIL_TO` to test the contact form end-to-end.

## Editing content

- Bio/skills text: `src/app/[locale]/dictionaries/{en,pt}.json`
- Projects: `src/content/projects.ts`

See `CLAUDE.md` for the full architecture notes.

## Deploy

Deployed on [Vercel](https://vercel.com/new) — set `RESEND_API_KEY` and `CONTACT_EMAIL_TO` in Project Settings → Environment Variables.
