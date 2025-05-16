'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/app/components/header';

export default function ConfirmPage() {
  const [order, setOrder] = useState<any[] | null>(null);
  const [total, setTotal] = useState(0);
  const router = useRouter();

 useEffect(() => {
  const orderData = localStorage.getItem('order');
  console.log("🛒 Fetched order from localStorage:", orderData);

  if (orderData) {
    const parsed = JSON.parse(orderData);
    setOrder(parsed);

    const subtotal = parsed.reduce(
      (sum: number, item: any) => sum + item.price * item.quantity,
      0
    );
    setTotal(subtotal);
  } else {
    console.warn("❌ No order found in localStorage");
    setOrder([]); // fallback to show no order message
  }
}, []);


  return (
    <main className="p-6">
      <Header />

      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 text-center">
        {order === null ? (
          <p className="text-gray-600">Loading your order...</p>
        ) : order.length === 0 ? (
          <>
            <h2 className="text-xl font-semibold text-red-500 mb-4">
              ❌ No order was found.
            </h2>
            <button
              onClick={() => router.push('/gift')}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              🔁 Back to Gift Shop
            </button>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-green-700 mb-4">
              🎉 Order Confirmed!
            </h1>
            <p className="text-gray-700 mb-6">
              Thank you for your purchase! Here's your order summary:
            </p>

            <ul className="text-left mb-6">
              {order.map((item) => (
                <li key={item.id} className="mb-2">
                  <span className="font-semibold text-black">{item.title}</span>{' '}
                  × {item.quantity} — ${item.price * item.quantity}
                </li>
              ))}
            </ul>

            <h2 className="text-xl font-bold text-black mb-4">
              Total Paid: ${total.toFixed(2)}
            </h2>

            <button
              onClick={() => router.push('/gift')}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              🛍 Back to Shop
            </button>
          </>
        )}
      </div>
    </main>
  );
}
