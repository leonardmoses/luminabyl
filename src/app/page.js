import ProductCard from "@/components/ProductCard";

const featuredProducts = [
  { id: 1, name: "Product name one", price: "$00.00" },
  { id: 2, name: "Product name two", price: "$00.00" },
  { id: 3, name: "Product name three", price: "$00.00" },
  { id: 4, name: "Product name four", price: "$00.00" },
];

const categories = ["Category one", "Category two", "Category three"];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <p className="text-sm uppercase tracking-widest text-muted-foreground">
          Placeholder eyebrow text
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
          Headline for the Luminabyl landing page goes here.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">
          A short supporting sentence about the store and what makes its
          products special. Replace with final copy.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#featured"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground"
          >
            Shop now
          </a>
          <a
            href="#about"
            className="rounded-full border border-border px-6 py-3 text-sm font-medium"
          >
            Learn more
          </a>
        </div>
      </section>

      {/* Featured products */}
      <section id="featured" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">
            Featured products
          </h2>
          <span className="text-sm text-muted-foreground">View all →</span>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-semibold tracking-tight">
          Shop by category
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category}
              className="flex aspect-4/3 items-end rounded-lg bg-muted p-6"
            >
              <span className="font-medium">{category}</span>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-20 bg-muted">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-2">
          <div className="aspect-4/3 rounded-lg bg-background" />
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold tracking-tight">
              About Luminabyl
            </h2>
            <p className="mt-4 text-muted-foreground">
              Placeholder paragraph telling the story behind the shop: who
              makes the products, how they are made, and why customers will
              love them.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6">
        <h2 className="text-2xl font-semibold tracking-tight">
          Stay in the loop
        </h2>
        <p className="mt-3 text-muted-foreground">
          Placeholder text inviting visitors to join the mailing list.
        </p>
        <div className="mx-auto mt-8 flex max-w-md gap-2">
          <input
            type="email"
            placeholder="you@example.com"
            className="min-w-0 flex-1 rounded-full border border-border bg-background px-4 py-3 text-sm"
          />
          <button
            type="button"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground"
          >
            Subscribe
          </button>
        </div>
      </section>
    </>
  );
}
