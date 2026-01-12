'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export default function ItemDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const [item, setItem] = useState<Item | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (params.id) {
      fetchItem(Number(params.id));
    }
  }, [params.id]);

  const fetchItem = async (id: number) => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/api/items/${id}`);
      if (!response.ok) {
        if (response.status === 404) {
          setError('Item not found');
        } else {
          throw new Error('Failed to fetch item');
        }
        return;
      }
      const data = await response.json();
      setItem(data);
    } catch (err) {
      setError('Failed to load item details. Make sure the server is running.');
      console.error('Error fetching item:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-50 pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Loading item details...</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (error || !item) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-50 pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
              <p className="font-semibold">Error: {error || 'Item not found'}</p>
            </div>
            <Link
              href="/items"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              ← Back to Items
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link
            href="/items"
            className="text-blue-600 hover:text-blue-700 font-medium mb-6 inline-block"
          >
            ← Back to Items
          </Link>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Image Section */}
              <div className="relative h-96 lg:h-full min-h-[400px] bg-gray-200">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Details Section */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{item.name}</h1>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-blue-600">${item.price.toFixed(2)}</span>
                </div>
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">Description</h2>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
                <div className="mb-6">
                  <div className="flex items-center gap-4">
                    {item.stock > 0 ? (
                      <>
                        <span className="text-green-600 font-semibold">✓ In Stock</span>
                        <span className="text-gray-500">({item.stock} available)</span>
                      </>
                    ) : (
                      <span className="text-red-600 font-semibold">✗ Out of Stock</span>
                    )}
                  </div>
                </div>
                <div className="space-y-4">
                  <button
                    disabled={item.stock === 0}
                    className={`w-full py-4 rounded-lg font-semibold text-lg transition-colors ${
                      item.stock > 0
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {item.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
                  </button>
                  <button className="w-full py-4 rounded-lg font-semibold text-lg border-2 border-gray-300 text-gray-700 hover:border-gray-400 transition-colors">
                    Add to Wishlist
                  </button>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500 mb-1">Item ID</p>
                      <p className="font-semibold text-gray-900">#{item.id}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 mb-1">Category</p>
                      <p className="font-semibold text-gray-900">{item.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

