import Link from "next/link"

export default function Footer(){
    return(
        <footer className="bg-gray-900 text-white text-sm p-7 mt-8">
        <div className="flex justify-around flex-wrap">
        <Link href="/events">Events</Link>
        <Link href="/gift">Gift Shop</Link>
        <Link href="/signin">Sign In</Link>
        <Link href="/https://inkomane.rw/">INKOMANE App</Link>
        </div>
   
        </footer>
    )

}