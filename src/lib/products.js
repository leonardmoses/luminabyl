// Temporary product data until products live in Supabase.
// Names, descriptions and prices are placeholders: replace with real ones.
export const products = [
  {
    slug: "pumpkin-cream-candle",
    name: "Pumpkin Cream",
    tagline: "Whipped-topping dessert candle",
    description:
      "A blush pumpkin-spice treat in glass, crowned with whipped wax, a dusting of cinnamon and a little pink pumpkin.",
    price: null,
    image: "/products/pumpkin-cream-candle.jpg",
    tone: "blush",
  },
  {
    slug: "sage-gold-candle",
    name: "Sage & Gold",
    tagline: "Botanical cream candle",
    description:
      "Creamy wax scattered with hand-placed sage leaves and gold-flecked blossoms. Quietly elegant.",
    price: null,
    image: "/products/sage-gold-candle.jpg",
    tone: "sage",
  },
];

export function formatPrice(price) {
  return price == null ? "Price coming soon" : `$${price.toFixed(2)}`;
}
