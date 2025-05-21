'use client';

import Header from '@/app/components/header';
import Link from 'next/link';

export default function GiftConfirmPage() {
  return (
    <main className="p-6 min-h-screen bg-white">
      <Header />
      <div className="max-w-xl mx-auto mt-10 bg-green-50 border border-green-400 p-6 rounded-lg text-center">
        <h1 className="text-3xl font-bold text-green-700 mb-4">🎉 Order Confirmed!</h1>
        <p className="text-black mb-2">
          Thank you for your order from the <strong>Gift Shop</strong>.
        </p>
        <p className="text-2xl text-black mb-4">
          A confirmation has been sent to your email.
        </p>
        

        <Link
          href="/gift"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Back to Gift Shop
        </Link>
      </div>
    </main>
  );
}
