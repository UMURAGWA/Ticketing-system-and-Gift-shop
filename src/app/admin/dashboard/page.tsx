'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/app/components/header';

export default function AdminDashboard() {
  const router = useRouter();

  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role !== 'admin') {
      alert('Access denied: Admins only');
      router.push('/signin');
    }
  }, []);

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-5xl mx-auto py-10 px-6">
        <h1 className="text-3xl font-bold text-black mb-6">🛠 Admin Dashboard</h1>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold text-black">📦 Total Orders</h2>
            <p className="text-3xl font-bold text-blue-700 mt-2">72</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold text-black">🎫 Tickets Sold</h2>
            <p className="text-3xl font-bold text-green-700 mt-2">132</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold text-black">👥 Registered Staff</h2>
            <p className="text-3xl font-bold text-yellow-600 mt-2">4</p>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-black">Recent Activity</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>🎫 Ticket booked: APR vs RAYON</li>
            <li>🛍 Gift order: T-shirt + Mug combo</li>
            <li>👤 New staff account created</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
