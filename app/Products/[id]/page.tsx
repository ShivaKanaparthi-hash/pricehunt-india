import { notFound } from "next/navigation";
import Link from "next/link";
import { products } from "@/data/products";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductDetailsPage({ params }: Props) {
  const { id } = await params;

  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) /
          product.originalPrice) *
          100
      )
    : 0;

  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      <Link
        href="/products"
        className="text-blue-600 hover:underline"
      >
        ← Back to Products
      </Link>

      <div className="grid md:grid-cols-2 gap-10 mt-8">
        <img
          src={product.image}
          alt={product.title}
          className="w-full rounded-xl border"
        />

        <div>
          <h1 className="text-4xl font-bold">
            {product.title}
          </h1>

          <p className="text-yellow-500 mt-2">
            ⭐ {product.rating}
          </p>

          <p className="mt-6 text-gray-700">
            {product.description}
          </p>

          <div className="mt-8">
            <span className="text-4xl font-bold text-green-600">
              ₹{product.price.toLocaleString()}
            </span>

            {product.originalPrice && (
              <>
                <span className="ml-4 text-xl line-through text-gray-400">
                  ₹{product.originalPrice.toLocaleString()}
                </span>

                <span className="ml-4 text-red-600 font-bold">
                  {discount}% OFF
                </span>
              </>
            )}
          </div>

          <div className="mt-6">
            <p>
              <strong>Category:</strong> {product.category}
            </p>

            <p>
              <strong>Store:</strong> {product.store}
            </p>
          </div>

          <a
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
          >
            View Deal
          </a>
        </div>
      </div>
    </main>
  );
}