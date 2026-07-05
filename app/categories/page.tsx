import Link from "next/link";
import { categories } from "@/data/categories";

export default function CategoriesPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-8">
        Browse Categories
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/categories/${category.id}`}
            className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 text-center border"
          >
            <div className="text-5xl mb-4">
              {category.icon}
            </div>

            <h2 className="text-xl font-semibold">
              {category.name}
            </h2>
          </Link>
        ))}
      </div>
    </main>
  );
}

