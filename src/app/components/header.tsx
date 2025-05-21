'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [role, setRole] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const storedRole = localStorage.getItem('role');
    setRole(storedRole);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('role');
    router.push('/signin');
  };

  // Shared links (all roles will see these unless conditionally hidden)
  const defaultLinks = (
    <>
      <Link href="/" onClick={toggleMenu}>HOME</Link>
      <Link href="/#about" onClick={toggleMenu}>ABOUT US</Link>
      <Link href="/gift" onClick={toggleMenu}>GIFT SHOP</Link>
      <Link href="/events" onClick={toggleMenu}>EVENT LIST</Link>
      <Link href="/#contacts" onClick={toggleMenu}>OUR CONTACTS</Link>
    </>
  );

  return (
    <header className="bg-blue-800 text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
        {/* Logo */}
        <div className="text-4xl font-extrabold">
          <span role="img" aria-label="logo"><Link href="/">🖇️</Link></span>{' '}
          <Link href="/">INKOMANE</Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-lg font-semibold items-center">
          {!role && (
            <>
              {defaultLinks}
              <Link href="/signin" className="underline">SIGN IN</Link>
            </>
          )}

          {role === 'admin' && (
            <>
              <Link href="/admin/dashboard">Dashboard</Link>
              <Link href="/events">All Events</Link>
              <button
                onClick={handleLogout}
                className="bg-red-600 px-3 py-1 rounded hover:bg-red-700"
              >
                Logout
              </button>
            </>
          )}

          {role === 'staff' && (
            <>
              <Link href="/staff/orders">Manage Orders</Link>
              <Link href="/events">Events</Link>
              <button
                onClick={handleLogout}
                className="bg-red-600 px-3 py-1 rounded hover:bg-red-700"
              >
                Logout
              </button>
            </>
          )}

          {role === 'customer' && (
            <>
              {defaultLinks}
              <button
                onClick={handleLogout}
                className="bg-red-600 px-3 py-1 rounded hover:bg-red-700"
              >
                Logout
              </button>
            </>
          )}
        </nav>

        {/* Mobile Toggle Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col px-4 pb-4 text-white space-y-2 font-semibold">
          {!role && (
            <>
              {defaultLinks}
              <Link href="/signin" onClick={toggleMenu} className="underline">SIGN IN</Link>
            </>
          )}

          {role === 'admin' && (
            <>
              <Link href="/admin/dashboard" onClick={toggleMenu}>Dashboard</Link>
              <Link href="/events" onClick={toggleMenu}>All Events</Link>
              <button onClick={handleLogout} className="text-red-400 text-left">Logout</button>
            </>
          )}

          {role === 'staff' && (
            <>
              <Link href="/staff/orders" onClick={toggleMenu}>Manage Orders</Link>
              <Link href="/events" onClick={toggleMenu}>Events</Link>
              <button onClick={handleLogout} className="text-red-400 text-left">Logout</button>
            </>
          )}

          {role === 'customer' && (
            <>
              {defaultLinks}
              <button onClick={handleLogout} className="text-red-400 text-left">Logout</button>
            </>
          )}
        </div>
      )}
    </header>
  );
}
