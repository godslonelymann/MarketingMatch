// src/app/customer/signup/page.jsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabaseClient";

export default function SignUpPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm]   = useState("");
  const [errors, setErrors]     = useState({});
  const [loading, setLoading]   = useState(false);

  // 0) If already logged in, skip signup
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        router.replace("/SelectRole");
      }
    });
  }, [router]);

  function validate() {
    const errs = {};
    if (!fullName.trim()) {
      errs.fullName = "Full name is required";
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      errs.email = "Please enter a valid email";
    }
    if (password.length < 6) {
      errs.password = "Password must be at least 6 characters";
    }
    if (confirm !== password) {
      errs.confirm = "Passwords do not match";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setErrors({});

    try {
      // 1) Sign up via Supabase Auth
      const { data, error: signUpErr } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { full_name: fullName },
        },
      });
      if (signUpErr) {
        setErrors({ api: signUpErr.message });
        setLoading(false);
        return;
      }
      const user = data.user;
      if (!user) {
        setErrors({ api: "Signup failed—no user returned." });
        setLoading(false);
        return;
      }

      // 2) Insert profile row (RLS policy must allow this)
      const { error: profileErr } = await supabase
        .from("profiles")
        .insert([
          {
            id: user.id,
            full_name: fullName,
            email: user.email,
            role: "customer",
          },
        ]);
      if (profileErr) {
        setErrors({ api: profileErr.message });
        setLoading(false);
        return;
      }

      // 3) Redirect to quiz
      router.push("/SelectRole");
    } catch (err) {
      console.error("Unexpected error during signup:", err);
      setErrors({ api: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex flex-col md:flex-row">
      {/* Left graphic panel */}
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
          {/* you can put a logo or welcome graphic here */}
        </div>
      </div>

      {/* Right form panel */}
      <div className="flex-1 bg-gray-50 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-semibold text-gray-900">Create Your Account</h1>
          <p className="mt-2 text-gray-600">
            Start discovering marketing partners who think like you do.
          </p>

          {/* API errors */}
          {errors.api && (
            <p className="mt-4 text-center text-red-600">{errors.api}</p>
          )}

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
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

            {/* Email */}
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

            {/* Password */}
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

            {/* Confirm Password */}
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

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 text-white font-medium rounded-lg transition ${
                loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {loading ? "Signing up…" : "Let's Go"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-gray-300" />
            <span className="px-4 text-gray-500 text-sm">or continue with</span>
            <div className="flex-grow h-px bg-gray-300" />
          </div>

          {/* Google button */}
          <button className="w-full flex items-center justify-center gap-2 py-2 border rounded-lg hover:shadow-md bg-white transition">
            <Image src="/icons/google.png" alt="Google logo" width={20} height={20} />
            <span className="text-gray-700 font-medium">Continue with Google</span>
          </button>

          {/* Log in link */}
          <p className="mt-6 text-center text-gray-600">
            Already have an account?{" "}
            <Link href="/Login" className="text-blue-600 hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
