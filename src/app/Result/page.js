// src/app/results/page.jsx
"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "../../lib/supabaseClient";

export default function Result() {
  const router = useRouter();
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [loading, setLoading] = useState(true);
  const [agencies, setAgencies] = useState([]);

  // 1) Protect route
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session?.user) {
        router.replace("/Customer/Login");
      } else {
        setCheckingAuth(false);
      }
    });
  }, [router]);

  // 2) Fetch agencies once auth check passes
  useEffect(() => {
    if (checkingAuth) return;

    const fetchAgencies = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("agencies")
        .select("id,name,description,location,domain,tags,strengths,testimonial,icon_path,created_at")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error loading agencies:", error);
      } else {
        setAgencies(data);
      }
      setLoading(false);
    };

    fetchAgencies();
  }, [checkingAuth]);

  // 3) Show loader while checking auth or fetching
  if (checkingAuth || loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading…</p>
      </div>
    );
  }

  // 4) Split into top 3 and the rest
  const topMatches = agencies.slice(0, 3);
  const moreAgencies = agencies.slice(3);

  return (
    <main className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
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
            Here are {agencies.length} agencies that align with your goals —
            these top picks are ready to hit the ground running.
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
                <ul className="list-none mt-2 space-y-1">
                  {ag.strengths.map((s) => (
                    <li key={s} className="flex items-center text-gray-700">
                      <span className="text-green-500 mr-2">✓</span>
                      {s}
                    </li>
                  ))}
                </ul>

                {ag.testimonial && (
                  <blockquote className="mt-6 p-4 bg-gray-50 rounded text-gray-600 italic flex-1">
                    {ag.testimonial}
                  </blockquote>
                )}

                <div className="mt-6 flex space-x-4">
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
                    <ul className="list-none space-y-1 mt-3 text-gray-700">
                      {ag.strengths.map((s) => (
                        <li key={s} className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          {s}
                        </li>
                      ))}
                    </ul>
                    <span className="inline-block bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded mt-4">
                      {ag.tags[0] /* example use of first tag */}
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
