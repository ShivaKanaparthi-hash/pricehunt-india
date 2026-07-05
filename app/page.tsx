import { Search } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold text-blue-600">
            PriceHunt India
          </h1>

          <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            Login
          </button>
        </div>
      </nav>

      {/* Hero Section */}
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

          <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-white">
            <Search size={18} />
            Search
          </button>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h3 className="mb-8 text-3xl font-bold">
          Trending Categories
        </h3>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {[
            "📱 Mobiles",
            "💻 Laptops",
            "🎧 Earbuds",
            "📺 TVs",
            "⌚ Smart Watches",
            "🏠 Home Appliances",
            "🧊 Refrigerators",
            "🧺 Washing Machines",
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl bg-white p-8 text-center shadow transition hover:shadow-xl"
            >
              <p className="text-lg font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}