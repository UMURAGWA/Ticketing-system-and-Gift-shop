'use client';

import { useRouter } from 'next/navigation';
import Header from '../components/header';

export default function SignInRoleSelector() {
  const router = useRouter();

  const handleSelectRole = (role: string) => {
    router.push(`/signin/${role}`);
  };

  return (
    <main className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex flex-col items-center justify-center pt-10 px-6">
        <h1 className="text-3xl font-bold mb-8 text-black">🔐 Choose Your Role</h1>

        <div className="flex flex-col gap-4 w-full max-w-sm">
          <button
            onClick={() => handleSelectRole('admin')}
            className="w-full bg-red-600 text-white py-3 rounded hover:bg-red-700"
          >
            👨‍💼 Admin
          </button>
          <button
            onClick={() => handleSelectRole('staff')}
            className="w-full bg-yellow-500 text-white py-3 rounded hover:bg-yellow-600"
          >
            🧑‍🔧 Staff
          </button>
          <button
            onClick={() => handleSelectRole('customer')}
            className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700"
          >
            👤 Customer
          </button>
        </div>
      </div>
    </main>
  );
}
