// src/app/agency-types/page.jsx
"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabaseClient";
import Navbar from "../components/Navbar";
import Image from "next/image";

const OPTIONS = [
  {
    id: "behavioural",
    icon: "/icons/agency1.png",
    title: "Behavioural Strategists",
    subtitle: "Built for brands that think deep.",
  },
  {
    id: "performance",
    icon: "/icons/agency2.png",
    title: "Performance Marketers",
    subtitle: "Fast funnels. Serious ROI.",
  },
  {
    id: "brand",
    icon: "/icons/agency3.png",
    title: "Brand Storytellers",
    subtitle: "Memorable brands. Long-term love.",
  },
  {
    id: "b2b",
    icon: "/icons/agency4.png",
    title: "B2B Specialists",
    subtitle: "Precision + strategy for enterprise growth.",
  },
  {
    id: "bold",
    icon: "/icons/agency5.png",
    title: "Bold Creators",
    subtitle: "Disruptive, daring, and design-led.",
  },
  {
    id: "data",
    icon: "/icons/agency6.png",
    title: "Data-Driven Growth Hackers",
    subtitle: "Scale without the fluff.",
  },
];

export default function AgencyTypes() {
  const router = useRouter();
  const [session, setSession] = useState(null);
  const [checking, setChecking] = useState(true);
  const [selected, setSelected] = useState([]);

  // Fetch initial session & subscribe to changes
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setChecking(false);
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_, sess) => {
      setSession(sess);
    });
    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  // Toggle an option in/out of the selection array
  const toggle = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  // Continue → either quiz or login
  const handleContinue = () => {
    if (session?.user) {
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

      <main className="pt-24 pb-16 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            What Kind of Agency Are You Looking For?
          </h1>
          <p className="mt-2 text-gray-600">
            Choose the vibe, expertise, and mindset that fits your business.
          </p>
          <p className="text-gray-500 text-sm mt-1">
            Not sure? Pick what sounds like your goal.
          </p>
        </div>

        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {OPTIONS.map((opt) => {
            const isOn = selected.includes(opt.id);
            return (
              <div
                key={opt.id}
                className={`
                  relative flex flex-col py-10 space-y-4 px-5 bg-white rounded-lg shadow
                  transition border-2
                  ${isOn
                    ? "border-blue-600 bg-blue-50"
                    : "border-transparent hover:border-gray-200"}
                `}
              >
                <div className="mb-4">
                  <Image
                    src={opt.icon}
                    alt={opt.title}
                    width={32}
                    height={32}
                  />
                </div>
                <h2 className="text-lg font-semibold text-gray-900">
                  {opt.title}
                </h2>
                <p className="text-gray-600 mt-1">{opt.subtitle}</p>
                <button
                  type="button"
                  onClick={() => toggle(opt.id)}
                  className={`
                    mt-auto self-start px-4 py-1 rounded-full border 
                    transition text-sm
                    ${
                      isOn
                        ? "bg-blue-600 text-white border-blue-600 hover:bg-blue-700"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                    }
                  `}
                >
                  {isOn ? "Selected" : "Select"}
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={handleContinue}
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-700 transition disabled:opacity-50"
            disabled={selected.length === 0}
          >
            Continue
          </button>
          <p className="mt-2 text-gray-500 text-sm">
            You can select more than one. We&apos;ll use this to match better.
          </p>
        </div>
      </main>
    </>
  );
}
