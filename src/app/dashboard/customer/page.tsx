'use client';

import Header from '@/app/components/header';
import Link from 'next/link';

export default function CustomerDashboard() {
  return (
    <main className="p-6 min-h-screen bg-gray-100">
      <Header />

      <div className="max-w-5xl mx-auto mt-10 space-y-8">
        <h1 className="text-3xl font-bold text-center text-black mb-6">👤 Customer Dashboard</h1>

        {/* Section: Booked Events */}
        <section className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold text-black mb-4">🎫 Booked Events</h2>
          <ul className="space-y-2 text-black">
            <li className="border-b pb-2">APR vs Rayon - June 20, 2025 - 2 Tickets - ✅ Confirmed</li>
            <li className="border-b pb-2">Etincelles vs Marine - July 15, 2025 - 1 Ticket - ✅ Confirmed</li>
          </ul>
        </section>

        {/* Section: Gift Orders */}
        <section className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold text-black mb-4">🛍️ Gift Shop Orders</h2>
          <ul className="space-y-2 text-black">
            <li className="border-b pb-2">Personalized Mug × 1 - $12.99 - ✅ Delivered</li>
            <li className="border-b pb-2">Festival T-shirt × 2 - $45.00 - ⏳ Pending Delivery</li>
          </ul>
        </section>

        {/* Back to home */}
        <div className="text-center">
          <Link
            href="/"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            🔙 Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
