// src/app/page.jsx
"use client";

import React from "react";
import Navbar from "./components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const agencyCards = [
    {
      icon: "/icons/at1.png",
      title: "Behavioural Thinkers",
      desc: "Data-driven insights that shape customer decisions",
      trusted: 12,
    },
    {
      icon: "/icons/at2.png",
      title: "Performance Hackers",
      desc: "Optimization experts who crush KPIs",
      trusted: 15,
    },
    {
      icon: "/icons/at3.png",
      title: "Brand Builders",
      desc: "Creative minds that craft lasting impressions",
      trusted: 18,
    },
    {
      icon: "/icons/at4.png",
      title: "B2B Growth Specialists",
      desc: "Strategic thinkers who scale B2B businesses",
      trusted: 20,
    },
  ];

  return (
    <>
      <Navbar />

      <main className="flex flex-col">
        {/* Hero Section */}
        <section className="flex flex-col-reverse md:flex-row items-center max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 gap-10 mt-8">
          <div className="flex-1 space-y-4 items-center text-center md:text-left ">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-none">
              We don&apos;t sell you agencies. We help you find yours
            </h1>
            <p className="text-base sm:text-lg text-gray-600">
              Answer a few simple questions — get matched with agencies who get
              your business and think like you do.
            </p>
            <div className="flex flex-col items-center sm:items-start space-y-2">
              <Link
                href="/FindYourAgency"
                className="w-full sm:w-auto inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Find Your Agency
              </Link>
              <span className="text-sm text-gray-500 text-center">
                Takes 2 minutes. No sales calls. No clutter.
              </span>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="w-full h-auto rounded-xl overflow-hidden">
              <Image
                src="/FRAME.png"
                alt="Team collaborating"
                width={800}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Three-Step Section */}
        <section 
        id="how-it-works"
        className="bg-gray-50 py-16">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-8">
              Let's make this easy.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="mx-auto bg-blue-600 text-white p-4 rounded-full inline-flex">
                  <Image
                    src="/icons/icon1.png"
                    width={30}
                    height={30}
                    alt="icon1"
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-900">
                  Tell us about your business
                </h3>
                <p className="text-gray-600">Industry, growth stage, goals</p>
              </div>
              <div className="space-y-4">
                <div className="mx-auto bg-blue-600 text-white p-4 rounded-full inline-flex">
                  <Image
                    src="/icons/icon2.png"
                    width={30}
                    height={30}
                    alt="icon1"
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-900">
                  Set your style & mindset
                </h3>
                <p className="text-gray-600">
                  Bold vs steady, creative vs data
                </p>
              </div>
              <div className="space-y-4">
                <div className="mx-auto bg-blue-600 text-white p-4 rounded-full inline-flex">
                  <Image
                    src="/icons/icon3.png"
                    width={30}
                    height={30}
                    alt="icon1"
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-900">
                  Get 3 curated agency matches
                </h3>
                <p className="text-gray-600">
                  With proof, vibes & past results
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Agency Types Cards */}
        <section
        id="agency-types"
          className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-20 gap-6"
        >
          {agencyCards.map((c) => (
            <div
              key={c.title}
              className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <Image
                src={c.icon}
                height={30}
                width={30}
                alt="at"
                className="mb-10"
              />
              <h4 className="font-semibold text-gray-900 mb-8">{c.title}</h4>
              <p className="text-gray-600 mb-10">{c.desc}</p>
              <p className="text-sm text-blue-600">
                Trusted by {c.trusted} SaaS founders
              </p>
            </div>
          ))}
        </section>

        {/* Testimonials */}
        <section className=" bg-[#F5F6FA] py-20">
          <div className="w-full h-full py-10 px-4 sm:px-6 lg:px-8  space-y-8 ">
            <div className="w-full max-w-screen-xl mx-auto">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-10 text-center">
                Trusted by Founders Who Move Fast — and Think Deep
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                <blockquote className="bg-white p-10 rounded-xl">
                  <p className="text-gray-700 text-xl mb-4">
                    &quot;We didn&apos;t need a big agency. We needed one that
                    understood our energy. This platform nailed it.&quot;
                  </p>
                  <h1 className="text-black font-bold">Ritesh</h1>
                  <p className="text-gray-700">D2C Brand Owner</p>
                </blockquote>
                <blockquote className="bg-white p-10 rounded-xl">
                  <p className="text-gray-700 mb-4 text-xl">
                    &quot;Within 10 days, we had 3 solid options. All felt
                    right. That never happens.&quot;
                  </p>
                  <h1 className="text-black font-bold">Meenal</h1>
                  <p className="text-gray-700">Series A Startup</p>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Quiz Teaser */}
        <section
          className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center gap-6"
        >
          <div className="max-w-screen-xl w-full flex flex-col items-center gap-6 md:flex-row md:justify-between md:items-center">
            {/* Text block always centered on mobile */}
            <div className="text-center sm:text-left">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                What Kind of Founder Are You?
              </h2>
              <p className="mt-2 text-gray-600">
                Discover agencies that fit your leadership energy — not just
                your budget.
              </p>
            </div>

            {/* Button always below on mobile */}
            <Link
              href="/FindYourAgency"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Take the 60-second Quiz
            </Link>
          </div>
        </section>

        {/* Dark CTA Footer */}
        <section className="bg-[#1A2B4A] text-white py-20">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold">
              Your next agency shouldn’t be a gamble.
            </h2>
            <p className="text-base sm:text-lg text-gray-300">
              Find the one that gets your vision — and helps you scale with
              clarity.
            </p>
            <Link
              href="/FindYourAgency"
              className="inline-block bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Start Finding
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-100 py-10">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">mindmatch</h4>
              <p className="text-gray-600">
                Making agency discovery smarter and more aligned with your
                business.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Resources</h4>
              <ul className="space-y-1 text-gray-600">
                <li>
                  <Link href="#" className="hover:underline">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Agency Types
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Success Stories
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Legal</h4>
              <ul className="space-y-1 text-gray-600">
                <li>
                  <Link href="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Stay Updated</h4>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#1A2B4A] rounded-r-lg p-2"
                >
                  <img
                    src="/icons/email.png"
                    width={20}
                    height={20}
                    alt="email"
                  />
                </button>
              </form>
            </div>
          </div>
          <p className="mt-8 text-center text-gray-500 text-sm">
            © 2024 mindmatch. All rights reserved.
          </p>
        </footer>
      </main>
    </>
  );
}
