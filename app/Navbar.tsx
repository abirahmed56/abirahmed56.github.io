"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState(false);
  const [buttonLabel, setButtonLabel] = useState("Documents");

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Publication" },
    { href: "/researches", label: "Research" },
    { href: "/blogs", label: "Blog" },
  ];

  const dropdownLinks = [
    { href: "/cv", label: "CV" },
    { href: "/sop", label: "SOP" },
    { href: "/internship", label: "Intern Report" },
  ];

  // Update button label based on current pathname
  useEffect(() => {
    setOpenDropdown(false);
    const matched = dropdownLinks.find((d) => pathname?.startsWith(d.href));
    if (matched) {
      setButtonLabel(matched.label);
    } else {
      setButtonLabel("Documents");
    }
  }, [pathname]);

  // Check if current page is within the dropdown
  const isDropdownActive = dropdownLinks.some((d) => pathname?.startsWith(d.href));

  return (
    <nav className="flex justify-center gap-8 py-1 text-lg font-medium bg-gray shadow-sm rounded-xl mx-auto w-fit px-10 mt-4 relative">
      {/* Main Navigation */}
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`transition-all pb-1 hover:text-black ${
            pathname === link.href
              ? "font-semibold text-black border-b-2 border-black"
              : "text-gray-500 hover:text-gray-800"
          }`}
        >
          {link.label}
        </Link>
      ))}

      {/* Dropdown Menu */}
      <div className="relative">
        <button
          onClick={() => setOpenDropdown((s) => !s)}
          className={`transition-all pb-1 flex items-center gap-1 hover:text-black ${
            isDropdownActive
              ? "font-semibold text-black border-b-2 border-black"
              : "text-gray-500 hover:text-gray-800"
          }`}
          aria-haspopup="menu"
          aria-expanded={openDropdown}
        >
          {buttonLabel}
          <ChevronDown
            size={18}
            className={`${openDropdown ? "rotate-180" : "rotate-0"} transition-transform`}
          />
        </button>

        {openDropdown && (
          <div className="absolute top-full mt-3 right-0 w-48 bg-white shadow-lg rounded-xl border py-2 z-20">
            {dropdownLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpenDropdown(false)}
                className={`block px-4 py-2 rounded-lg transition-all ${
                  pathname === item.href
                    ? "bg-gray-100 text-black font-medium"
                    : "text-gray-700 hover:bg-gray-100 hover:text-black"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
