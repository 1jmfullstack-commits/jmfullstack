"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function LeadForm({ source }) {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const form = new FormData(e.target);

    const { error } = await supabase.from("leads").insert([
      {
        name: form.get("name"),
        email: form.get("email"),
        company: form.get("company"),
        project_type: form.get("project_type"),
        budget_range: form.get("budget_range"),
        message: form.get("message"),
        source,
      },
    ]);

    setLoading(false);

    if (!error) setDone(true);
  }

  if (done)
    return <p style={{ color: "#00ffcc" }}>We’ll contact you shortly.</p>;

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12 }}>
      <input name="name" placeholder="Name" required />
      <input name="email" placeholder="Email" required />
      <input name="company" placeholder="Company" />
      <select name="project_type">
        <option>Website</option>
        <option>Mobile App</option>
        <option>Automation</option>
      </select>
      <select name="budget_range">
        <option>$300 - $1,000</option>
        <option>$1,000 - $5,000</option>
        <option>$5,000+</option>
      </select>
      <textarea name="message" placeholder="Tell us about your project" />
      <button type="submit" disabled={loading}>
        {loading ? "Sending..." : "Submit"}
      </button>
    </form>
  );
}
