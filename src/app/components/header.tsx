
'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [role, setRole] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedRole = localStorage.getItem('role');
    setRole(storedRole);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('role');
    router.push('/signin');
  };

  return (
    <header className="flex justify-between items-center p-4 bg-blue-800 text-white">
      <div className="text-3xl font-bold"><Link href="/">😁 INKOMANE</Link></div>
            <nav className="flex flex-wrap gap-12 text-2xl">
        {!role && (
          <>
                <Link href="/">HOME</Link>
                <Link href="/about">ABOUT US</Link>
                <Link href="/gift">GIFT SHOP</Link>
                <Link href="/events">EVENT LIST</Link>

            <div className="flex gap-11 text-2xl">
                <Link href="/contact">OUR CONTACTS</Link>
            <Link href="/signin" className="underline">SIGN IN</Link>
             </div>
          </>
        )}

        {role === 'admin' && (
          <>
            <Link href="/admin/dashboard">Dashboard</Link>
            <Link href="/events">All Events</Link>
            <button onClick={handleLogout} className="bg-red-600 px-3 py-1 rounded hover:bg-red-700">Logout</button>
          </>
        )}

        {role === 'staff' && (
          <>
            <Link href="/staff/orders">Manage Orders</Link>
            <Link href="/events">Events</Link>
            <button onClick={handleLogout} className="bg-red-600 px-3 py-1 rounded hover:bg-red-700">Logout</button>
          </>
        )}

        {role === 'customer' && (
          <>
                <Link href="/">HOME</Link>
                <Link href="/about">ABOUT US</Link>
                <Link href="/gift">GIFT SHOP</Link>
                <Link href="/events">EVENT LIST</Link>

            <div className="flex gap-11 text-2xl">
                <Link href="/signin">SIGN IN</Link>
                <Link href="/contact">OUR CONTACTS</Link>
            </div>
            
            <button onClick={handleLogout} className="bg-red-600 px-3 py-1 rounded hover:bg-red-700">Logout</button>
          </>
        )}
      </nav>
    </header>
  );
}

