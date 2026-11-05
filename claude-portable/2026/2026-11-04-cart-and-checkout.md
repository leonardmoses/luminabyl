# Shopping cart and checkout

- **Date started:** 2026-11-04
- **Last updated:** 2026-11-04
- **Machine:** Xavier
- **File:** claude-portable/2026/2026-11-04-cart-and-checkout.md

## Summary
User wants a shopping cart (add to cart → checkout → enter payment info). This session started by listing what's needed from the user before building. Nothing built yet.

## Status
- [x] Gave the user the list of accounts, keys and decisions needed
- [ ] Waiting on answers (see Open questions)

## Decisions
- Recommended Stripe (Checkout hosted page, or embedded Payment Element) so card data never touches our server (keeps PCI scope minimal). Not yet confirmed by the user.
- Recommended cart stored in the browser (localStorage) for guests, with prices always re-read from Supabase on the server at checkout (never trust client prices).

## Next steps
1. Get the user's answers and keys.
2. Create/choose the Supabase project; create `products`, `orders`, `order_items` tables + `product-images` storage bucket with RLS.
3. Build: product pages, cart (context + localStorage), cart page, checkout server action → Stripe, success page, Stripe webhook route that marks orders paid.
4. Add env vars locally and in Vercel; register webhook endpoint in Stripe.

## Open questions
- Stripe OK? Hosted Checkout page vs payment form embedded on luminabyl.com?
- Currency; where they sell (countries); sales tax handling (Stripe Tax?).
- Physical (shipping address, shipping rates) or digital products? Variants? Inventory tracking?
- Guest checkout or require accounts?
- New Supabase project for Luminabyl?
- A few real products (name, price, photo, description) to seed.

## Log
- 2026-11-04 — Read prior session; listed requirements for cart + checkout for the user.
- 2026-11-04 — Committed and pushed session memory updates to `main` (no code changes yet).
