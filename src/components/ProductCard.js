// Placeholder product card. Later: real image (next/image from Supabase
// Storage), link to the product page, and an "Add to cart" action.
export default function ProductCard({ name, price }) {
  return (
    <div className="group">
      <div className="flex aspect-square items-center justify-center rounded-lg bg-muted text-xs text-muted-foreground">
        Product image
      </div>
      <div className="mt-3 flex items-start justify-between gap-2 text-sm">
        <p className="font-medium">{name}</p>
        <p className="text-muted-foreground">{price}</p>
      </div>
    </div>
  );
}
