import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CategoryPage({ params }: Props) {
  const { id } = await params;

  const categoryName = id
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  const filteredProducts = products.filter(
    (product) =>
      product.category.toLowerCase().replace(/\s+/g, "-") === id
  );

  if (filteredProducts.length === 0) {
    notFound();
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-10">
      <Link
        href="/categories"
        className="text-blue-600 hover:underline"
      >
        ← Back to Categories
      </Link>

      <h1 className="text-4xl font-bold mt-6 mb-8">
        {categoryName}
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="border rounded-xl p-4 bg-white hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover rounded-lg"
            />

            <h2 className="font-semibold mt-4">
              {product.title}
            </h2>

            <p className="text-green-600 font-bold mt-2">
              ₹{product.price.toLocaleString()}
            </p>

            <p className="text-sm text-gray-500">
              {product.store}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}