"use client";

import React, { useState } from "react";
import { questions } from "../data/questions";
import Image from 'next/image';



export default function FindYourAgency() {
  // keep track of which option (if any) the user has selected per question
  const [answers, setAnswers] = useState({});

  // when someone clicks an option, record it
  const handleSelect = (qId, label) => {
    setAnswers(prev => ({ ...prev, [qId]: label }));
  };

  return (
    <div className="bg-amber-200 min-h-screen w-full">
      {/* Centered content container */}
      <div className="max-w-screen-xl w-full mx-auto py-10 px-4 space-y-10">
        {/* Hero */}
        <div className="bg-red-300 rounded-lg p-8 text-center">
          <h1 className="text-5xl font-semibold">
            Let&apos;s find an agency that gets you
          </h1>
          <p className="mt-2 text-xl text-gray-700">
            Answer a few quick questions. Takes 2 minutes.
          </p>
        </div>

        {/* Loop through every question */}
        {questions.map((q) => (
          <div key={q.id} className="bg-blue-400 rounded-lg p-6">
            {/* Question header */}
            <p className="text-base text-gray-800">
              Question {q.id} of {questions.length}
            </p>
            <h2 className="mt-1 text-2xl font-medium">{q.title}</h2>
            <p className="mt-1 text-gray-600">{q.subtitle}</p>

            {/* Options grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {q.options.map((opt) => (
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
                  {/* If you used public/icons/*.png, opt.icon is a string path */}
                  <Image
                    src={opt.icon}
                    alt={opt.label}
                    height={32}
                    width={32}
                    className="h-8 w-8 mb-2"
                  />
                  <span className="text-gray-800">{opt.label}</span>
                  <span className="text-gray-800 mt-2 font-[300]">{opt.text}</span>
                </button>
              ))}
            </div>
          </div>
        ))}

        {/* Submit button */}
        <div className="text-center">
          <button
            onClick={() => console.log("All answers:", answers)}
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
