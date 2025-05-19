'use client';

import { useParams, useRouter } from 'next/navigation';
import { gifts } from '@/app/gift/data/gifts';
import Image from 'next/image';
import Header from '@/app/components/header';
import { useState } from 'react';

export default function GiftPage() {
  const { id } = useParams();
  const router = useRouter();
  const gift = gifts.find(g => g.id === parseInt(id as string));

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  if (!gift) {
    return <div className="p-6 text-red-500">Gift not found.</div>;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you, ${name}! You've ordered the ${gift.title}.`);
    router.push('/');
  };

  return (
    <main className="p-6">
      <Header />
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4 text-black">{gift.title}</h1>
        <Image
          src={gift.image}
          alt={gift.title}
          width={800}
          height={400}
          className="w-full rounded-lg mb-4"
        />
        <p className="text-gray-700 mb-2">{gift.description}</p>
        <p className="text-sm text-gray-800 font-semibold mb-6">💰 {gift.price}</p>

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
            <label className="block font-semibold text-black">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border rounded text-black"
            />
          </div>

          <div>
            <label className="block font-semibold text-black">Shipping Address</label>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              className="w-full p-2 border rounded text-black"
            />
          </div>

          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Confirm Order
          </button>
        </form>
      </div>
    </main>
  );
}
