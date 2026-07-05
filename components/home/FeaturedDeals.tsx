import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    name: "iPhone 16",
    price: "₹79,999",
    store: "Amazon",
    image: "https://placehold.co/300x300?text=iPhone+16",
  },
  {
    name: "Samsung Galaxy S25",
    price: "₹74,999",
    store: "Flipkart",
    image: "https://placehold.co/300x300?text=Galaxy+S25",
  },
  {
    name: "Sony WH-1000XM5",
    price: "₹24,990",
    store: "Croma",
    image: "https://placehold.co/300x300?text=Sony+XM5",
  },
  {
    name: "LG Smart TV 55\"",
    price: "₹49,999",
    store: "Reliance Digital",
    image: "https://placehold.co/300x300?text=LG+TV",
  },
];

export default function FeaturedDeals() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="mb-8 text-3xl font-bold">🔥 Featured Deals</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <Card
            key={product.name}
            className="overflow-hidden transition hover:-translate-y-1 hover:shadow-xl"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-56 w-full object-cover"
            />

            <CardContent className="space-y-3 p-5">
              <Badge>{product.store}</Badge>

              <h3 className="text-lg font-semibold">
                {product.name}
              </h3>

              <p className="text-2xl font-bold text-blue-600">
                {product.price}
              </p>

              <button className="w-full rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-700">
                View Deal
              </button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}