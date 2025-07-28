// src/components/Navbar.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  // when you click the CTA, check session first
  const handleFindClick = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (session?.user) {
      router.push("/FindYourAgency");
    } else {
      router.push("/Login");
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/50 backdrop-blur-md z-50">
      {/* Top bar */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-3">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-900">
          MarketingMatch
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center space-x-8 text-gray-700">
          <Link href="/HowItWorks" className="hover:text-gray-900">
            How It Works
          </Link>
          <Link href="/AgencyTypes" className="hover:text-gray-900">
            Agency Types
          </Link>
          <Link href="#about" className="hover:text-gray-900">
            About
          </Link>
          <Link href="/Login" className="hover:text-gray-900">
            Login
          </Link>
          {/* ← replaced Link with button */}
          <button
            onClick={handleFindClick}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Find Your Agency
          </button>
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

      {/* Mobile panel (animates height) */}
      <div
        className={`
          fixed top-full inset-x-0 w-full md:hidden overflow-hidden 
          bg-white/90 transition-all duration-300 ease-in-out
          ${open ? "max-h-80" : "max-h-0"}
        `}
      >
        <div className="px-4 sm:px-6 lg:px-8 py-4 space-y-2">
          <Link
            href="/HowItWorks"
            className="block text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-lg transition"
          >
            How It Works
          </Link>
          <Link
            href="/AgencyTypes"
            className="block text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-lg transition"
          >
            Agency Types
          </Link>
          <Link
            href="#about"
            className="block text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-lg transition"
          >
            About
          </Link>
          <Link
            href="/Login"
            className="block text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-lg transition"
          >
            Login
          </Link>
          {/* ← also a button here */}
          <button
            onClick={handleFindClick}
            className="w-full bg-blue-600 text-white hover:bg-blue-700 px-3 py-2 rounded-lg transition"
          >
            Find Your Agency
          </button>
        </div>
      </div>
    </nav>
  );
}