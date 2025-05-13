'use client';

import Link from "next/link";
export default function Header(){
    return(
        <header  
        className="flex flex-wrap justify-between items-center p-9 bg-gray-800 text-white">
           
            <div className="text-3xl font-bold"><Link href="/">😁 INKOMANE</Link></div>
            <nav className="flex flex-wrap gap-4 text-sm">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/services">Services</Link>
                <Link href="/shop">Shop</Link>
                <Link href="/events">Event List</Link>
                <Link href="/create-event">Create Event</Link>
                <Link href="/support">Help</Link>
            </nav>
            <div className="flex gap-4 text-sm">
                <Link href="/signin">Sign in</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/testimonials">Testimonials</Link>
            </div>
    </header>
  );
}
