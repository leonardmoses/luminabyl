import Image from "next/image";
import { formatPrice } from "@/lib/products";

const toneBg = {
  blush: "bg-blush-light",
  sage: "bg-sage-light",
};

// Later: link to the product page and a working "Add to cart".
export default function ProductCard({ name, tagline, description, price, image, tone }) {
  return (
    <article className="group flex flex-col">
      <div
        className={`relative aspect-4/5 overflow-hidden rounded-t-[999px] rounded-b-3xl ${toneBg[tone] ?? "bg-muted"} p-3`}
      >
        <div className="relative h-full w-full overflow-hidden rounded-t-[999px] rounded-b-2xl">
          <Image
            src={image}
            alt={`${name} candle`}
            fill
            sizes="(min-width: 768px) 40vw, 90vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>
      <div className="mt-6 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-gold-dark">{tagline}</p>
        <h3 className="mt-2 font-display text-3xl">{name}</h3>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
        <p className="mt-4 font-display text-xl italic text-foreground">{formatPrice(price)}</p>
        <button
          type="button"
          disabled
          className="mt-5 rounded-full bg-accent px-7 py-3 text-sm tracking-wide text-accent-foreground opacity-90 disabled:cursor-not-allowed"
        >
          Add to cart
        </button>
      </div>
    </article>
  );
}
