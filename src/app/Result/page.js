// src/app/Result/page.jsx
"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { supabase } from "../../lib/supabaseClient";

export default function Result() {
  const searchParams = useSearchParams();
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAgencies = async () => {
      setLoading(true);

      const answersEncoded = searchParams.get("answers");
      if (!answersEncoded) {
        setMatches([]);
        setLoading(false);
        return;
      }

      let userAnswers;
      try {
        userAnswers = JSON.parse(decodeURIComponent(answersEncoded));
      } catch (err) {
        console.error("Failed to parse answers:", err);
        setMatches([]);
        setLoading(false);
        return;
      }

      const { data: agencies, error } = await supabase
        .from("agencies")
        .select("*");

      if (error) {
        console.error("Error fetching agencies:", error.message);
        setMatches([]);
        setLoading(false);
        return;
      }

      // Simple overlap-based filtering: any tag match
      const matched = agencies.filter((agency) =>
        Object.values(userAnswers).some((ans) =>
          agency.tags?.includes(ans)
        )
      );

      setMatches(matched);
      setLoading(false);
    };

    fetchAgencies();
  }, [searchParams]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading…</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Your Matched Agencies
      </h1>

      {matches.length === 0 ? (
        <p className="text-center text-gray-600">
          No matches found. Try broadening your criteria!
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {matches.map((agency) => (
            <div
              key={agency.id}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {agency.name}
              </h3>
              <p className="text-gray-600 mb-2">{agency.description}</p>
              <div className="text-sm text-gray-500 mb-4">
                📍 {agency.location} &bull; {agency.domain}
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {agency.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h4 className="font-medium text-gray-800 mb-2">Key Strengths</h4>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                {agency.strengths?.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              {agency.testimonial && (
                <blockquote className="italic text-gray-600 mb-4">
                  “{agency.testimonial}”
                </blockquote>
              )}
              <div className="flex gap-4">
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
      )}
    </main>
  );
}