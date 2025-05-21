'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/app/components/header';
import BackToTop from '../components/backtotop';

export default function CheckoutPage() {
  const [order, setOrder] = useState<any[]>([]);
  const [orderType, setOrderType] = useState('');
  const [loading, setLoading] = useState(true); 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [card, setCard] = useState('');
  const [processing, setProcessing] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const saved = localStorage.getItem('order');
    const type = localStorage.getItem('orderType');

    if (saved) setOrder(JSON.parse(saved));
    if (type) setOrderType(type);

    setLoading(false);
  }, []);


  // Used to load order data and type
  useEffect(() => {
    const saved = localStorage.getItem('order');
    const type = localStorage.getItem('orderType');

    if (saved) setOrder(JSON.parse(saved));
    if (type) setOrderType(type);
    console.log('Loaded order:', order);

  }, []);

  const total = order.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !card || card.length < 13) {
      alert('Please fill out all fields correctly.');
      return;
    }

    setProcessing(true);
    setTimeout(() => {
  setProcessing(false);

  // ✅ Clear data after payment is complete
  localStorage.removeItem('cart'); 
  localStorage.removeItem('order');
  localStorage.removeItem('orderType');

  const confirmPath = orderType === 'gift' ? '/gift/confirm' : '/confirmation';
  router.push(confirmPath);
}, 2000);

  };

 if (loading) {
  return (
    <main className="p-6 text-center text-white">
      <Header />
      <p className="mt-10">🔄 Loading your order...</p>
    </main>
  );
}

if (order.length === 0) {
  return (
    <main className="p-6 text-center">
      <Header />
      <div className="text-red-600 text-lg font-semibold mt-10">
        ❌ No order was found.
      </div>
    </main>
  );
}


  return (
    <main className="p-6 bg-black min-h-screen">
      <Header />
      <div className='mb-11'></div>
      <div className="max-w-lg mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold text-black mb-4">
          {orderType === 'gift' ? '🛍️ Gift Checkout' : '🎫 Event Checkout'}
        </h1>

        {/* ORDER SUMMARY */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-black mb-2">Your Order</h2>
          <ul>
            {order.map((item, idx) => (
              <li key={idx} className="text-black">
                {item.title} × {item.quantity} — ${item.price * item.quantity}
              </li>
            ))}
          </ul>
          <p className="font-bold mt-2 text-black">💰 Total: ${total.toFixed(2)}</p>
        </div>

        {/* PAYMENT FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold text-black">Your Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-2 border rounded text-black"
            />
          </div>

          <div>
            <label className="block font-semibold text-black">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border rounded text-black"
            />
          </div>

          <div>
            <label className="block font-semibold text-black">Card Number</label>
            <input
              type="text"
              value={card}
              onChange={(e) => setCard(e.target.value)}
              required
              placeholder="4242 4242 4242 4242"
              className="w-full p-2 border rounded text-black"
            />
          </div>

          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded w-full"
            disabled={processing}
          >
            {processing ? 'Processing...' : 'Pay & Confirm'}
          </button>
        </form>
      </div>
      <BackToTop />
    </main>
  );
}
