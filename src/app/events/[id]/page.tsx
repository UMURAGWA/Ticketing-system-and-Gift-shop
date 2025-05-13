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

  if (!event) {
    return <div className="p-6 text-red-500">Event not found.</div>;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you, ${name}! You booked for ${event.title}.`);
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
        <p className="text-sm text-gray-500 mb-6">📅 {event.date}</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
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

          {/* Email Input */}
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

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </main>
  );
}
