// src/app/results/page.jsx
"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { supabase } from "../../lib/supabaseClient";

export default function Result() {
  const router = useRouter();
  const params = useSearchParams();
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [loading, setLoading] = useState(true);
  const [topMatches, setTopMatches] = useState([]);
  const [moreAgencies, setMoreAgencies] = useState([]);

  // 1) Auth‐guard
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session?.user) {
        router.replace("/Customer/Login");
      } else {
        setCheckingAuth(false);
      }
    });
  }, [router]);

  // 2) When auth is confirmed, parse answers & fetch+score agencies
  useEffect(() => {
    if (checkingAuth) return;

    // Parse answers
    const raw = params.get("answers") || "[]";
    let answers;
    try {
      answers = JSON.parse(decodeURIComponent(raw));
    } catch {
      return router.replace("/FindYourAgency");
    }

    const answerTags = Object.values(answers);

    const fetchAndMatch = async () => {
      setLoading(true);
      const { data: agencies = [], error } = await supabase
        .from("agencies")
        .select("*");
      if (error) {
        console.error("Error fetching agencies:", error);
        setLoading(false);
        return;
      }

      // Simple count‐overlap scoring
      const scored = agencies
        .map((ag) => {
          const score = answerTags.reduce(
            (cnt, t) => (ag.tags.includes(t) ? cnt + 1 : cnt),
            0
          );
          return { ...ag, score };
        })
        .filter((ag) => ag.score > 0) // drop ones with zero matches
        .sort((a, b) => b.score - a.score);

      setTopMatches(scored.slice(0, 3));
      setMoreAgencies(scored.slice(3));
      setLoading(false);
    };

    fetchAndMatch();
  }, [checkingAuth, params, router]);

  if (checkingAuth || loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading…</p>
      </div>
    );
  }

  return (
    <main className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto space-y-12">
        {/* Header */}
        <header className="text-center space-y-3">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Marketing Pros You Need Are Ready…
          </h1>
          <p className="text-gray-600">
            Curated based on your business type, growth stage, and mindset
          </p>
          <p className="text-gray-400">
            Here are {topMatches.length + moreAgencies.length} agencies that
            align with your goals — these top picks are ready to hit the ground
            running.
          </p>
        </header>

        {/* Top 3 Matches */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Top Matches for You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topMatches.map((ag) => (
              <div
                key={ag.id}
                className="bg-white rounded-lg shadow p-6 flex flex-col"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {ag.name}
                </h3>
                <p className="text-gray-600 mt-1">{ag.description}</p>

                <div className="flex flex-wrap text-gray-500 text-sm mt-3 gap-x-2">
                  <span>📍 {ag.location}</span>
                  <span>•</span>
                  <span>{ag.domain}</span>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {ag.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h4 className="mt-6 font-medium text-gray-800">Key Strengths</h4>
                <ul className="mt-2 space-y-1">
                  {ag.strengths.map((s) => (
                    <li
                      key={s}
                      className="flex items-center text-gray-700 space-x-2"
                    >
                      <span className="text-green-500">✓</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>

                <blockquote className="mt-6 italic text-gray-600 flex-1">
                  {ag.testimonial}
                </blockquote>

                <div className="mt-auto flex space-x-4 pt-6">
                  <button className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                    Book Free Call
                  </button>
                  <button className="flex-1 border border-gray-300 py-2 rounded hover:bg-gray-100 transition">
                    Save for Later
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Other Agencies */}
        {moreAgencies.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Other Agencies You Might Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {moreAgencies.map((ag) => (
                <div
                  key={ag.id}
                  className="bg-white rounded-lg shadow p-6 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {ag.name}
                    </h3>
                    <p className="text-gray-600 mt-1">{ag.description}</p>
                    <p className="text-gray-500 text-sm mt-2">
                      📍 {ag.location}
                    </p>
                    <ul className="mt-3 space-y-1 text-gray-700">
                      {ag.strengths.map((s) => (
                        <li key={s} className="flex items-center space-x-2">
                          <span className="text-green-500">✓</span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                    <span className="inline-block bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded mt-4">
                      {ag.tags[0]}
                    </span>
                  </div>

                  <div className="mt-6 flex gap-4">
                    <Link
                      href="#"
                      className="flex-1 bg-blue-100 text-blue-700 py-2 rounded hover:bg-blue-200 transition text-center"
                    >
                      View Profile
                    </Link>
                    <Link
                      href="#"
                      className="flex-1 border border-gray-300 py-2 rounded hover:bg-gray-100 transition text-center"
                    >
                      Compare
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Final CTA */}
        <section className="text-center py-12">
          <p className="text-gray-800 mb-4">
            Need help deciding?
            <br />
            Book a free 15-min clarity call and we’ll help you choose the right
            partner.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Schedule Call
          </button>
        </section>
      </div>
    </main>
  );
}