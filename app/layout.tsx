import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { FaGoogle, FaTwitter, FaLinkedin, FaGithub, FaYoutube, FaEnvelope } from "react-icons/fa";
import Navbar from "./Navbar"; // client component

export const metadata = {
  title: "Abir Ahmed Portfolio",
  description: "Graduate Student | SUST",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <div className="flex min-h-screen">
          {/* ---- SIDEBAR ---- */}
          <aside className="w-64 bg-white shadow-md p-6 hidden md:flex flex-col items-start">
            <h1 className="text-2xl text-gray-500 font-bold">Abir Ahmed</h1>

            <Image
              src="/profile.png"
              alt="Profile"
              width={120}
              height={120}
              className="w-[120px] h-[120px] rounded-full bg-gray-100 object-cover"
            />

            <h2 className="text-lg font-semibold">Researcher & Developer</h2>
            <p className="text-sm text-gray-600 mb-4">
              Graduate Student | SWE, SUST
            </p>

            {/* ---- CONTACT LINKS WITH ICONS ---- */}
            <div className="flex flex-col gap-2 text-sm">
              <p className="flex items-center gap-2">
                <FaEnvelope /> abirahmedsohan6@gmail.com
              </p>
              <Link href="https://scholar.google.com/citations?user=QR5DvcIAAAAJ&hl=en" className="flex items-center gap-2 text-blue-600 underline">
                <FaGoogle /> Google Scholar
              </Link>
              <Link href="#" className="flex items-center gap-2 text-blue-600 underline">
                <FaTwitter /> Twitter
              </Link>
              <Link href="#" className="flex items-center gap-2 text-blue-600 underline">
                <FaLinkedin /> LinkedIn
              </Link>
              <Link href="#" className="flex items-center gap-2 text-blue-600 underline">
                <FaGithub /> GitHub
              </Link>
              <Link href="#" className="flex items-center gap-2 text-blue-600 underline">
                <FaYoutube /> YouTube
              </Link>
            </div>
          </aside>

          {/* ---- MAIN CONTENT ---- */}
          <main className="flex-1 p-6 md:p-8">
            {/* ---- NAVBAR ---- */}
            <Navbar />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
