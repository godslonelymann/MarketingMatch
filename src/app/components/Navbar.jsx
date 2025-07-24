// src/components/Navbar.jsx
"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/30 backdrop-blur-md z-50">
      {/* Top bar */}
       <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-3">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-900">
          MarketingMatch
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex md:items-center space-x-8 text-gray-700">
          <Link href="#how-it-works" className="hover:text-gray-900">
            How It Works
          </Link>
          <Link href="#agency-types" className="hover:text-gray-900">
            Agency Types
          </Link>
          <Link href="#about" className="hover:text-gray-900">
            About
          </Link>
          <Link href="/Customer/Login" className="hover:text-gray-900">
            Login
          </Link>
          <Link
            href="/FindYourAgency"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Find Your Agency…
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-2xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile panel (always in DOM, animates height) */}
       <div className={`fixed top-full inset-x-0 w-full md:hidden overflow-hidden bg-white/90 transition-all duration-300 ease-in-out ${open ? "max-h-80" : "max-h-0"}`}>
+        <div className="px-4 sm:px-6 lg:px-8 py-4 space-y-2">
          <Link
            href="#how-it-works"
            className="block text-gray-700  hover:bg-gray-200 px-3 py-2 transition"
          >
            How It Works
          </Link>
          <Link
            href="#agency-types"
            className="block text-gray-700   hover:bg-gray-200 px-3 py-2  transition"
          >
            Agency Types
          </Link>
          <Link
            href="#about"
            className="block text-gray-700   hover:bg-gray-200 px-3 py-2  transition"
          >
            About
          </Link>
          <Link
            href="/Customer/Login"
            className="block text-gray-700   hover:bg-gray-200 px-3 py-2  transition"
          >
            Login
          </Link>
          <Link
            href="/FindYourAgency"
            className="block bg-blue-600 text-white hover:bg-blue-700 px-3 py-2 rounded-lg transition"
          >
            Find Your Agency…
          </Link>
        </div>
      </div>
    </nav>
  );
}
