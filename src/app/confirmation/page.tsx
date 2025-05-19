'use client';

import Link from 'next/link';
import Header from '../components/header';

export default function ConfirmationPage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Header />
      <div className="max-w-lg mx-auto mt-12 bg-white p-6 rounded shadow text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">✅ Payment Successful!</h1>
        <p className="text-black mb-6">Your booking/order has been confirmed.</p>
        <Link href="/" className="text-blue-600 underline">Go back to Home</Link>
      </div>
    </main>
  );
}
