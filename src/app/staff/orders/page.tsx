'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/app/components/header';

interface Order {
  id: number;
  type: 'ticket' | 'gift';
  item: string;
  customer: string;
  status: string;
}

export default function StaffOrdersPage() {
  const router = useRouter();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  // Protect staff route
  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role !== 'staff') {
      alert('Access denied: Staff only');
      router.push('/signin');
    }

    // Simulate fetching orders
    setTimeout(() => {
      setOrders([
        {
          id: 1,
          type: 'ticket',
          item: 'APR vs Rayon Match',
          customer: 'Alice',
          status: 'pending',
        },
        {
          id: 2,
          type: 'gift',
          item: 'Festival Mug',
          customer: 'Kalisa',
          status: 'pending',
        },
        {
          id: 3,
          type: 'ticket',
          item: 'Tech Conference',
          customer: 'Clara',
          status: 'served',
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const handleServe = (id: number) => {
    const updated = orders.map((order) =>
      order.id === id ? { ...order, status: 'served' } : order
    );
    setOrders(updated);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-black mb-6">📋 Manage Orders</h1>

        {loading ? (
          <p className="text-gray-500">Loading orders...</p>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-white p-4 rounded shadow-md flex justify-between items-center"
              >
                <div>
                  <p className="text-black font-semibold">
                    {order.type === 'ticket' ? '🎫' : '🎁'} {order.item}
                  </p>
                  <p className="text-sm text-gray-600">👤 {order.customer}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      order.status === 'served'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {order.status}
                  </span>

                  {order.status === 'pending' && (
                    <button
                      onClick={() => handleServe(order.id)}
                      className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
                    >
                      Mark as Served
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
