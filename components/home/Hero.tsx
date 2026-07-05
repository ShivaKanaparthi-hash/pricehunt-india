import { Search } from "lucide-react";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 text-center">
      <h2 className="text-5xl font-bold">
        Find the Best Price Across India's Top Stores
      </h2>

      <p className="mt-6 text-lg text-gray-600">
        Compare prices from Amazon, Flipkart, Croma,
        Reliance Digital and many more.
      </p>

      <div className="mx-auto mt-10 flex max-w-xl rounded-xl border bg-white p-2 shadow">
        <input
          type="text"
          placeholder="Search for Mobiles, Laptops, TVs..."
          className="flex-1 rounded-lg px-4 py-3 outline-none"
        />

        <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
          <Search size={18} />
          Search
        </button>
      </div>
    </section>
  );
}