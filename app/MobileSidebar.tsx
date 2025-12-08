"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGoogle, FaTwitter, FaLinkedin, FaGithub, FaYoutube, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Toggle Button (only when sidebar is closed) */}
      {!open && (
        <div className="md:hidden absolute top-4 left-4 z-50">
          <button
            onClick={() => setOpen(true)}
            className="text-gray-800 p-2 rounded-md bg-white shadow-lg focus:outline-none"
          >
            <FaBars size={24} />
          </button>
        </div>
      )}

      {/* Sidebar Drawer */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-xl p-6 transform transition-transform duration-300 z-40 md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button inside sidebar */}
        <div className="absolute top-4 right-4">
          <button
            onClick={() => setOpen(false)}
            className="text-gray-800 p-2 rounded-md hover:bg-gray-100 transition-colors"
          >
            <FaTimes size={24} />
          </button>
        </div>

        {/* Profile */}
        <div className="w-32 h-32 relative rounded-full overflow-hidden border-4 border-gray-300 shadow-lg mb-4">
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
    </>
  );
}
