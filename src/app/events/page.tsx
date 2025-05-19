'use client';

import { useRouter } from "next/navigation";
import Image from "next/image";
import Header from "../components/header";

// Football Events
const footballEvents = [
  {
    id: 1,
    title: "APR vs RAYON ⚽",
    image: "/images/debut.jpg",
    description: "Book your seat ⚽",
    date: "2025-06-20",

  },

  {
    id: 2,
    title: "ETINCELLES vs MARINE ⚽",
    image: "/images/gisenyi.jpg",
    description: "Gisenyi!",
    date: "2025-07-15",
  },
];

// Music Events
const musicEvents = [
  {
    id: 3,
    title: "COLORFULL GENERATION",
    image: "/images/melodie.jpg",
    description: "Bruce Melodie perfoming his album!",
    date: "2025-07-22",
  },
  {
    id: 4,
    title: "IGISOPE LIVE 🎤",
    image: "/images/igisope.jpg",
    description: "Makanyaga Abdul in the house!",
    date: "2025-08-10",
  },
  {
    id: 5,
    title: "THE FIRST AND THE FIRST!",
    image: "/images/juno.jpg",
    description: "Juno with his first perfomance!",
    date: "2025-08-10",
  },
];

// Tech Events
const techEvents = [
  {
    id: 6,
    title: "TECHSTARS KIGALI",
    image: "/images/tech.jpg",
    description: "Explore tech startups and demos.",
    date: "2025-09-05",
  },
];

export default function EventsPage() {
  const router = useRouter();

  const handleBook = (id: number,) => {
    router.push(`/events/${id}`);
  };

  // Reusable component for each section (to be called after)
  const renderSection = (title: string, events: any[]) => (
    <>
      <h1 className="text-3xl font-bold mt-12 mb-6">{title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {events.map(event => (
          <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={event.image}
              alt={event.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-black">{event.title}</h2>
              <p className="text-gray-600">{event.description}</p>
              <p className="text-sm text-gray-500 mt-1">📅 {event.date}</p>
              <button
                onClick={() => handleBook(event.id)}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <main className="p-6">
      <Header />

      {/* Intro Section */}
      <header className="grid grid-cols-1 md:grid-cols-3 items-center bg-blue-200 text-white rounded-lg shadow-md p-8 gap-4">
        <div className="md:col-span-2">
          <h1 className="text-3xl md:text-4xl font-extrabold text-amber-950">
            INKOMANE has been helping people book ticket events, smoothly and easily.
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

      {/* Event Sections */}
      {renderSection("RWANDA PREMIER LEAGUE", footballEvents)}
      {renderSection("MUSIC FESTIVAL", musicEvents)}
      {renderSection("TECH & INNOVATION", techEvents)}
    </main>
  );
}
