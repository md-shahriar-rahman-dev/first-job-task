import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-16 min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Welcome to ShopHub
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Discover amazing products at unbeatable prices
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/items"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg"
              >
                Browse Items
              </Link>
              <Link
                href="/login"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors text-lg"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Why Choose ShopHub?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-blue-50 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🚚</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Fast Delivery</h3>
              <p className="text-gray-600">Get your orders delivered quickly and safely to your doorstep</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-blue-50 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">💳</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Secure Payments</h3>
              <p className="text-gray-600">Shop with confidence using our secure payment system</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-blue-50 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Quality Products</h3>
              <p className="text-gray-600">We only offer the best quality products from trusted sellers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center">
              <div className="text-4xl mb-3">📱</div>
              <h3 className="font-semibold text-gray-900">Electronics</h3>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center">
              <div className="text-4xl mb-3">👕</div>
              <h3 className="font-semibold text-gray-900">Fashion</h3>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center">
              <div className="text-4xl mb-3">🏠</div>
              <h3 className="font-semibold text-gray-900">Home & Kitchen</h3>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center">
              <div className="text-4xl mb-3">⚽</div>
              <h3 className="font-semibold text-gray-900">Sports</h3>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Browse Products</h3>
              <p className="text-gray-600">Explore our wide range of products and find what you need</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Add to Cart</h3>
              <p className="text-gray-600">Select your favorite items and add them to your shopping cart</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Checkout</h3>
              <p className="text-gray-600">Complete your purchase with our secure checkout process</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-2xl">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-gray-600 mb-4">"Amazing shopping experience! Fast delivery and great customer service."</p>
              <p className="font-semibold text-gray-900">- Sarah Johnson</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-2xl">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-gray-600 mb-4">"Best prices and quality products. Highly recommended!"</p>
              <p className="font-semibold text-gray-900">- Michael Chen</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-2xl">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-gray-600 mb-4">"Love the variety of products and easy navigation. Great platform!"</p>
              <p className="font-semibold text-gray-900">- Emily Davis</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10K+</div>
              <div className="text-blue-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">5K+</div>
              <div className="text-blue-100">Products Available</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
              <div className="text-blue-100">Categories</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Shopping?</h2>
          <p className="text-xl mb-8 text-indigo-100">
            Join thousands of satisfied customers and discover amazing products today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/items"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-colors text-lg"
            >
              View All Items
            </Link>
            <Link
              href="/login"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors text-lg"
            >
              Create Account
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
