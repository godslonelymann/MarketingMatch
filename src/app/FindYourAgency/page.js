// src/app/FindYourAgency/page.jsx
"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabaseClient";
import { questions } from "../data/questions";
import Image from "next/image";

export default function FindYourAgency() {
  const router = useRouter();
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [answers, setAnswers] = useState({});

  // 1) Protect route on mount
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session?.user) {
        router.replace("/Login");
      } else {
        setCheckingAuth(false);
      }
    });
  }, [router]);

  if (checkingAuth) {
    return null; // or your loading spinner
  }

  // 2) Record an answer
  const handleSelect = (qId, label) =>
    setAnswers((prev) => ({ ...prev, [qId]: label }));

  // 3) Logout handler
  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/Login");
  };

  // 4) When all answered, encode and navigate to results
  const handleSubmit = () => {
    const payload = encodeURIComponent(JSON.stringify(answers));
    router.push(`/Result?answers=${payload}`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Logout button */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-end">
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
          Log Out
        </button>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">

        {/* Hero */}
        <div className="text-center space-y-2">
          <h1 className="text-5xl font-semibold text-gray-900">
            Let&apos;s find an agency that gets you
          </h1>
          <p className="text-xl text-gray-600">
            Answer a few quick questions. Takes 2 minutes.
          </p>
        </div>

        {/* Questions */}
        {questions.map((q) => (
          <div key={q.id} className="space-y-4 text-center">
            <p className="text-sm text-gray-500">
              Question {q.id} of {questions.length}
            </p>
            <h2 className="text-2xl font-medium text-gray-900">{q.title}</h2>
            <p className="text-gray-600">{q.subtitle}</p>

            <div
              className={`grid gap-6 ${
                q.options.length === 6
                  ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                  : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
              }`}
            >
              {q.options.map((opt) => (
                <button
                  key={opt.label}
                  onClick={() => handleSelect(q.id, opt.label)}
                  className={`
                    flex items-center space-x-4 p-8 border rounded-lg transition-colors duration-200
                    ${
                      answers[q.id] === opt.label
                        ? "border-blue-600 bg-blue-50"
                        : "border-gray-200 bg-[#F9FAFB] hover:bg-gray-50"
                    }
                  `}
                >
                  <Image
                    src={opt.icon}
                    alt={opt.label}
                    width={32}
                    height={32}
                    className="flex-shrink-0"
                  />
                  <div className="text-left">
                    <span className="block font-medium text-gray-900">
                      {opt.label}
                    </span>
                    {opt.text && (
                      <span className="block text-gray-600 text-sm mt-1">
                        {opt.text}
                      </span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}

        {/* Submit CTA */}
        <div className="text-center space-y-4">
          <button
            onClick={handleSubmit}
            disabled={Object.keys(answers).length < questions.length}
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 transition"
          >
            View Your Matches
          </button>
        </div>
      </div>
    </div>
  );
}