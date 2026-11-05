# Logo vectorization and site look & feel

- **Date started:** 2026-11-05
- **Last updated:** 2026-11-05
- **Machine:** Xavier
- **File:** claude-portable/2026/2026-11-05-logo-and-design.md

## Summary
The brand is **Lumina by L**: hand-made decorative candles (dessert-style and botanical). The user supplied the logo (348×349 JPG, no vector) and two product photos. Claude auto-traced the logo to SVG; **the user rejected the trace quality** and will provide a better logo later. Until then a background-removed PNG of the original logo is the placeholder. Then the homepage was restyled from the logo and product photos.

## Status
- [x] Brand assets in `public/brand/`: `logo-original.jpg` (source), `logo-placeholder.png` (sage background keyed out, used on the site), (rejected SVG traces deleted).
- [x] Product photos resized to 1500px wide in `public/products/`: `pumpkin-cream-candle.jpg`, `sage-gold-candle.jpg`.
- [x] Theme in `src/app/globals.css`: cream bg, sage, blush, gold, deep forest green text (tokens like `bg-sage`, `text-gold-dark`, `bg-blush-light`, `font-display`). Dark mode removed on purpose (brand stays light).
- [x] Fonts: Cormorant Garamond (headings, `font-display`) and Jost (body). next/font variables are `--font-cormorant` / `--font-jost` (don't name them `--font-display`: that would clash with the Tailwind theme key).
- [x] Homepage: sage hero with the pumpkin candle in an arch frame, a 3-promise strip, "Our candles" with 2 product cards, "Our story" (blush background, logo in a sage circle), newsletter card, sage footer. Header logo, nav, Cart (0) placeholder.
- [x] Temporary product data in `src/lib/products.js` (names "Pumpkin Cream" and "Sage & Gold", descriptions and tagline are Claude's placeholders; `price: null` → "Price coming soon"; Add to cart disabled).
- [x] Lint and build pass. Checked visually at 1440px and 500px wide (headless Chrome).
- [x] Committed and pushed to `main`. Rejected SVG traces deleted.

## Decisions
- Text colour is deep forest green (#2f3b2e). The user's 5th image showed wordmark colour options (charcoal, white, cream, deep forest green, deep plum). The user hasn't chosen one yet; it's easy to change via `--foreground`/`--accent`.
- Arch-shaped photo frames and gold sparkle ornaments echo the logo.
- All copy is placeholder in the brand voice; no factual claims about materials (e.g. soy wax) were invented.

## Next steps
1. User reviews the look. Confirm the text/accent colour choice (forest green vs plum vs charcoal).
2. Get real product names, prices, scents, sizes and the "Our story" text.
3. Mobile nav: links are hidden below `sm` (no hamburger menu yet).
4. Replace the logo when the user has the proper vector.
5. Then continue cart + checkout (see 2026-11-04 file).

## Open questions
- Final wordmark/text colour?
- Real product details and prices?

## Log
- 2026-11-05: Answered the design-tool question. Traced the logo to SVG; user found it poor, so a keyed PNG of the original is the placeholder.
- 2026-11-05: Applied the brand look to the homepage, header, footer and product cards; added product photos and `src/lib/products.js`. Port 3001 was already in use (the user's own server, left alone); tested on 3002.
- 2026-11-05: Committed and pushed the redesign to `main` (Vercel auto-deploys). Rejected SVG traces kept out of git.
- 2026-11-05: Deleted the rejected SVG traces at the user's request.
- 2026-11-05: Added the owner-supplied handmade-variation disclaimer (`src/components/HandmadeDisclaimer.js`), shown under the product cards on the homepage. Reuse it on product pages / checkout later. Its wording reveals materials: soy wax, soap bases, fragrances, so the shop may also sell soaps.
- 2026-11-05: Added the owner's own copy (verbatim): story paragraph (she is a nurse and mother of two kids, 16 and 19; clean, natural candles AND soaps) replaces the placeholder in "Our story"; new `#custom` "Seasonal & custom orders" section with curing-time cards (cold-process soaps 4–6 wk, hot-process 2–4 wk, candles 7–10 days; melt-and-pour shea base = no cure). Site now says "candles & soaps" (hero eyebrow, footer, metadata). Nav "Contact" → "Custom orders". Still needed: a way for customers to message her (email/form) for custom quotes.
- 2026-11-05: User wants the copy kept exactly as pasted for now; a full review of all site text happens before the site is shown to anyone. (Flagged for that review: "Alongside some classic collection" and the "(I'll make sure we factor these exact wait times…)" sentence.)
