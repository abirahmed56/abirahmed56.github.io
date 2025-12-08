import "./globals.css";
import Navbar from "./Navbar";
import MobileSidebar from "./MobileSidebar";
import { FaGoogle, FaTwitter, FaLinkedin, FaGithub, FaYoutube, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Abir Ahmed Portfolio",
  description: "Graduate Student | SUST",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800 font-sans">
        <div className="flex min-h-screen">
          {/* ---- DESKTOP SIDEBAR ---- */}
          <aside className="w-72 bg-white shadow-xl p-6 hidden md:flex flex-col space-y-6">
            {/* Profile */}
            <div className="w-36 h-36 relative rounded-full overflow-hidden border-4 border-gray-300 shadow-lg mb-4">
              <Image src="/profile.png" alt="Profile" fill className="object-cover" />
            </div>

            <h1 className="text-2xl font-bold text-gray-800 mb-1">Abir Ahmed</h1>
            <h2 className="text-sm font-medium text-gray-500 mb-1">Researcher & Developer</h2>
            <p className="text-xs text-gray-400 mb-4">Graduate Student | SWE, SUST</p>

            {/* Contact Links */}
            <div className="flex flex-col gap-3 text-sm">
              <p className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors">
                <FaEnvelope /> abirahmedsohan6@gmail.com
              </p>
              <Link href="https://scholar.google.com/citations?user=QR5DvcIAAAAJ&hl=en" className="flex items-center gap-2 text-blue-600 hover:underline">
                <FaGoogle /> Google Scholar
              </Link>
              <Link href="#" className="flex items-center gap-2 text-blue-600 hover:underline">
                <FaTwitter /> Twitter
              </Link>
              <Link href="#" className="flex items-center gap-2 text-blue-600 hover:underline">
                <FaLinkedin /> LinkedIn
              </Link>
              <Link href="#" className="flex items-center gap-2 text-blue-600 hover:underline">
                <FaGithub /> GitHub
              </Link>
              <Link href="#" className="flex items-center gap-2 text-blue-600 hover:underline">
                <FaYoutube /> YouTube
              </Link>
            </div>
          </aside>

          {/* ---- MOBILE SIDEBAR ---- */}
          <MobileSidebar />

          {/* ---- MAIN CONTENT ---- */}
          <main className="flex-1 p-6 md:p-12 bg-gray-50">
            <Navbar />
            <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-8">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
