@AGENTS.md

# Luminabyl — Claude instructions

The user works on this project from **multiple computers**. Machine-local Claude memory does not follow them, so this repo carries its own memory in `claude-portable/`. Treat it as the source of truth for what has been done and what is in progress.

## Session memory (`claude-portable/`)

```
claude-portable/
  README.md            how the logs work + template
  2026/
    2026-11-03-project-setup-vercel-domain.md
    ...
  2027/
    ...
```

### At the start of every conversation
1. List `claude-portable/<current year>/` (and the previous year in January) and read the **2–3 most recent** session files (names are date-prefixed, so sort by name).
2. Also read any older file whose topic matches what the user is asking about.
3. Use the "Next steps" and "Open questions" sections to pick up where the last session left off. Do not ask the user to re-explain things that are recorded there.

### During every conversation
- **One file per conversation.** On the first substantive task, create
  `claude-portable/<YYYY>/<YYYY-MM-DD>-<short-kebab-topic>.md` using the template in `claude-portable/README.md`. Fill in the machine name (`hostname -s`).
- If the conversation is resumed or its context was summarized, keep updating **the same file** (its path is recorded in the file header and should be carried into any summary). Don't start a second file for the same chat.
- **Update the file as you go**, not just at the end: after each completed task, decision, or change of plan. Keep "Status", "Next steps", and "Open questions" current; append to "Log".
- Record *why* behind decisions and anything not obvious from the code or git history (external dashboard settings, DNS, account choices, user preferences).
- **Never write secrets** (API keys, passwords, tokens, `.env.local` values) into these files. They are committed to git.
- If a fact becomes long-lived (stack choice, convention, user preference), also add it to the "Project facts" section below.

## Project facts (stable)

- **What it is:** luminabyl.com, an e-shop where the owner posts product photos and sells them with online payment.
- **Stack:** Next.js 16 (App Router, **JavaScript, not TypeScript**), Tailwind CSS v4, Supabase (auth + database + storage), hosted on Vercel.
- **Repo:** https://github.com/leonardmoses/luminabyl (branch `main` → Vercel production).
- **Domain:** registered at Porkbun, DNS managed at Porkbun. `www.luminabyl.com` is the primary domain; `luminabyl.com` 308-redirects to it.
- **Next.js 16 specifics:** middleware is now `src/proxy.js`. Cache Components is enabled, so anything that reads cookies/session (for example, the server Supabase client) must render inside `<Suspense>`. Read `node_modules/next/dist/docs/` before using unfamiliar APIs.
- **Env vars:** see `.env.example`. Real values only go in `.env.local` (git-ignored) and Vercel → Settings → Environment Variables.
- **Design:** the landing page is placeholder only. The user will supply page design details; don't invent final branding.
