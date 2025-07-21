// src/components/Navbar.jsx
"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white fixed">
      {/* Top bar */}
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 py-5">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-900">
          MarketingMatch
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex space-x-8 text-gray-700">
          <Link href="/HowItWorks" className="hover:text-gray-900">
            How It Works
          </Link>
          <Link href="/AgencyTypes" className="hover:text-gray-900">
            Agency Types
          </Link>
          <Link href="/About" className="hover:text-gray-900">
            About
          </Link>
          <Link href="/Login" className="hover:text-gray-900">
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
      <div
        className={`
          fixed
          w-full
          md:hidden
          overflow-hidden
          bg-white
          transition-all duration-300 ease-in-out
          ${open ? "max-h-100" : "max-h-0"}
        `}
      >
        <div className="px-4 py-4 space-y-2 ">
          <Link
            href="/HowItWorks"
            className="block text-gray-700  hover:bg-gray-200 px-3 py-2 transition"
          >
            How It Works
          </Link>
          <Link
            href="/AgencyTypes"
            className="block text-gray-700   hover:bg-gray-200 px-3 py-2  transition"
          >
            Agency Types
          </Link>
          <Link
            href="/About"
            className="block text-gray-700   hover:bg-gray-200 px-3 py-2  transition"
          >
            About
          </Link>
          <Link
            href="/Login"
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
