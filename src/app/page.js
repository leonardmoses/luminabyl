import Image from "next/image";
import HandmadeDisclaimer from "@/components/HandmadeDisclaimer";
import ProductCard from "@/components/ProductCard";
import Sparkle, { Ornament } from "@/components/Sparkle";
import { products } from "@/lib/products";

// Hero and promises copy is placeholder text in the brand's voice.
// The story and custom-orders copy is the owner's own wording.
const promises = [
  { title: "Handmade", text: "Every candle and soap is made by hand, from scratch." },
  { title: "Small batches", text: "Made in limited runs, so each one gets attention." },
  { title: "Made to gift", text: "Pretty enough to give, lovely to keep for yourself." },
];

const curing = [
  { name: "Cold-process soaps", time: "4–6 weeks" },
  { name: "Hot-process soaps", time: "2–4 weeks" },
  { name: "Hand-poured candles", time: "7–10 days" },
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
              Handmade candles &amp; soaps
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
        <HandmadeDisclaimer className="mt-20" />
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
              From my heart <em>and home</em>
            </h2>
            {/* Owner-supplied copy. */}
            <p className="mt-6 leading-relaxed text-foreground/80">
              When I’m not caring for patients as a nurse or guiding my two
              amazing kids, ages 16 and 19, into adulthood, you can find me
              pouring small batches of clean, natural candles and soaps. This
              business grew out of my heart and home because, as both a
              healthcare worker and a mother focused on educating her children
              about mindful choices, keeping our spaces and bodies safe. Every
              single ingredient is carefully chosen to bring a little bit of
              comfort, warmth, and clean wellness into your family&apos;s daily
              routines.
            </p>
          </div>
        </div>
      </section>

      {/* Seasonal & custom orders (owner-supplied copy) */}
      <section id="custom" className="scroll-mt-28 bg-sage-light">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-gold-dark">
              Seasonal &amp; custom orders
            </p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">
              Made <em>just for you</em>
            </h2>
            <Ornament className="mt-6" />
            <p className="mx-auto mt-8 max-w-3xl leading-relaxed text-foreground/80">
              Alongside some classic collection, I love the magic of changing
              seasons with our specially crafted seasonal items. I am also
              always happy to take custom orders, tailoring scents,
              ingredients, and designs to create perfectly personalized soaps
              and candles for your special occasions or gifts. Because
              everything is handmade completely from scratch using natural
              methods, please keep the following curing timelines in mind so
              we can plan your custom orders perfectly (I&apos;ll make sure we
              factor these exact wait times into all our future scheduling for
              your batches!):
            </p>
          </div>

          <ul className="mt-12 grid gap-5 sm:grid-cols-3">
            {curing.map((item) => (
              <li
                key={item.name}
                className="rounded-3xl border border-gold/40 bg-background px-6 py-8 text-center"
              >
                <Sparkle className="mx-auto h-3.5 w-3.5 text-gold" />
                <p className="mt-3 font-display text-2xl">{item.name}</p>
                <p className="mt-2 font-display text-3xl italic text-gold-dark">
                  {item.time}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  curing time
                </p>
              </li>
            ))}
          </ul>

          <div className="mx-auto mt-12 max-w-3xl space-y-5 text-center leading-relaxed text-foreground/80">
            <p>
              The longer the cure time, the better the soap quality and
              longer-lasting bars. If you need a fast turnaround for a
              last-minute gift or event, we can also design personalized soaps
              using a clean, shea butter melt-and-pour soap base, which is
              ready for quick delivery with no curing wait time required!
            </p>
            <p className="font-display text-2xl italic text-foreground">
              Please feel free to send me a message anytime to get a custom
              quote and start designing your perfect personalized batch.
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
