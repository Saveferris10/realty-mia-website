import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-md py-4 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            {/* Replace with your logo */}
            <span className="text-2xl font-bold text-blue-600">Miami Realty</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-800 hover:text-blue-600 font-medium">Home</Link>
            <Link href="/properties" className="text-gray-800 hover:text-blue-600 font-medium">Properties</Link>
            <Link href="/areas" className="text-gray-800 hover:text-blue-600 font-medium">Areas</Link>
            <Link href="/about" className="text-gray-800 hover:text-blue-600 font-medium">About</Link>
            <Link href="/contact" className="text-gray-800 hover:text-blue-600 font-medium">Contact</Link>
          </div>
          <div className="md:hidden">
            {/* Mobile menu button - you'll need to implement toggle functionality */}
            <button className="text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-96 md:h-[70vh] bg-gray-200">
        {/* Replace with your hero image */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-black/50 flex items-center">
          <div className="px-8 md:px-16 max-w-4xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Dream Home in Miami</h1>
            <p className="text-xl mb-8">Luxury properties in Miami's most desirable neighborhoods</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/properties" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium text-center">
                Browse Properties
              </Link>
              <Link href="/contact" className="bg-white hover:bg-gray-100 text-blue-600 px-6 py-3 rounded-md font-medium text-center">
                Contact an Agent
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white shadow-lg rounded-lg mx-4 md:mx-auto -mt-10 max-w-4xl p-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
            <select className="w-full p-2 border rounded-md">
              <option>Any Type</option>
              <option>Condo</option>
              <option>House</option>
              <option>Apartment</option>
              <option>Luxury Villa</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
            <select className="w-full p-2 border rounded-md">
              <option>All Miami</option>
              <option>South Beach</option>
              <option>Brickell</option>
              <option>Coconut Grove</option>
              <option>Coral Gables</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
            <select className="w-full p-2 border rounded-md">
              <option>Any Price</option>
              <option>$300k - $500k</option>
              <option>$500k - $1M</option>
              <option>$1M - $2M</option>
              <option>$2M+</option>
            </select>
          </div>
          <div className="flex items-end">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md font-medium">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow py-12 px-6 max-w-7xl mx-auto">
        {/* Featured Properties Section */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Properties</h2>
            <Link href="/properties" className="text-blue-600 hover:underline">
              View All
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Property Card 1 */}
            <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-64 bg-gray-200 relative">
                {/* Replace with actual property image */}
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-medium">
                  For Sale
                </div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl">Luxury Waterfront Condo</h3>
                  <p className="text-blue-600 font-bold">$1,250,000</p>
                </div>
                <p className="text-gray-500 mb-3">Brickell, Miami</p>
                <div className="flex justify-between text-gray-600 mb-4">
                  <span>3 Beds</span>
                  <span>2.5 Baths</span>
                  <span>1,800 sq ft</span>
                </div>
                <Link href="/properties/1" className="text-blue-600 hover:underline block text-center mt-2">
                  View Details
                </Link>
              </div>
            </div>
            
            {/* Property Card 2 */}
            <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-64 bg-gray-200 relative">
                {/* Replace with actual property image */}
                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-md text-sm font-medium">
                  New Listing
                </div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl">Modern South Beach Apartment</h3>
                  <p className="text-blue-600 font-bold">$875,000</p>
                </div>
                <p className="text-gray-500 mb-3">South Beach, Miami</p>
                <div className="flex justify-between text-gray-600 mb-4">
                  <span>2 Beds</span>
                  <span>2 Baths</span>
                  <span>1,200 sq ft</span>
                </div>
                <Link href="/properties/2" className="text-blue-600 hover:underline block text-center mt-2">
                  View Details
                </Link>
              </div>
            </div>
            
            {/* Property Card 3 */}
            <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-64 bg-gray-200 relative">
                {/* Replace with actual property image */}
                <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-md text-sm font-medium">
                  Luxury
                </div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl">Elegant Coral Gables Estate</h3>
                  <p className="text-blue-600 font-bold">$3,500,000</p>
                </div>
                <p className="text-gray-500 mb-3">Coral Gables, Miami</p>
                <div className="flex justify-between text-gray-600 mb-4">
                  <span>5 Beds</span>
                  <span>4.5 Baths</span>
                  <span>4,200 sq ft</span>
                </div>
                <Link href="/properties/3" className="text-blue-600 hover:underline block text-center mt-2">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Neighborhoods */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Explore Miami Neighborhoods</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Neighborhood 1 */}
            <div className="relative h-60 rounded-lg overflow-hidden group">
              <div className="absolute inset-0 bg-gray-200">
                {/* Replace with neighborhood image */}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/80 transition-all flex flex-col justify-end p-5">
                <h3 className="text-white font-bold text-xl mb-1">South Beach</h3>
                <p className="text-white/90 text-sm mb-3">Vibrant nightlife & beachfront properties</p>
                <p className="text-blue-300 text-sm">48 Properties</p>
              </div>
            </div>
            
            {/* Neighborhood 2 */}
            <div className="relative h-60 rounded-lg overflow-hidden group">
              <div className="absolute inset-0 bg-gray-200">
                {/* Replace with neighborhood image */}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/80 transition-all flex flex-col justify-end p-5">
                <h3 className="text-white font-bold text-xl mb-1">Brickell</h3>
                <p className="text-white/90 text-sm mb-3">Financial district with luxury condos</p>
                <p className="text-blue-300 text-sm">63 Properties</p>
              </div>
            </div>
            
            {/* Neighborhood 3 */}
            <div className="relative h-60 rounded-lg overflow-hidden group">
              <div className="absolute inset-0 bg-gray-200">
                {/* Replace with neighborhood image */}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/80 transition-all flex flex-col justify-end p-5">
                <h3 className="text-white font-bold text-xl mb-1">Coconut Grove</h3>
                <p className="text-white/90 text-sm mb-3">Lush greenery & bayfront living</p>
                <p className="text-blue-300 text-sm">35 Properties</p>
              </div>
            </div>
            
            {/* Neighborhood 4 */}
            <div className="relative h-60 rounded-lg overflow-hidden group">
              <div className="absolute inset-0 bg-gray-200">
                {/* Replace with neighborhood image */}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/80 transition-all flex flex-col justify-end p-5">
                <h3 className="text-white font-bold text-xl mb-1">Coral Gables</h3>
                <p className="text-white/90 text-sm mb-3">Historic charm & elegant estates</p>
                <p className="text-blue-300 text-sm">42 Properties</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why Choose Us Section */}
        <section className="bg-gray-50 py-12 px-6 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Miami Realty</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Local Expertise</h3>
              <p className="text-gray-600">Over 15 years of experience in the Miami real estate market, with deep knowledge of every neighborhood.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Personalized Service</h3>
              <p className="text-gray-600">We take the time to understand your needs and find the perfect property that fits your lifestyle and budget.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Our team is always available to address your questions and concerns throughout the buying or selling process.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Testimonials Section */}
      <section className="bg-blue-600 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 mr-4">
                  {/* Client image */}
                </div>
                <div>
                  <h4 className="font-bold">Michael Rodriguez</h4>
                  <p className="text-gray-600 text-sm">Bought a condo in Brickell</p>
                </div>
              </div>
              <p className="text-gray-700">"Miami Realty made my first home buying experience incredibly smooth. Their knowledge of the Brickell area helped me find the perfect condo with an amazing view."</p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 mr-4">
                  {/* Client image */}
                </div>
                <div>
                  <h4 className="font-bold">Sofia Martinez</h4>
                  <p className="text-gray-600 text-sm">Sold a house in Coral Gables</p>
                </div>
              </div>
              <p className="text-gray-700">"I was impressed by the marketing strategy they used to sell my property. We received multiple offers within the first week and sold above asking price!"</p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 mr-4">
                  {/* Client image */}
                </div>
                <div>
                  <h4 className="font-bold">James Wilson</h4>
                  <p className="text-gray-600 text-sm">Purchased a luxury villa</p>
                </div>
              </div>
              <p className="text-gray-700">"Their attention to detail and understanding of my specific requirements was exceptional. They found properties that weren't even listed on the market yet."</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Find Your Dream Home?</h2>
          <p className="text-gray-600 mb-8 text-lg">Contact us today for a personalized real estate consultation</p>
          <div className="flex justify-center gap-4 flex-col sm:flex-row">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium text-lg">
              Schedule a Consultation
            </Link>
            <Link href="/properties" className="bg-white hover:bg-gray-100 text-blue-600 border border-blue-600 px-8 py-3 rounded-md font-medium text-lg">
              Browse Properties
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Miami Realty</h3>
            <p className="text-gray-400 mb-4">Your trusted partner in Miami real estate since 2008.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2a10 10 0 00-3.16 19.5c.5.08.66-.22.66-.48l-.01-1.7c-2.71.6-3.29-1.3-3.29-1.3-.44-1.13-1.08-1.43-1.08-1.43-.89-.6.07-.59.07-.59.98.07 1.5 1.01 1.5 1.01.87 1.5 2.29 1.07 2.85.82.09-.65.35-1.09.63-1.34-2.2-.25-4.51-1.1-4.51-4.9 0-1.08.39-1.97 1.03-2.66-.1-.25-.45-1.28.1-2.67 0 0 .84-.27 2.75 1.02a9.58 9.58 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.4.2 2.42.1 2.67.64.7 1.03 1.58 1.03 2.66 0 3.81-2.32 4.64-4.53 4.89.36.31.68.92.68 1.85l-.01 2.75c0 .27.16.57.67.48A10 10 0 0012 2z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/properties" className="text-gray-400 hover:text-white">Properties</Link></li>
              <li><Link href="/areas" className="text-gray-400 hover:text-white">Neighborhoods</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white">Real Estate Blog</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-white">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>1234 Brickell Avenue, Suite 500<br />Miami, FL 33131</span>
              </li>
              <li className="flex items-center">
                <svg className="h-6 w-6 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>(305) 555-1234</span>
              </li>
              <li className="flex items-center">
                <svg className="h-6 w-6 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@miamirealty.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to get the latest property listings and real estate news.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input type="email" placeholder="Your email" className="px-4 py-2 rounded-md flex-grow" />
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-8 mt-8 border-t border-gray-800 text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 Miami Realty. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
            <Link href="/sitemap" className="hover:text-white">Sitemap</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}