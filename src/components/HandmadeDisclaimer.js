import Sparkle from "@/components/Sparkle";

// Handmade-variation disclaimer (owner-supplied wording). Reuse on product
// pages and at checkout.
export default function HandmadeDisclaimer({ className = "" }) {
  return (
    <aside
      aria-labelledby="handmade-disclaimer"
      className={`mx-auto max-w-3xl rounded-3xl border border-gold/40 bg-muted/60 px-6 py-8 text-center sm:px-10 ${className}`}
    >
      <div className="flex items-center justify-center gap-2 text-gold">
        <Sparkle className="h-3 w-3" />
        <h3
          id="handmade-disclaimer"
          className="text-xs uppercase tracking-[0.3em] text-gold-dark"
        >
          Disclaimer
        </h3>
        <Sparkle className="h-3 w-3" />
      </div>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        <span className="font-medium text-foreground">Please note:</span> Since
        our products are handmade in small batches, you may notice slight
        differences in color, shade, scent, or appearance from one batch to
        another. The natural ingredients, soy wax, soap bases, and fragrances we
        use can vary slightly, which means each product may look or smell a
        little different. These small differences are completely normal and are
        part of what makes each handmade product unique. They do not affect the
        quality of the product.
      </p>
    </aside>
  );
}
