import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen big-white text-gray-800">

      <header />

      <main className="flex-grow overflow-y-auto p-4">
        {children}
      </main>
      
         <Footer />
      </body>
    </html>
  );
}
