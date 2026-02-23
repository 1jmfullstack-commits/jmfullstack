"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";

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
    return (
      <div style={styles.success}>
        🚀 We’ll contact you within 24h.
      </div>
    );

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.grid}>
        <Input name="name" placeholder="Your Name" />
        <Input name="email" placeholder="Email Address" />
      </div>

      <Input name="company" placeholder="Company (optional)" />

      <select name="project_type" style={styles.select}>
        <option>High-Converting Website</option>
        <option>Scalable SaaS</option>
        <option>Automation System</option>
        <option>Custom Solution</option>
      </select>

      <select name="budget_range" style={styles.select}>
        <option>$500 – $2,000</option>
        <option>$2,000 – $10,000</option>
        <option>$10,000+</option>
      </select>

      <textarea
        name="message"
        placeholder="Describe what you want to build..."
        style={styles.textarea}
      />

      <button type="submit" disabled={loading} style={styles.button}>
        {loading ? "Sending..." : "Start the Project →"}
      </button>
    </form>
  );
}

function Input({ name, placeholder }) {
  return (
    <input
      name={name}
      placeholder={placeholder}
      required={name !== "company"}
      style={styles.input}
    />
  );
}

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 18,
    padding: 30,
    borderRadius: 20,
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(20px)",
    border: "1px solid rgba(255,255,255,0.1)",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: 18,
  },

  input: {
    padding: "14px 16px",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.15)",
    background: "rgba(0,0,0,0.3)",
    color: "white",
    outline: "none",
    fontSize: 14,
    transition: "all 0.3s ease",
  },

  select: {
    padding: "14px 16px",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.15)",
    background: "rgba(0,0,0,0.3)",
    color: "white",
    outline: "none",
    fontSize: 14,
  },

  textarea: {
    padding: "14px 16px",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.15)",
    background: "rgba(0,0,0,0.3)",
    color: "white",
    minHeight: 120,
    resize: "none",
    fontSize: 14,
  },

  button: {
    padding: "16px",
    borderRadius: 14,
    border: "none",
    cursor: "pointer",
    fontWeight: 600,
    fontSize: 15,
    background: "linear-gradient(90deg, #6c5ce7, #00d2ff)",
    color: "white",
    transition: "all 0.3s ease",
  },

  success: {
    padding: 30,
    borderRadius: 20,
    background: "rgba(0,255,200,0.1)",
    border: "1px solid rgba(0,255,200,0.4)",
    textAlign: "center",
    fontWeight: 500,
  },
};
