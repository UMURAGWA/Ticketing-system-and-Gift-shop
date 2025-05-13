import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />

      <main className="p-6">
  <header className="grid grid-cols-1 md:grid-cols-3 items-center bg-blue-200 text-white rounded-lg shadow-md p-18 gap-4">
    
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
              <h3 className="text-lg font-semibold mt-2 text-black"><Link href="/events/MUSIC FESTIVAL">TECH CONFERENCE</Link></h3>
              <p className="text-sm text-gray-600"><Link href="/events/MUSIC FESTIVAL">Explore the future of technology and innovation</Link></p>
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
              <h3 className="text-lg font-semibold mt-2 text-black"> <Link href="/tshirts">INKOMANE T-Shirts</Link></h3>
              <p className="text-sm text-gray-600"><Link href="/tshirts">Own an original T-shirt</Link></p>
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
              <h3 className="text-lg font-semibold mt-2 text-black"><Link href="/mugs">ORIGINAL MUGS</ Link></h3>
              <p className="text-sm text-gray-600"><Link href="/mugs">Buy 5 & get 6</ Link></p>
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
              <h3 className="text-lg font-semibold mt-2 text-black"><Link href="arts">SMART BLENDERS</Link></h3>
              <p className="text-sm text-gray-600"><Link href="arts">Smart Blenders</Link></p>
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
              <h3 className="text-lg font-semibold mt-2 text-black"><Link href="tech">CAMERA</Link></h3>
              <p className="text-sm text-gray-600"><Link href="tech">Get a professional camera</Link></p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
