import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <header className="mb-10">
        <h1 className="text-4xl font-bold">Miami Realty</h1>
        <p className="text-xl mt-2">Find your dream home in Miami</p>
      </header>
      
      <main>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Featured Properties</h2>
          {/* Add your property listings here */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example property card */}
            <div className="border rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-200 relative">
                {/* Placeholder for property image */}
              </div>
              <div className="p-4">
                <h3 className="font-bold">Luxury Condo in Downtown</h3>
                <p className="text-gray-700">$750,000</p>
                <p className="mt-2">3 bed · 2 bath · 1,500 sqft</p>
              </div>
            </div>
            {/* You can add more property cards here */}
          </div>
        </section>
      </main>
      
      <footer className="mt-16 pt-8 border-t">
        <p>© 2025 Miami Realty. All rights reserved.</p>
      </footer>
    </div>
  );
}