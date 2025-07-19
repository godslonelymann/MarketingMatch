// src/components/Navbar.jsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import CTAButton from "./ui/CTAButton";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-amber-200">
      {/* Centered inner container */}
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 py-5">
        {/* Logo / Brand */}
        <Link href="/" className="text-xl font-bold text-gray-900">
          MarketingMatch
        </Link>

        {/* Mobile menu button (hamburger) */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden text-2xl focus:outline-none"
          aria-label="Toggle navigation"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Desktop menu links */}
        <div className="hidden md:flex items-center space-x-8 text-gray-700">
          <Link href="/HowItWorks" className="hover:text-gray-900">
            How it Works
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
          <CTAButton title="Find Your Agency..." />
        </div>
      </div>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div className="md:hidden bg-stone-100 p-5 space-y-4 shadow-inner">
          {[
            { href: "/HowItWorks", label: "How it Works" },
            { href: "/AgencyTypes", label: "Agency Types" },
            { href: "/About", label: "About" },
            { href: "/Login", label: "Login" },
            { href: "/FindYourAgency", label: "Find Your Agency...", isCta: true },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                `block w-full text-left px-3 py-2 rounded-lg transition \${
                  item.isCta
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
