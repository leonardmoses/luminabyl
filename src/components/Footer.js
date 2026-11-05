import Link from "next/link";
import Sparkle from "@/components/Sparkle";

export default function Footer() {
  return (
    <footer className="bg-sage text-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 text-sm sm:grid-cols-3 sm:px-6">
        <div>
          <p className="font-display text-3xl">Lumina by L</p>
          <p className="mt-2 text-foreground/75">Handmade candles &amp; soaps, made with love.</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-gold-dark">Shop</p>
          <ul className="mt-3 space-y-2 text-foreground/80">
            <li><Link href="/#shop" className="hover:text-foreground">All candles</Link></li>
            <li><Link href="/#custom" className="hover:text-foreground">Custom orders</Link></li>
            <li>Seasonal</li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-gold-dark">Help</p>
          <ul className="mt-3 space-y-2 text-foreground/80">
            <li>Shipping &amp; returns</li>
            <li>Candle care</li>
            <li>Contact us</li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 border-t border-foreground/10 py-6 text-xs text-foreground/70">
        <Sparkle className="h-2.5 w-2.5 text-gold-dark" />
        © Lumina by L. All rights reserved.
        <Sparkle className="h-2.5 w-2.5 text-gold-dark" />
      </div>
    </footer>
  );
}
