// src/app/FindYourAgency/page.jsx
"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabaseClient";
import Image from "next/image";

export default function FindYourAgency() {
  const router = useRouter();

  const [checkingAuth, setCheckingAuth] = useState(true);
  const [loadingQ, setLoadingQ]       = useState(true);
  const [questions, setQuestions]     = useState([]);
  const [answers, setAnswers]         = useState({});

  // — 1) Auth guard on mount
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session?.user) {
        router.replace("/Customer/Login");
      } else {
        setCheckingAuth(false);
      }
    });
  }, [router]);

  // — 2) Fetch questions once we know the user is logged in
  useEffect(() => {
    if (checkingAuth) return;

    const fetchQuestions = async () => {
      setLoadingQ(true);

      const { data, error } = await supabase
        .from("questions")
        .select(`
          id,
          title,
          subtitle,
          question_options (
            label,
            icon,
            extra_text,
            sort_order
          )
        `)
        .order("id", { ascending: true })
        .order("sort_order", { foreignTable: "question_options", ascending: true });

      if (error) {
        console.error("Error loading questions:", error);
      } else {
        setQuestions(data);
      }
      setLoadingQ(false);
    };

    fetchQuestions();
  }, [checkingAuth]);

  // — 3) While checking auth or loading questions, show a loader
  if (checkingAuth || loadingQ) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading…</p>
      </div>
    );
  }

  // — 4) Record an answer
  const handleSelect = (qId, label) => {
    setAnswers((prev) => ({ ...prev, [qId]: label }));
  };

  // — 5) When all answered, serialize and navigate to results
  const handleSubmit = () => {
    if (Object.keys(answers).length < questions.length) return;
    const payload = encodeURIComponent(JSON.stringify(answers));
    router.push(`/Result?answers=${payload}`);
  };

  return (
    <div className="bg-amber-200 min-h-screen w-full">
      {/* Hero */}
      <div className="max-w-screen-xl mx-auto py-10 px-4">
        <div className="bg-red-300 rounded-lg p-8 text-center">
          <h1 className="text-5xl font-semibold">Let&apos;s find an agency that gets you</h1>
          <p className="mt-2 text-xl text-gray-700">Answer a few quick questions. Takes 2 minutes.</p>
        </div>

        {/* Questions */}
        <div className="space-y-10 mt-10">
          {questions.map((q) => (
            <div key={q.id} className="bg-blue-400 rounded-lg p-6">
              <p className="text-base text-gray-800">
                Question {q.id} of {questions.length}
              </p>
              <h2 className="mt-1 text-2xl font-medium">{q.title}</h2>
              <p className="mt-1 text-gray-600">{q.subtitle}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {q.question_options.map((opt) => (
                  <button
                    key={opt.label}
                    onClick={() => handleSelect(q.id, opt.label)}
                    className={`
                      flex flex-col items-center p-4 rounded-lg border transition
                      ${
                        answers[q.id] === opt.label
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200 bg-white hover:shadow-md"
                      }
                    `}
                  >
                    <Image
                      src={opt.icon}
                      alt={opt.label}
                      width={32}
                      height={32}
                      className="mb-2"
                    />
                    <span className="text-gray-800 font-medium">{opt.label}</span>
                    {opt.extra_text && (
                      <span className="text-gray-700 mt-1">{opt.extra_text}</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Submit */}
        <div className="text-center mt-8">
          <button
            onClick={handleSubmit}
            disabled={Object.keys(answers).length < questions.length}
            className="px-6 py-3 bg-blue-600 text-white rounded disabled:opacity-50 transition"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
