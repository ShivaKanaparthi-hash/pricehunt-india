export default function Navbar() {
    return (
      <nav className="sticky top-0 z-50 border-b bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-blue-600">
            PriceHunt India
          </h1>
  
          {/* Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <a href="#" className="font-medium hover:text-blue-600">
              Home
            </a>
  
            <a href="#" className="font-medium hover:text-blue-600">
              Categories
            </a>
  
            <a href="#" className="font-medium hover:text-blue-600">
              Deals
            </a>
  
            <a href="#" className="font-medium hover:text-blue-600">
              Stores
            </a>
          </div>
  
          {/* Login Button */}
          <button className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700">
            Login
          </button>
        </div>
      </nav>
    );
  }