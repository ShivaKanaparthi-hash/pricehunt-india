const stores = [
    "Amazon",
    "Flipkart",
    "Croma",
    "Reliance Digital",
    "Vijay Sales",
    "Tata CliQ",
  ];
  
  export default function TopStores() {
    return (
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="mb-8 text-3xl font-bold">
          🏬 Compare Prices Across Top Stores
        </h2>
  
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {stores.map((store) => (
            <div
              key={store}
              className="rounded-xl border bg-white p-6 text-center shadow transition hover:shadow-lg"
            >
              <p className="font-semibold">{store}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }