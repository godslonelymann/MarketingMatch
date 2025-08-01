// src/app/login/page.jsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabaseClient";

export default function Login() {
  const router = useRouter();
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors]     = useState({});
  const [showPwd, setShowPwd]   = useState(false);
  const [loading, setLoading]   = useState(false);

  // If already logged in, check profile & redirect
  useEffect(() => {
    const check = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (!session?.user) return;

      // fetch your user’s role from profiles
      const { data: profile, error: profErr } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", session.user.id)
        .single();

      if (profErr) {
        console.error("Failed to load profile:", profErr);
        return router.replace("/FindYourAgency");
      }

      if (profile.role === "agency") {
        // maybe send agencies to their onboarding or dashboard
        router.replace("/Agency/Onboarding");
      } else {
        // customer → send them to the quiz
        router.replace("/FindYourAgency");
      }
    };
    check();
  }, [router]);

  function validate() {
    const errs = {};
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      errs.email = "Please enter a valid email";
    }
    if (!password) {
      errs.password = "Password is required";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setErrors({});

    // 1) Attempt to sign in
    const {
      data: { user },
      error: loginErr,
    } = await supabase.auth.signInWithPassword({ email, password });

    if (loginErr) {
      setErrors({ api: loginErr.message });
      setLoading(false);
      return;
    }
    if (!user) {
      setErrors({ api: "Login failed. Please try again." });
      setLoading(false);
      return;
    }

    //Fetch profile row
    const {data: profile, error: profErr} = await 
    supabase  
          .from("profiles")
          .select("role")
          .eq("id", user.id)
          .single();

    if (profErr){
      setErrors({api: profErr.message});
      setLoading(false);
      return;
    }

    //Redirect based on role
    if(profile?.role === "agency"){
      router.push("/Agency/Onboarding");

    } else if (profile?.role === "customer"){
      router.push("/FindYourAgency");
    } else {
      router.push("/SelectRole");

    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left gradient panel with abstract SVG */}
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
          {/* Optional graphic or logo */}
        </div>
      </div>

      {/* Right form panel */}
      <div className="flex-1 bg-gray-50 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-semibold text-gray-900">Welcome Back</h1>
          <p className="mt-2 text-gray-600">
            Log in to continue discovering your perfect-fit marketing agency
          </p>

          {/* API error */}
          {errors.api && (
            <p className="mt-4 text-center text-red-600">{errors.api}</p>
          )}

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="mt-1 block w-full px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div className="relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                type={showPwd ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="mt-1 block w-full pr-16 px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowPwd((v) => !v)}
                className="absolute inset-y-0 right-0 top-5.5 flex items-center px-4 text-gray-500"
              >
                {showPwd ? "Hide" : "Show"}
              </button>
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password}</p>
              )}
            </div>

            {/* Forgot password link */}
            <div className="text-right">
              <Link
                href="/forgot-password"
                className="text-sm text-blue-600 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 text-white font-medium rounded-lg transition ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {loading ? "Continuing…" : "Continue"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-gray-300" />
            <span className="px-4 text-gray-500 text-sm">Or continue with</span>
            <div className="flex-grow h-px bg-gray-300" />
          </div>

          {/* Google button */}
          <button className="w-full flex items-center justify-center gap-2 py-2 border rounded-lg hover:shadow-md bg-white transition">
            <Image
              src="/icons/google.png"
              alt="Google logo"
              width={20}
              height={20}
            />
            <span className="text-gray-700 font-medium">
              Continue with Google
            </span>
          </button>

          {/* Sign up link */}
          <p className="mt-6 text-center text-gray-600">
            Don&apos;t have an account?{" "}
            <Link
              href="/Signup"
              className="text-blue-600 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
