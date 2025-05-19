import Link from "next/link"

export default function Footer(){
    return(
        <footer className="bg-gray-900 text-white text-sm p-7 mt-8">
        <div className="flex justify-around flex-wrap">
        <Link href="/">Back to top</Link>
        <Link href="/events">Events</Link>
        <Link href="/gift">Gift Shop</Link>
        <Link href="/Sign in">Sign In</Link>
        <Link href="/Our contacts">Our Contacts</Link>
        <Link href="/Our partners">Our Partners</Link>
        <Link href="/Our social media">Our Social Media</Link>
        </div>
   
        </footer>
    )

}