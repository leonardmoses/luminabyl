# Luminabyl

Online shop for luminabyl.com, built with Next.js 16 (App Router, JavaScript), Tailwind CSS v4, and Supabase, and hosted on Vercel.

## Getting started

```bash
cp .env.example .env.local   # then fill in your Supabase values
npm run dev                  # http://localhost:3000
```

## Structure

```
src/
  app/              routes (App Router): layout.js, page.js (landing)
  components/       Header, Footer, ProductCard
  lib/supabase/     client.js (browser), server.js (server), proxy.js (session refresh)
  proxy.js          Next.js 16 "proxy" (formerly middleware); refreshes the Supabase session
```

## Notes

- Cache Components is on (`next.config.mjs`). Any component that reads cookies or the session (for example, through the server Supabase client) must render inside `<Suspense>`.
- Product images from public Supabase Storage buckets are allowed by `next/image` (`images.remotePatterns`).
- Environment variables must also be added in Vercel → Project → Settings → Environment Variables.
