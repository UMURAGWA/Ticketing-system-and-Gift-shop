'use client';

import { useRouter, useParams } from 'next/navigation';
import { useState } from 'react';
import Header from '@/app/components/header';

export default function RoleLoginPage() {
  const router = useRouter();
  const { role } = useParams();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  //  Correct roles: admin, staff, customer
  const users = [
    { username: 'admin', password: 'admin123', role: 'admin' },
    { username: 'staff', password: 'staff123', role: 'staff' },
    { username: 'customer', password: 'user123', role: 'customer' }, 
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const matchedUser = users.find(
      (u) =>
        u.role === role &&
        u.username === username &&
        u.password === password
    );

    if (matchedUser) {
      localStorage.setItem('role', matchedUser.role);
      setError('');

      // ✅ Redirect to correct dashboard
      if (matchedUser.role === 'admin') router.push('/admin/dashboard');
      else if (matchedUser.role === 'staff') router.push('/staff/orders');
      else router.push('/');
    } else {
      setError('❌ Invalid username or password for this role');
    }
  };

  return (
    <main className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex flex-col items-center justify-center pt-10 px-6">
        <h1 className="text-2xl font-bold mb-6 text-black capitalize">
          🔐 Login as {role}
        </h1>

        <form
          onSubmit={handleLogin}
          className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm space-y-4"
        >
          <div>
            <label className="block text-black font-semibold mb-1">Username</label>
            <input
              type="text"
              className="w-full p-2 border rounded text-black"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-black font-semibold mb-1">Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded text-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="text-red-600">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Sign In
          </button>
        </form>
      </div>
    </main>
  );
}
