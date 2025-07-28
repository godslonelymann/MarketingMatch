// src/app/select-role/page.jsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabaseClient";

export default function SelectRole() {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  // 1) Protect route: only signed-in users
  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.user) {
        router.replace("/Login");
      } else {
        setChecking(false);
      }
    };
    checkAuth();
  }, [router]);

  if (checking) return null;

  // 2) Set the role and redirect accordingly
  const handleChoose = async (role) => {
    const { data: { session } } = await supabase.auth.getSession();
    const userId = session.user.id;

    const { error } = await supabase
      .from("profiles")
      .update({ role })
      .eq("id", userId);
    if (error) {
      console.error("Failed to save role:", error.message);
      return;
    }

    if (role === "customer") {
      router.push("/FindYourAgency");
    } else {
      router.push("/Agency/Onboarding");
    }
  };

  const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push("/");
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-end">
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
          Log Out
        </button>
      </div>
      <h1 className="text-3xl font-bold mb-8">Get started as…</h1>
      <div className="flex flex-col sm:flex-row gap-6">
        <button
          onClick={() => handleChoose("customer")}
          className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Customer
        </button>
        <button
          onClick={() => handleChoose("agency")}
          className="px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          Agency
        </button>
      </div>
    </main>
  );
}