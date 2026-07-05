import Link from "next/link";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden border">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-52 object-cover"
      />

      <div className="p-4">
        <h2 className="font-semibold text-lg line-clamp-2">
          {product.title}
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          ⭐ {product.rating}
        </p>

        <div className="mt-3">
          <span className="text-2xl font-bold text-green-600">
            ₹{product.price.toLocaleString()}
          </span>

          {product.originalPrice && (
            <>
              <span className="ml-2 text-gray-400 line-through">
                ₹{product.originalPrice.toLocaleString()}
              </span>

              <span className="ml-2 text-red-600 font-semibold">
                {discount}% OFF
              </span>
            </>
          )}
        </div>

        <p className="mt-2 text-sm text-gray-600">
          Store: {product.store}
        </p>

        <Link
          href={`/products/${product.id}`}
          className="mt-4 block text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
        >
          View Deal
        </Link>
      </div>
    </div>
  );
}