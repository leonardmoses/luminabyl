import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import Sparkle, { Ornament } from "@/components/Sparkle";
import { products } from "@/lib/products";

// Copy on this page is placeholder text in the brand's voice; replace with final wording.
const promises = [
  { title: "Hand-poured", text: "Every candle is poured and finished by hand." },
  { title: "Small batches", text: "Made in limited runs, so each one gets attention." },
  { title: "Made to gift", text: "Pretty enough to give, lovely to keep for yourself." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-sage">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.55),transparent_60%)]"
        />
        <Sparkle className="absolute left-[8%] top-16 h-4 w-4 text-gold" />
        <Sparkle className="absolute left-[46%] bottom-12 h-3 w-3 text-gold" />
        <Sparkle className="absolute right-[6%] top-1/3 h-5 w-5 text-gold" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
          <div className="text-center md:text-left">
            <p className="text-xs uppercase tracking-[0.3em] text-gold-dark">
              Hand-poured candles
            </p>
            <h1 className="mt-5 font-display text-5xl leading-[1.05] sm:text-6xl">
              Little moments of <em className="text-gold-sheen">light</em>, made by hand.
            </h1>
            <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-foreground/80 md:mx-0">
              Decorative candles that look good enough to eat, and glow even
              better. Poured in small batches and finished with care.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4 md:justify-start">
              <a
                href="#shop"
                className="rounded-full bg-accent px-8 py-3.5 text-sm tracking-wide text-accent-foreground transition hover:bg-accent/90"
              >
                Shop the collection
              </a>
              <a
                href="#story"
                className="rounded-full border border-foreground/30 px-8 py-3.5 text-sm tracking-wide transition hover:border-foreground/60"
              >
                Our story
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-t-[999px] rounded-b-[2.5rem] border border-gold/50" />
            <div className="relative aspect-4/5 overflow-hidden rounded-t-[999px] rounded-b-[2rem] shadow-xl shadow-foreground/10">
              <Image
                src="/products/pumpkin-cream-candle.jpg"
                alt="Pumpkin Cream candle topped with whipped wax and a pink pumpkin"
                fill
                priority
                sizes="(min-width: 768px) 28rem, 90vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Promises */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 text-center sm:grid-cols-3 sm:px-6">
          {promises.map((p) => (
            <div key={p.title}>
              <Sparkle className="mx-auto h-3.5 w-3.5 text-gold" />
              <p className="mt-3 font-display text-2xl">{p.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Shop */}
      <section id="shop" className="mx-auto max-w-6xl scroll-mt-28 px-4 py-20 sm:px-6 sm:py-28">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-dark">The collection</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">Our candles</h2>
          <Ornament className="mt-6" />
        </div>
        <div className="mx-auto mt-14 grid max-w-4xl gap-16 md:grid-cols-2 md:gap-12">
          {products.map((product) => (
            <ProductCard key={product.slug} {...product} />
          ))}
        </div>
      </section>

      {/* Story */}
      <section id="story" className="scroll-mt-28 bg-blush-light">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 md:py-28">
          <div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center rounded-full border-8 border-background bg-sage shadow-lg shadow-foreground/10">
            {/* Placeholder logo until the final vector arrives. */}
            <Image
              src="/brand/logo-placeholder.png"
              alt="Lumina by L logo"
              width={800}
              height={744}
              sizes="(min-width: 768px) 22rem, 70vw"
              className="h-auto w-[78%]"
            />
          </div>
          <div className="text-center md:text-left">
            <p className="text-xs uppercase tracking-[0.3em] text-gold-dark">Our story</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">
              Made slowly, <em>with love</em>
            </h2>
            <p className="mt-6 leading-relaxed text-foreground/80">
              Lumina by L began with a love of soft light and pretty details.
              Each candle is designed like a little dessert or bouquet, then
              poured and decorated by hand, one at a time.
            </p>
            <p className="mt-4 leading-relaxed text-foreground/80">
              Placeholder: tell customers who L is, what inspires each
              collection, and what the candles are made from.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="scroll-mt-28 px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-2xl rounded-[2rem] border border-gold/40 bg-sage-light px-6 py-14 text-center sm:px-12">
          <Ornament />
          <h2 className="mt-5 font-display text-4xl">Join the glow</h2>
          <p className="mt-3 text-muted-foreground">
            New candles, seasonal drops and the occasional treat, straight to your inbox.
          </p>
          <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="you@example.com"
              className="min-w-0 flex-1 rounded-full border border-border bg-background px-5 py-3 text-sm outline-none focus:border-gold"
            />
            <button
              type="button"
              className="rounded-full bg-accent px-7 py-3 text-sm tracking-wide text-accent-foreground"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
