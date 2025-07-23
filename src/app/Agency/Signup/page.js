"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function SignUpPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [errors, setErrors] = useState({});

  function validate() {
    const errs = {};
    if (!fullName.trim()) errs.fullName = "Full name is required";
    if (!/^\S+@\S+\.\S+$/.test(email)) errs.email = "Please enter a valid email";
    if (password.length < 6) errs.password = "Password must be at least 6 characters";
    if (confirm !== password) errs.confirm = "Passwords do not match";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    // TODO: send signup data to your API
    console.log({ fullName, email, password });
  };

  return (
    <div className="h-screen flex flex-col md:flex-row">
      <div className="hidden md:flex flex-1 bg-gradient-to-br from-blue-600 to-blue-900 relative p-10">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 600 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polyline
            points="50,100 150,250 300,200 450,350 550,300"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="2"
          />
          <circle
            cx="200"
            cy="400"
            r="100"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
          />
        </svg>
        <div className="relative z-10 m-auto text-white text-center">
          {/* Optional: logo or welcome graphic here */}
        </div>
      </div>
      <div className="flex-1 bg-gray-50 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-semibold text-gray-900">
            Create Your Account
          </h1>
          <p className="mt-2 text-gray-600">
            Start discovering marketing partners who think like you do.
          </p>
          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
                className="mt-1 block w-full px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="mt-1 block w-full px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password"
                className="mt-1 block w-full px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password}</p>
              )}
            </div>
            <div>
              <label htmlFor="confirm" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                id="confirm"
                type="password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                placeholder="Confirm your password"
                className="mt-1 block w-full px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.confirm && (
                <p className="mt-1 text-sm text-red-600">{errors.confirm}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={Object.keys(errors).length > 0}
              className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition disabled:opacity-50 cursor-pointer"
            >
              Let&apos;s Go
            </button>
          </form>
          <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-gray-300" />
            <span className="px-4 text-gray-500 text-sm">or continue with</span>
            <div className="flex-grow h-px bg-gray-300" />
          </div>
          <button className="w-full flex items-center justify-center gap-2 py-2 border rounded-lg hover:shadow-md bg-white transition">
            <Image src="/icons/google.png" alt="Google logo" width={20} height={20} />
            <span className="text-gray-700 font-medium cursor-pointer">Continue with Google</span>
          </button>
          <p className="mt-6 text-center text-gray-600">
            Already have an account? <Link href="/Login" className="text-blue-600 hover:underline">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  )}


