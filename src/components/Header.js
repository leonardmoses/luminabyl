import Link from "next/link";

const navLinks = [
  { href: "#featured", label: "Shop" },
  { href: "#categories", label: "Categories" },
  { href: "#about", label: "About" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Luminabyl
        </Link>

        <nav className="hidden gap-8 text-sm sm:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4 text-sm">
          {/* Placeholder actions — wired up when auth and cart are built */}
          <span className="text-muted-foreground">Sign in</span>
          <span className="rounded-full border border-border px-3 py-1">
            Cart (0)
          </span>
        </div>
      </div>
    </header>
  );
}
