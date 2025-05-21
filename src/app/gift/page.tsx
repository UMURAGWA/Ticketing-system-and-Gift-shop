'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../components/header';
import Image from 'next/image';
import { gifts } from './data/gifts';
import BackToTop from '../components/backtotop';

// Group gift items by category
const groupByCategory = (items: any[]) => {
  const categories: { [key: string]: any[] } = {};
  items.forEach((item) => {
    if (!categories[item.category]) categories[item.category] = [];
    categories[item.category].push(item);
  });
  return categories;
};

export default function GiftPage() {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  //  Cart state
  const [cart, setCart] = useState<any[]>([]);

  //  Load cart from localStorage (on first load)
  useEffect(() => {
    const stored = localStorage.getItem('cart');
    if (stored) {
      setCart(JSON.parse(stored));
    }
  }, []);

  //  Save cart to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  //  Add to cart logic
  const addToCart = (product: any) => {
    const updatedCart = [...cart];
    const existing = updatedCart.find((item) => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }
    setCart(updatedCart);
    alert(`${product.title} added to cart!`);
  };

  // Categorize products
  const categories = groupByCategory(gifts);

  //  Reusable section renderer
  const renderSection = (category: string, items: any[]) => {
    const visibleItems = items.filter(
      (item) =>
        (filter === 'All' || item.category === filter) &&
        item.title.toLowerCase().includes(search.toLowerCase())
    );

    if (visibleItems.length === 0) return null;

    return (
      <section key={category}>
        <h2 className="text-2xl font-bold mb-4 text-black mt-12">{category}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleItems.map((gift) => (
            <div
              key={gift.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <Image
                src={gift.image}
                alt={gift.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-black">
                  {gift.title}
                </h3>
                <p className="text-gray-700">{gift.description}</p>
                <p className="text-green-700 font-bold mt-2">${gift.price}</p>
                <button
                  onClick={() => addToCart(gift)}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };

  return (
    <main className="p-2">
      <Header />
      <div className="mb-8">  
      </div>

      {/*  Search & Category Filter */}
      <div className="mb-8 flex flex-wrap gap-10 items-center">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search gifts..."
          className="p-2 border rounded w-full sm:w-1/3"
        />
        <select
          className="p-2 border rounded"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All Categories</option>
          {Object.keys(categories).map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/*  View Cart Button */}
        <button
          onClick={() => router.push('/gift/cart')}
          className="ml-auto px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
           View Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})
        </button>
      </div>

      {/*  Render each section */}
      {Object.entries(categories).map(([category, items]) =>
        renderSection(category, items)
      )}
      <BackToTop />
    </main>
  );
}
