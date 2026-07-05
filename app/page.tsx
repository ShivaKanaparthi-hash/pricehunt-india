import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import FeaturedDeals from "@/components/home/FeaturedDeals";
import TopStores from "@/components/home/TopStores";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedDeals />
      <TopStores />
    </main>
  );
}