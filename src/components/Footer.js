export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 text-sm sm:grid-cols-3 sm:px-6">
        <div>
          <p className="font-semibold">Luminabyl</p>
          <p className="mt-2 text-muted-foreground">
            Placeholder tagline for the store.
          </p>
        </div>
        <div>
          <p className="font-semibold">Shop</p>
          <ul className="mt-2 space-y-1 text-muted-foreground">
            <li>All products</li>
            <li>New arrivals</li>
            <li>Best sellers</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Help</p>
          <ul className="mt-2 space-y-1 text-muted-foreground">
            <li>Shipping &amp; returns</li>
            <li>Contact us</li>
            <li>FAQ</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © Luminabyl. All rights reserved.
      </div>
    </footer>
  );
}
