'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: 'Welcome to ShopHub',
    subtitle: 'Your One-Stop Shopping Destination',
    description: 'Discover amazing products at unbeatable prices with our curated collection',
    image: '🛍️',
    gradient: 'from-blue-600 via-blue-700 to-indigo-800',
    buttonText: 'Shop Now',
    buttonLink: '/items',
  },
  {
    id: 2,
    title: 'Exclusive Deals',
    subtitle: 'Up to 70% OFF',
    description: 'Limited time offers on premium products. Don\'t miss out on these incredible savings!',
    image: '🔥',
    gradient: 'from-red-600 via-orange-600 to-yellow-600',
    buttonText: 'View Deals',
    buttonLink: '/items',
  },
  {
    id: 3,
    title: 'New Arrivals',
    subtitle: 'Fresh & Trending',
    description: 'Explore our latest collection of cutting-edge products and stay ahead of the trends',
    image: '✨',
    gradient: 'from-purple-600 via-pink-600 to-rose-600',
    buttonText: 'Explore',
    buttonLink: '/items',
  },
  {
    id: 4,
    title: 'Fast & Free Delivery',
    subtitle: '24-48 Hour Shipping',
    description: 'Get your orders delivered quickly and safely right to your doorstep',
    image: '🚚',
    gradient: 'from-green-600 via-emerald-600 to-teal-600',
    buttonText: 'Browse Items',
    buttonLink: '/items',
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds of manual navigation
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative pt-16 min-h-screen overflow-hidden">
      {/* Background animated blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      {/* Slider Container */}
      <div className="relative h-screen">
        <AnimatePresence mode="wait">
          {slides.map((slide, index) => {
            if (index !== currentSlide) return null;

            return (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} text-white`}
              >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
                  <div className="text-center w-full">
                    {/* Large Emoji/Icon */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                      className="text-8xl md:text-9xl mb-6"
                    >
                      {slide.image}
                    </motion.div>

                    {/* Subtitle */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-xl md:text-2xl mb-4 text-white/90 font-medium"
                    >
                      {slide.subtitle}
                    </motion.p>

                    {/* Title */}
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
                    >
                      {slide.title}
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white/90"
                    >
                      {slide.description}
                    </motion.p>

                    {/* CTA Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="flex justify-center gap-4"
                    >
                      <Link
                        href={slide.buttonLink}
                        className="group relative inline-flex items-center justify-center bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-lg shadow-lg"
                      >
                        <span>{slide.buttonText}</span>
                        <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <Link
                        href="/login"
                        className="group relative inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 text-lg"
                      >
                        <span>Get Started</span>
                        <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100" />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'w-8 bg-white'
                  : 'w-2 bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-white/70"
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
