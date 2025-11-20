"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/cv", label: "CV" },
    { href: "/projects", label: "Projects" },
  ];

  return (
    <nav className="flex justify-center mb-.1 gap-6 text-lg font-medium">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`pb-1 ${
            pathname === link.href
              ? "font-semibold border-b-2 border-black"
              : "text-gray-500 hover:text-black transition"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
