export default function Categories() {
    const categories = [
      "📱 Mobiles",
      "💻 Laptops",
      "🎧 Earbuds",
      "📺 TVs",
      "⌚ Smart Watches",
      "🏠 Home Appliances",
      "🧊 Refrigerators",
      "🧺 Washing Machines",
    ];
  
    return (
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h3 className="mb-8 text-3xl font-bold">
          Trending Categories
        </h3>
  
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {categories.map((item) => (
            <div
              key={item}
              className="rounded-xl bg-white p-8 text-center shadow transition hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="text-lg font-semibold">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }