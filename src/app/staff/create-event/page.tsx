'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/app/components/header';

export default function CreateEventPage() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [image, setImage] = useState('/images/default-event.jpg');
  const [success, setSuccess] = useState(false);

  // Protect route: Only staff can access
  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role !== 'staff') {
      alert('Access denied: Staff only');
      router.push('/signin');
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // You could push this to an array or simulate sending to a backend
    console.log('Event Created:', { title, description, date, image });

    setSuccess(true);

    // Reset form (optional)
    setTitle('');
    setDescription('');
    setDate('');
    setImage('/images/default-event.jpg');

    // Redirect or display success
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
        <h1 className="text-2xl font-bold mb-6 text-black">📅 Create New Event</h1>

        {success && (
          <div className="bg-green-100 text-green-800 p-3 rounded mb-4">
            ✅ Event created successfully!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-black font-semibold">Event Title</label>
            <input
              type="text"
              className="w-full border rounded p-2 text-black"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-black font-semibold">Description</label>
            <textarea
              className="w-full border rounded p-2 text-black"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>

          <div>
            <label className="block text-black font-semibold">Event Date</label>
            <input
              type="date"
              className="w-full border rounded p-2 text-black"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-black font-semibold">Select Banner</label>
            <select
              className="w-full border rounded p-2 text-black"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            >
              <option value="/images/football.jpg">⚽ Football</option>
              <option value="/images/music.jpg">🎶 Music</option>
              <option value="/images/tech.jpg">💻 Tech</option>
              <option value="/images/default-event.jpg">🌟 Default</option>
            </select>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Create Event
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
