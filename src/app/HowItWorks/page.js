// src/app/how-it-works/page.jsx
"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabaseClient";
import Image from "next/image";
import Navbar from "../components/Navbar"; // adjust path if needed

export default function HowItWorks() {
  const router = useRouter();
  const [session, setSession] = useState(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    // fetch initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setChecking(false);
    });

    // subscribe to auth changes (so link updates live)
    const { data: listener } = supabase.auth.onAuthStateChange((_, sess) => {
      setSession(sess);
    });
    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const handleBegin = () => {
    if (session && session.user) {
      router.push("/FindYourAgency");
    } else {
      router.push("/Customer/Login");
    }
  };

  if (checking) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading…</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <main className="pt-24"> {/* adjust top padding to clear fixed navbar */}
        <section className="bg-white">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Here’s how it works
            </h1>
            <p className="mt-2 text-gray-600">
              Smart matching in 3 simple steps — no clutter, no spam.
            </p>
          </div>

          <div className="bg-gray-50 py-12">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="bg-white rounded-lg shadow p-6 text-left">
                <Image
                  src="/icons/hiw1.png"
                  alt="Tell us about your business"
                  width={32}
                  height={32}
                  className="text-blue-600 mb-4"
                />
                <span className="text-sm text-gray-400">01</span>
                <h2 className="mt-1 text-xl font-semibold text-gray-900">
                  Tell us about your business
                </h2>
                <p className="mt-2 text-gray-600">
                  Industry, growth stage, vision — just the essentials.
                </p>
              </div>
              {/* Step 2 */}
              <div className="bg-white rounded-lg shadow p-6 text-left">
                <Image
                  src="/icons/hiw2.png"
                  alt="Set your marketing style"
                  width={32}
                  height={32}
                  className="text-blue-600 mb-4"
                />
                <span className="text-sm text-gray-400">02</span>
                <h2 className="mt-1 text-xl font-semibold text-gray-900">
                  Set your marketing style
                </h2>
                <p className="mt-2 text-gray-600">
                  Are you bold or steady? Creative or data-led?
                </p>
              </div>
              {/* Step 3 */}
              <div className="bg-white rounded-lg shadow p-6 text-left">
                <Image
                  src="/icons/hiw3.png"
                  alt="Get your curated agency list"
                  width={32}
                  height={32}
                  className="text-blue-600 mb-4"
                />
                <span className="text-sm text-gray-400">03</span>
                <h2 className="mt-1 text-xl font-semibold text-gray-900">
                  Get your curated agency list
                </h2>
                <p className="mt-2 text-gray-600">
                  Receive 3 top-fit options — with social proof, personality match & real results.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row sm:justify-between sm:space-x-12 space-y-20 sm:space-y-0 text-center">
            <div className="flex items-center justify-center space-x-2">
              <Image src="/icons/hiw4.png" alt="" width={20} height={20} />
              <div>
                <p className="font-medium text-gray-900">2-minute process</p>
                <p className="text-gray-600 text-sm">Quick and efficient matching</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Image src="/icons/hiw5.png" alt="" width={20} height={20} />
              <div>
                <p className="font-medium text-gray-900">100+ verified agencies</p>
                <p className="text-gray-600 text-sm">Carefully vetted partners</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Image src="/icons/hiw6.png" alt="" width={20} height={20} />
              <div>
                <p className="font-medium text-gray-900">Data-driven matching</p>
                <p className="text-gray-600 text-sm">Smart algorithm at work</p>
              </div>
            </div>
          </div>

          <div className="bg-[#F8F9FA] py-12 text-center">
            <button
              onClick={handleBegin}
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
            >
              Let&apos;s Begin
            </button>
            <p className="mt-2 text-gray-500 text-sm">
              Takes 2 minutes. No sales calls.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}