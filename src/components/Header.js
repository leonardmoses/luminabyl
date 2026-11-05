import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/#shop", label: "Shop" },
  { href: "/#story", label: "Our story" },
  { href: "/#newsletter", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-24 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2" aria-label="Lumina by L, home">
          {/* Placeholder logo until the final vector arrives. */}
          <Image
            src="/brand/logo-placeholder.png"
            alt=""
            width={800}
            height={744}
            className="h-20 w-auto"
            priority
          />
        </Link>

        <nav className="hidden gap-10 text-sm tracking-wide sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground transition-colors hover:text-gold-dark"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5 text-sm">
          {/* Placeholder actions — wired up when auth and cart are built */}
          <span className="hidden text-muted-foreground sm:inline">Sign in</span>
          <span className="rounded-full border border-gold/50 px-4 py-1.5 text-foreground">
            Cart (0)
          </span>
        </div>
      </div>
    </header>
  );
}
