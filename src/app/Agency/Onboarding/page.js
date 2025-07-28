// src/app/Agency/Onboarding/page.jsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function Onboarding() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  // form fields
  const [name, setName]             = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation]     = useState("");
  const [domain, setDomain]         = useState("");
  const [tags, setTags]             = useState("");
  const [strengths, setStrengths]   = useState("");
  const [testimonial, setTestimonial] = useState("");
  const [iconPath, setIconPath]     = useState("");

  useEffect(() => {
    (async () => {
      // 1) Must be logged in
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (!session?.user) {
        router.replace("/Agency/Login");
        return;
      }

      const userId = session.user.id;

      // 2) Must have role = 'agency'
      const { data: profile, error: profErr } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", userId)
        .single();
      if (profErr || profile.role !== "agency") {
        router.replace("/SelectRole");
        return;
      }

      // 3) If they already have an agency row, skip onboarding
      const { data: existing, error: existErr } = await supabase
        .from("agencies")
        .select("id")
        .eq("owner_id", userId)
        .single();
      if (existing) {
        router.replace("/");
        return;
      }

      setLoading(false);
    })();
  }, [router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading…</p>
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      data: { session },
    } = await supabase.auth.getSession();
    const owner_id = session.user.id;

    const { error } = await supabase.from("agencies").insert({
      owner_id,
      name,
      description,
      location,
      domain,
      tags: tags.split(",").map((t) => t.trim()),
      strengths: strengths.split(",").map((s) => s.trim()),
      testimonial,
      icon_path: iconPath,
    });

    if (error) {
      alert(error.message);
    } else {
      router.replace("/");
    }
  };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push("/");
    }

  return (
    <main className="max-w-xl mx-auto my-12 p-6 bg-white rounded shadow">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-end">
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
          Log Out
        </button>
      </div>
      <h1 className="text-2xl font-bold mb-4">Agency Onboarding</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Agency Name */}
        <div>
          <label className="block font-medium">Agency Name</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        {/* Description */}
        <div>
          <label className="block font-medium">Description</label>
          <textarea
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        {/* Location & Domain */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Location</label>
            <input
              type="text"
              required
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div>
            <label className="block font-medium">Domain</label>
            <input
              type="text"
              required
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
        </div>
        {/* Tags & Strengths */}
        <div>
          <label className="block font-medium">Tags (comma-separated)</label>
          <input
            type="text"
            required
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div>
          <label className="block font-medium">Key Strengths (comma-separated)</label>
          <input
            type="text"
            required
            value={strengths}
            onChange={(e) => setStrengths(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        {/* Testimonial & Icon */}
        <div>
          <label className="block font-medium">Testimonial</label>
          <input
            type="text"
            value={testimonial}
            onChange={(e) => setTestimonial(e.target.value)}
            placeholder="Optional"
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div>
          <label className="block font-medium">Icon Path</label>
          <input
            type="text"
            value={iconPath}
            onChange={(e) => setIconPath(e.target.value)}
            placeholder="/icons/yourlogo.png"
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Finish Onboarding
        </button>
      </form>
    </main>
  );
}