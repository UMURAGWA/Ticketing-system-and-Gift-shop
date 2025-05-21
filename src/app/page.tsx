import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import Link from "next/link";
import BackToTop from "./components/backtotop";

export default function Home() {
  return (
    <>
      <Header />

      <main className="p-6">
  <header className="grid grid-cols-1 md:grid-cols-3 items-center bg-blue-200 text-white rounded-lg shadow-md p-18 gap-4 mb-8">
    
    <div className="md:col-span-2">
      <h1 className="text-3xl md:text-4xl font-extrabold text-amber-950">
        BOOK YOUR FAVORITE EVENT AT HOME
      </h1>
      <p className="mt-2 text-gray-700">
        Browse, book, and enjoy upcoming events with a single click!
      </p>
    </div>

    <div className="md:col-span-1.7">
      <img
        src="/images/booking.jpg"
        alt="Event Banner"
        className="w-full h-auto rounded-lg"
      />
    </div>

  </header>
  

        <section>
          <h2 className="text-2xl font-bold mb-4">Coming Up Events</h2>

          <div className="flex gap-4 overflow-x-auto pb-4">
            {/* Event 1 */}
            <div className="min-w-[250px] bg-white border rounded-lg shadow-md p-3">
              <Image
                src="/images/Football.jpg"
                width={250}
                height={150}
                alt="Football"
                className="rounded"
              />
              <h3 className="text-lg font-semibold mt-2 text-black"> <Link href="/events">RWANDA PREMIER LEAGUE</Link></h3>
              <p className="text-sm text-gray-600"><Link href="/events">Secure you foootball ticket</Link></p>
            </div>

            {/* Event 2 */}
            <div className="min-w-[250px] bg-white border rounded-lg shadow-md p-3">
              <Image
                src="/images/Music.jpg"
                width={250}
                height={150}
                alt="Music Festival"
                className="rounded"
              />
              <h3 className="text-lg font-semibold mt-2 text-black"><Link href="/events">MUSIC FESTIVAL</ Link></h3>
              <p className="text-sm text-gray-600"><Link href="/events">Gura itike yawe ibiciro bikiri bito</ Link></p>
            </div>

            {/* Event 3 */}
            <div className="min-w-[250px] bg-white border rounded-lg shadow-md p-3">
              <Image
                src="/images/Art.jpg"
                width={250}
                height={150}
                alt="Art Expo"
                className="rounded"
              />
              <h3 className="text-lg font-semibold mt-2 text-black"><Link href="/events">ART EXPO</Link></h3>
              <p className="text-sm text-gray-600"><Link href="/events">Discover artworks by Rwandan talents</Link>.</p>
            </div>

            {/* Event 4 */}
            <div className="min-w-[250px] bg-white border rounded-lg shadow-md p-3">
              <Image
                src="/images/Tech.jpg"
                width={250}
                height={150}
                alt="Tech Conference"
                className="rounded"
              />
              <h3 className="text-lg font-semibold mt-2 text-black"><Link href="/events">TECH CONFERENCE</Link></h3>
              <p className="text-sm text-gray-600"><Link href="/events">Explore the future of technology and innovation</Link></p>
            </div>
          </div>
        </section>
         <section>
          <h2 className="text-2xl font-bold mb-4">Gift Shop</h2>

          <div className="flex gap-4 overflow-x-auto pb-4">
            {/* Product 1 */}
            <div className="min-w-[250px] bg-white border rounded-lg shadow-md p-3">
              <Image
                src="/images/T-shirt.jpg"
                width={250}
                height={150}
                alt="T-shirt"
                className="rounded"
              />
              <h3 className="text-lg font-semibold mt-2 text-black"> <Link href="/gift">INKOMANE T-Shirts</Link></h3>
              <p className="text-sm text-gray-600"><Link href="/gift">Own an original T-shirt</Link></p>
            </div>

            {/* Product 2 */}
            <div className="min-w-[250px] bg-white border rounded-lg shadow-md p-3">
              <Image
                src="/images/mugs.jpg"
                width={250}
                height={150}
                alt="Pair of Mugs"
                className="rounded"
              />
              <h3 className="text-lg font-semibold mt-2 text-black"><Link href="/gift">ORIGINAL MUGS</ Link></h3>
              <p className="text-sm text-gray-600"><Link href="/gift">Buy 5 & get 6</ Link></p>
            </div>

            {/* Product 3 */}
            <div className="min-w-[250px] bg-white border rounded-lg shadow-md p-3">
              <Image
                src="/images/blender.jpg"
                width={250}
                height={150}
                alt="Blender"
                className="rounded"
              />
              <h3 className="text-lg font-semibold mt-2 text-black"><Link href="/gift">SMART BLENDERS</Link></h3>
              <p className="text-sm text-gray-600"><Link href="/gift">Smart Blenders</Link></p>
            </div>

            {/* Product 4 */}
            <div className="min-w-[250px] bg-white border rounded-lg shadow-md p-3">
              <Image
                src="/images/camera.jpg"
                width={250}
                height={300}
                alt="Tech Conference"
                className="rounded"
              />
              <h3 className="text-lg font-semibold mt-2 text-black"><Link href="/gift">CAMERA</Link></h3>
              <p className="text-sm text-gray-600"><Link href="/gift">Get a professional camera</Link></p>
            </div>
          </div>
        </section>
        <section id="about" className="mt-12 scroll-mt-20">
  <h2 className="text-3xl font-bold mb-8 text-white">ABOUT US</h2>
  <p className="text-2xl text-white leading-relaxed mb-8">
    INKOMANE is a Rwandan digital ticketing and gift platform designed to make event booking
    and gift purchasing seamless and accessible. Whether you're attending concerts,
    sports events, tech conferences, or exploring local merchandise — we connect
    people to experiences.
  </p>
 <h2 className="text-3xl font-bold mb-4 text-white">OUR MISSION</h2>  <p className="text-2xl text-amber-700 mt-2">
    Our mission is to simplify access, empower organizers, and bring communities
    together through reliable technology.
  </p>
</section>
<section id="contacts" className="mt-12 scroll-mt-20">
  <h2 className="text-3xl font-bold mb-6 text-white">Our Contacts</h2>

  <p className="text-white">📍 Location: Kigali, Rwanda</p>
  <p className="text-white">📧 Email: <a href="mailto:info@inkomane.rw" className="text-blue-600 underline">info@inkomane.rw</a></p>
  <p className="text-white">📞 Phone: +250 788 123 456</p>
  <p className="text-white mb-4">🌐 Website: <a href="https://inkomane.rw" className="text-blue-600 underline">www.inkomane.rw</a></p>

  <div className="rounded-lg overflow-hidden shadow-md">
    <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.458398850408!2d30.09470007311634!3d-1.9707487367533916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca70046d8c8e9%3A0xbf7e6f38dd3d9b3c!2sGoodLink%20Solutions%20-%20INKOMANE!5e0!3m2!1sen!2srw!4v1747639957271!5m2!1sen!2srw" 
    width="1500" 
    height="450" 
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade">
    </iframe>
  </div>
        <BackToTop />

</section>
      </main>
    </>
  );
}
