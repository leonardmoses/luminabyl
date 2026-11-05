# Shopping cart and checkout

- **Date started:** 2026-11-04
- **Last updated:** 2026-11-05
- **Machine:** Xavier
- **File:** claude-portable/2026/2026-11-04-cart-and-checkout.md

## Summary
User wants a shopping cart (add to cart → checkout → enter payment info). This session started by listing what's needed from the user before building. Nothing built yet.

## Status
- [x] Gave the user the list of accounts, keys and decisions needed
- [ ] Waiting on answers (see Open questions)

## Decisions
- **Stripe** is the payment provider.
- **Embedded checkout** (Stripe Embedded Checkout, `ui_mode: embedded`, on our own `/checkout` page). User wants no redirect or popup because unfamiliar shoppers may think a separate payment window is a scam. Embedded Checkout still handles shipping address, shipping rates, tax and Apple/Google Pay inside the iframe.
- **Currency: USD.** Payouts to a Capital One (US) bank account.
- **Products: physical** (handmade candles and soaps).
- **No shipping for now.** Orders are handed to customers in person at a booth or market. The site handles marketing plus the online sale and payment. Shipping will be added later and will be **US only**, so build checkout so shipping can be switched on later (Stripe Checkout `shipping_address_collection` + `shipping_options`) without a rewrite.
- Card data is entered only inside Stripe's iframe and never touches our server, which keeps PCI scope minimal.
- Recommended cart stored in the browser (localStorage) for guests, with prices always re-read from Supabase on the server at checkout (never trust client prices).

## Next steps
1. Get the user's answers and keys.
2. Create/choose the Supabase project; create `products`, `orders`, `order_items` tables + `product-images` storage bucket with RLS.
3. Build: product pages, cart (context + localStorage), cart page, checkout server action → Stripe, success page, Stripe webhook route that marks orders paid.
4. Add env vars locally and in Vercel; register webhook endpoint in Stripe.

## Open questions
- Pickup flow: do customers pay online ahead of time and pick up at a market, and if so, should they choose which market or event? Or do they buy on their phone at the booth?
- Contact info to collect at checkout: name + email (Stripe default), plus phone?
- Variants (scent, size) with different prices?
- Track stock? Handmade, so likely limited.
- Sales tax: Stripe Tax now or later?
- Guest checkout or require accounts?
- New Supabase project for Luminabyl?
- A few real products (name, price, photo, description) to seed.

## Log
- 2026-11-04 — Read prior session; listed requirements for cart + checkout for the user.
- 2026-11-04 — Committed and pushed session memory updates to `main` (no code changes yet).
- 2026-11-05 — User created a Stripe account (Stripe chosen). Created a git-ignored `.env.local` on Xavier with empty Stripe/Supabase slots for the user to fill in. Gave the user the list of Stripe dashboard settings to check: Sandbox API keys, business/public details, statement descriptor, branding, payment methods, tax.
- 2026-11-05 — User added Stripe test keys to `.env.local` on Xavier (verified prefixes `pk_test_` / `sk_test_` only, not values) and is adding them to Vercel env vars. Vercel warned about the `NEXT_PUBLIC_` prefix. That's expected for the publishable key only; `STRIPE_SECRET_KEY` must never get the prefix. Test keys go in all Vercel environments for now and get swapped for live keys at launch.
- 2026-11-05 — User chose embedded checkout, USD, physical products (candles and soaps). Asked about shipping, variants, stock and Supabase.
- 2026-11-05 — User: no shipping yet, in-person handoff at booth or market; future shipping will be US only. Asked about the pickup flow.
