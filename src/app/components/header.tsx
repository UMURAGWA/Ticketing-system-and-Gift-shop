'use client';

import Link from "next/link";
export default function Header(){
    return(
        <header  
        className="flex flex-wrap justify-between items-center p-9 bg-gray-800 text-white">
           
            <div className="text-3xl font-bold"><Link href="/">😁 INKOMANE</Link></div>
            <nav className="flex flex-wrap gap-12 text-2xl">
                <Link href="/">HOME</Link>
                <Link href="/about">ABOUT US</Link>
                <Link href="/shop">GIFT SHOP</Link>
                <Link href="/events">EVENT LIST</Link>
            </nav>
            <div className="flex gap-11 text-2xl">
                <Link href="/signin">SIGN IN</Link>
                <Link href="/contact">OUR CONTACTS</Link>
            </div>
    </header>
  );
}
