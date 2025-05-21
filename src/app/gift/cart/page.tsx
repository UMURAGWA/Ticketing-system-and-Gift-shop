'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/app/components/header';

export default function CartPage() {
  const [cart, setCart] = useState<any[]>([]);
  const [total, setTotal] = useState(0);
  const router = useRouter();

  // Load cart from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('cart');
    if (stored) {
      setCart(JSON.parse(stored));
    }
  }, []);

  // Calculate subtotal
  useEffect(() => {
    const subtotal = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotal(subtotal);
  }, [cart]);

  const updateQuantity = (id: number, change: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    localStorage.setItem('order', JSON.stringify(cart));
    localStorage.setItem('orderType', 'gift');
    router.push('/checkout');

  };

  return (
    <main className="p-6">
      <Header />
      <h1 className="text-3xl font-bold mb-6 text-white">🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-white">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border p-4 rounded shadow"
              >
                <div>
                  <h2 className="text-lg font-semibold text-white">{item.title}</h2>
                  <p className="text-white">${item.price} × {item.quantity}</p>
                  <p className="text-green-700 font-bold">Total: ${item.price * item.quantity}</p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="px-2 bg-gray-300 rounded text-black"
                  >−</button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="px-2 bg-gray-300 rounded text-black"
                  >+</button>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="ml-4 text-red-600"
                  >Remove</button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-right">
            <h3 className="text-2xl font-bold text-black">Subtotal: ${total.toFixed(2)}</h3>
            <button
              onClick={handleCheckout}
              className="bg-green-600 text-white px-4 py-2 rounded mt-4"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </main>
  );
}
