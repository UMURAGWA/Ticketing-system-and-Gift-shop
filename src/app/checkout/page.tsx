'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../components/header';

export default function CheckoutPage() {
  const [cardNumber, setCardNumber] = useState('');
  const [processing, setProcessing] = useState(false);
  const router = useRouter();

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();

    if (cardNumber.length < 10) {
      alert('Please enter a valid card number');
      return;
    }

    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      router.push('/confirmation');
    }, 2000); // simulate 2 second processing
  };

  return (
    <main className="min-h-screen bg-gray-100">
      <Header />
      <div className="max-w-lg mx-auto mt-12 bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4 text-black">🔐 Secure Payment</h1>

        <form onSubmit={handlePayment} className="space-y-4">
          <div>
            <label className="block font-semibold text-black">Card Number</label>
            <input
              type="text"
              placeholder="4242 4242 4242 4242"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
              className="w-full p-2 border rounded text-black"
            />
          </div>

          <div>
            <label className="block font-semibold text-black">Expiry Date</label>
            <input
              type="text"
              placeholder="MM/YY"
              className="w-full p-2 border rounded text-black"
              required
            />
          </div>

          <div>
            <label className="block font-semibold text-black">CVV</label>
            <input
              type="text"
              placeholder="123"
              className="w-full p-2 border rounded text-black"
              required
            />
          </div>

          <button
            type="submit"
            disabled={processing}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
          >
            {processing ? 'Processing Payment...' : 'Pay Now'}
          </button>
        </form>
      </div>
    </main>
  );
}
