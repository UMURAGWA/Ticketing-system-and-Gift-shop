'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Header
 from '@/app/components/header';
 import ConfirmPage
  from '../confirm/page';

export default function CartPage() {
  const [cart, setCart] = useState<any[]>([]);
  const [total, setTotal] = useState(0);
  const router = useRouter();

  // Load from localStorage if used across pages (optional)
  useEffect(() => {
    const stored = localStorage.getItem('cart');
    if (stored) {
      setCart(JSON.parse(stored));
    }
  }, []);

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
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + change),
            }
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

  // ✅ Save order to localStorage
  localStorage.setItem('order', JSON.stringify(cart));

  // Optional: clear cart (can also be handled in confirm page)
  localStorage.removeItem('cart');

  // ✅ Navigate to confirmation page
  router.push('/gift/confirm');
};

  return (
    <main className="p-6">
      <Header />

      <h1 className="text-3xl font-bold mb-6 text-white">🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border p-4 rounded shadow"
              >
                <div>
                  <h2 className="text-lg font-semibold text-white">
                    {item.title}
                  </h2>
                  <p className="text-gray-600">${item.price} × {item.quantity}</p>
                  <p className="text-green-700 font-bold">
                    Total: ${item.price * item.quantity}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="px-2 bg-gray-300 rounded"
                  >
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="px-2 bg-gray-300 rounded"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="ml-4 text-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-right">
            <h3 className="text-2xl font-bold text-black">Subtotal: ${total.toFixed(2)}</h3>
            <button
              onClick={handleCheckout}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              ✅ Checkout
            </button>
          </div>
        </>
      )}
    </main>
  );
}
