'use client';

import { useParams, useRouter } from 'next/navigation';
import { events } from '../data/events';
import Image from 'next/image';
import Header from '../../components/header';
import { useState } from 'react';

export default function BookingPage() {
  const { id } = useParams();
  const router = useRouter();
  const event = events.find(event => event.id === parseInt(id as string));

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [quantity, setQuantity] = useState(1); // 🆕 ticket count

  if (!event) {
    return <div className="p-6 text-red-500">Event not found.</div>;
  }

  const totalPrice = event.price * quantity;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thanks, ${name}! You've booked ${quantity} ticket(s) for ${event.title}. Total: $${totalPrice}`);
    router.push('/');
  };

  return (
    <main className="p-6">
      <Header />
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4 text-black">{event.title}</h1>
        <Image
          src={event.image}
          alt={event.title}
          width={800}
          height={400}
          className="w-full rounded-lg mb-4"
        />
        <p className="text-gray-700 mb-2">{event.description}</p>
        <p className="text-sm text-gray-500 mb-2">📅 {event.date}</p>
        <p className="text-md font-medium text-blue-800 mb-4">🎟️ Price per ticket: ${event.price}</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold text-black">Your Name</label>
            <input
              type="text"
              required
              className="w-full p-2 border rounded text-black"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="block font-semibold text-black">Email Address</label>
            <input
              type="email"
              required
              className="w-full p-2 border rounded text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block font-semibold text-black">Number of Tickets</label>
            <input
              type="number"
              min="1"
              max="10"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-full p-2 border rounded text-black"
              required
            />
          </div>

          <p className="font-bold text-black">
            💰 Total Price: <span className="text-green-600">${totalPrice}</span>
          </p>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </main>
  );
}
