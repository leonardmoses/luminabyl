# Project setup, Vercel deploy and domain

- **Date started:** 2026-11-03
- **Last updated:** 2026-11-03
- **Machine:** Xavier
- **File:** claude-portable/2026/2026-11-03-project-setup-vercel-domain.md

## Summary
Scaffolded the Luminabyl Next.js boilerplate (JS + Tailwind + Supabase helpers) with a placeholder landing page, pushed it to GitHub, deployed it on Vercel, and connected luminabyl.com via Porkbun DNS. The site is live at https://www.luminabyl.com with placeholder content. Then set up this portable memory system (`CLAUDE.md` + `claude-portable/`).

## Status
- [x] Next.js 16.4.5 app scaffolded (`create-next-app`, JS, Tailwind v4, ESLint, App Router, `src/`, `@/*` alias)
- [x] Placeholder landing page: hero, featured products, categories, about, newsletter (`src/app/page.js`); Header, Footer, ProductCard components
- [x] Supabase wiring: `src/lib/supabase/{client,server,proxy}.js` and `src/proxy.js` (session refresh; skips cleanly when env vars are missing)
- [x] `next.config.mjs` allows images from `*.supabase.co/storage/v1/object/public/**`
- [x] `.env.example`; `.gitignore` hardened (env, keys, supabase CLI state, logs, editor/Dropbox files)
- [x] Pushed to GitHub `leonardmoses/luminabyl` (`main`), secret scan clean
- [x] Vercel project `luminabyl` created, first production deploy (manual, from `main`); `luminabyl.vercel.app` works
- [x] Domains in Vercel: `www.luminabyl.com` = Production (primary); `luminabyl.com` → 308 → www
- [x] Porkbun DNS: removed parking ALIAS (`pixie.porkbun.com`) and wildcard CNAME (`uixie.porkbun.com`); added A `@` → `76.76.21.21` and CNAME `www` → `cname.vercel-dns.com`. HTTPS certs issued for both.
- [x] Portable memory: `CLAUDE.md` + `claude-portable/` created
- [ ] **DNS update recommended by Vercel** (optional; legacy values still work): A `@` → `216.198.79.1`; CNAME `www` → `19d52d5bd5cd5efb.vercel-dns-017.com`. User was given steps; not yet confirmed done.
- [ ] Set Vercel env var `NEXT_PUBLIC_SITE_URL=https://www.luminabyl.com`, then redeploy (not yet confirmed)
- [ ] Verify GitHub → Vercel auto-deploy on push (repo was connected after the first push, so it hasn't been tested yet)

## Decisions
- JavaScript, not TypeScript — user preference.
- `www` is the primary domain — Vercel's default/recommended setup; kept it instead of the apex.
- DNS stays at Porkbun (records, not Vercel nameservers), so any email records remain under Porkbun's control.
- Supabase env var names use the new key naming: `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`.
- Landing page kept fully static (no cookie reads) so it prerenders; auth UI will stream in later behind `<Suspense>`.
- Payment provider not installed yet; waiting on the user's choice.

## Next steps
1. Confirm the Porkbun DNS update to Vercel's new records, then verify with `dig`.
2. Commit + push (this also tests auto-deploy).
3. Supabase: choose or create a project (the connected Supabase MCP shows an existing project "bindtech-toolbox"; do not touch it without permission), then add env vars locally and in Vercel. Set Auth → URL Configuration: Site URL `https://www.luminabyl.com`, redirect URLs for localhost and Vercel previews.
4. Payments: likely Stripe Checkout, pending the user's answer.
5. Apply the user's page design details when provided.

## Open questions (asked the user, not yet answered)
- Payment provider, currency, tax/VAT handling?
- Single seller (owner only) or marketplace with multiple sellers?
- Physical vs digital products; variants (size/colour); inventory?
- Full cart or "Buy now"; guest checkout; sign-in methods?
- New Supabase project or existing?
- Branding: logo, colours, fonts?

## Log
- 2026-11-03 — Scaffolded project, added Supabase helpers and placeholder landing page. Lint and build pass.
- 2026-11-03 — First git commit pushed to GitHub (`95bfdfb`), on top of the create-next-app commit.
- 2026-11-03 — Vercel: project imported; no deployment at first because the push predated the Git connection; user created a deployment manually. Site live on `luminabyl.vercel.app`.
- 2026-11-03 — Domains added; Porkbun DNS switched; both certs issued; `https://luminabyl.com` → `https://www.luminabyl.com` verified.
- 2026-11-03 — Vercel showed "DNS Change Recommended" (new IP range); gave the user steps to update.
- 2026-11-03 — Created `CLAUDE.md` and the `claude-portable/` memory system.
- 2026-11-03 — User confirmed setup is complete; committed and pushed `CLAUDE.md` + `claude-portable/` to `main` (also serves as the auto-deploy test).
- Note: Dropbox syncs `node_modules`/`.next`; suggested `xattr -w com.dropbox.ignored 1 node_modules .next` (not applied).
