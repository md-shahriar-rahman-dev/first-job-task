'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSlider from '@/components/HeroSlider';
import { ChevronRight, Truck, Shield, Star, Sparkles } from 'lucide-react';

export default function Home() {
  const [stats, setStats] = useState([
    { value: 0, target: 10000, label: 'Happy Customers', suffix: '+' },
    { value: 0, target: 5000, label: 'Products Available', suffix: '+' },
    { value: 0, target: 100, label: 'Categories', suffix: '+' },
    { value: 0, target: 24, label: 'Support', suffix: '/7' },
  ]);

  const categories = [
    { icon: '📱', label: 'Electronics', color: 'from-blue-500 to-cyan-500' },
    { icon: '👕', label: 'Fashion', color: 'from-purple-500 to-pink-500' },
    { icon: '🏠', label: 'Home & Kitchen', color: 'from-green-500 to-emerald-500' },
    { icon: '⚽', label: 'Sports', color: 'from-orange-500 to-red-500' },
    { icon: '📚', label: 'Books', color: 'from-indigo-500 to-blue-500' },
    { icon: '💄', label: 'Beauty', color: 'from-rose-500 to-pink-500' },
    { icon: '🎮', label: 'Gaming', color: 'from-violet-500 to-purple-500' },
    { icon: '🍽️', label: 'Food', color: 'from-yellow-500 to-orange-500' },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Premium Member',
      content: 'Amazing shopping experience! Fast delivery and great customer service.',
      rating: 5,
      image: '👩'
    },
    {
      name: 'Michael Chen',
      role: 'Verified Buyer',
      content: 'Best prices and quality products. Highly recommended!',
      rating: 5,
      image: '👨'
    },
    {
      name: 'Emily Davis',
      role: 'Power Shopper',
      content: 'Love the variety of products and easy navigation. Great platform!',
      rating: 5,
      image: '👩'
    },
  ];

  const steps = [
    { number: 1, title: 'Browse Products', description: 'Explore our wide range of products and find what you need' },
    { number: 2, title: 'Add to Cart', description: 'Select your favorite items and add them to your shopping cart' },
    { number: 3, title: 'Checkout', description: 'Complete your purchase with our secure checkout process' },
  ];

  // Animate stats counter
  useEffect(() => {
    const intervals = stats.map((stat, index) => {
      const increment = stat.target / 100;
      const interval = setInterval(() => {
        setStats(prev => prev.map((s, i) => {
          if (i === index && s.value < s.target) {
            return { ...s, value: Math.min(s.value + increment, s.target) };
          }
          return s;
        }));
      }, 20);

      return interval;
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <>
      <Navbar />
      
      {/* Hero Banner Slider */}
      <HeroSlider />

      {/* Enhanced Features Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900"
          >
            Why Choose ShopHub?
          </motion.h2>
          <p className="text-gray-600 text-center mb-12 text-lg max-w-2xl mx-auto">
            Experience the future of online shopping with our innovative features
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Truck className="w-12 h-12" />, title: 'Fast Delivery', desc: 'Get orders delivered in 24-48 hours with real-time tracking', color: 'from-blue-500 to-cyan-500' },
              { icon: <Shield className="w-12 h-12" />, title: 'Secure Payments', desc: 'Bank-level security with multiple payment options', color: 'from-green-500 to-emerald-500' },
              { icon: <Star className="w-12 h-12" />, title: 'Quality Products', desc: 'Verified sellers and 100% quality assurance guarantee', color: 'from-purple-500 to-pink-500' },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur from-blue-500 to-cyan-500 rounded-2xl"></div>
                <div className="relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-transparent group-hover:shadow-2xl transition-all duration-300">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} text-white mb-6`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Categories Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Shop by Category</h2>
            <p className="text-gray-600 text-lg">Discover products from our diverse categories</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Link
                  href="/items"
                  className="block bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-200 group-hover:border-transparent"
                >
                  <div className={`text-3xl mb-3 transform group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {category.label}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">How It Works</h2>
          
          <div className="relative">
            {/* Connecting line for steps */}
            <div className="hidden md:block absolute top-16 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="text-center">
                    <div className="relative inline-block mb-6">
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-3xl font-bold text-white mx-auto shadow-xl">
                        {step.number}
                      </div>
                      <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-0 animate-ping"></div>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">{step.title}</h3>
                    <p className="text-gray-600 max-w-xs mx-auto">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">What Our Customers Say</h2>
            <p className="text-gray-600 text-lg">Join thousands of satisfied customers worldwide</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200">
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4">{testimonial.image}</div>
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex text-yellow-400 mb-4">
                    {'⭐'.repeat(testimonial.rating)}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  <div className="text-sm text-gray-400">
                    Verified Purchase • 2 days ago
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">ShopHub by Numbers</h2>
            <p className="text-blue-200 text-lg">Growing together with our amazing community</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {Math.round(stat.value).toLocaleString()}
                    <span className="text-cyan-300">{stat.suffix}</span>
                  </div>
                  <div className="text-blue-200 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready to Start Shopping?
            </h2>
            <p className="text-xl mb-8 text-indigo-100 max-w-2xl mx-auto">
              Join thousands of satisfied customers and discover amazing products today!
              Get exclusive offers and early access to new arrivals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/items"
                className="group relative inline-flex items-center justify-center bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-lg shadow-lg"
              >
                <span>View All Items</span>
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/login"
                className="group relative inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 text-lg"
              >
                <span>Create Free Account</span>
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100" />
              </Link>
            </div>
            <p className="mt-6 text-indigo-200 text-sm">
              No credit card required • 30-day free returns • 24/7 support
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}