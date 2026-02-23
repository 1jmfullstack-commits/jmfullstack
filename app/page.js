"use client";

import { useEffect, useState } from "react";
import LeadForm from "./components/LeadForm";

const projects = [
  { title: "Personal Brand Funnel", tag: "Creator", stat: "+212% CVR" },
  { title: "Luxury Real Estate Platform", tag: "Real Estate", stat: "+34% Leads" },
  { title: "AI Booking Assistant", tag: "Automation", stat: "-60% Manual Work" },
  { title: "Operations Dashboard", tag: "Internal Tool", stat: "Live KPIs" },
  { title: "Mobile App Launch", tag: "Startup", stat: "Featured App" },
];

export default function Home() {
  return (
    <div style={styles.wrapper}>
      <AnimatedBackground />
      <Hero />
      <Projects />
      <CTA />
    </div>
  );
}

function AnimatedBackground() {
  return (
    <div style={styles.bgWrapper}>
      <div style={styles.gradientOrb1} />
      <div style={styles.gradientOrb2} />
    </div>
  );
}

function Hero() {
  return (
    <section style={styles.hero}>
      <h1 style={styles.title}>
        We Build
        <span style={styles.gradientText}> Digital Power</span>
      </h1>
      <p style={styles.subtitle}>
        High-performance web, mobile & AI systems for brands that want to scale.
      </p>
      <a href="#contact" style={styles.cta}>
        Start a Project →
      </a>
    </section>
  );
}

function PersonalBrand() {
  return (
    <section style={styles.pbSection}>
      <div style={styles.pbContainer}>

        <div style={styles.pbLeft}>
          <div style={styles.pbTag}>PERSONAL BRAND CASE STUDY</div>

          <h2 style={styles.pbTitle}>
            From Content Creator to Scalable Platform
          </h2>

          <p style={styles.pbText}>
            We designed and developed the full digital ecosystem for
            <strong> vamonene.com</strong> — including growth automation,
            premium access architecture and high-conversion UX.
          </p>

          <div style={styles.pbStats}>
            <div style={styles.pbStatBox}>
              <div style={styles.pbStatNumber}>100–120</div>
              <div style={styles.pbStatLabel}>New Users Daily</div>
            </div>

            <div style={styles.pbStatBox}>
              <div style={styles.pbStatNumber}>+212%</div>
              <div style={styles.pbStatLabel}>Conversion Growth</div>
            </div>
          </div>
        </div>

        <div style={styles.pbRight}>
          <div style={styles.glow}></div>

          <div style={styles.phone}>
            <div style={styles.phoneScreen}>
              <div style={styles.appHeader}>Vamo Nene</div>
              <div style={styles.appCard}>Premium Portal Access</div>
              <div style={styles.appCard}>Exclusive Content</div>
              <div style={styles.appCard}>Community System</div>
              <div style={styles.appCard}>Automated Onboarding</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
function Projects() {
  return (
    <section style={styles.gridSection}>
      <div style={styles.grid}>
        {projects.map((p, i) => (
          <div key={i} style={styles.card} className="card">
            <div style={styles.cardGlow} />
            <span style={styles.tag}>{p.tag}</span>
            <h3 style={styles.cardTitle}>{p.title}</h3>
            <div style={styles.stat}>{p.stat}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <>
      <section id="contact" style={styles.ctaSection}>
        <h2 style={{ fontSize: 42, marginBottom: 20 }}>
          Let’s Build Something Massive.
        </h2>

        <div style={{ maxWidth: 600, margin: "40px auto" }}>
          <LeadForm source="landing" />
        </div>

        <div style={{ marginTop: 40 }}>
          <a href="mailto:juan.oddone@jmfullstack.lat" style={styles.cta}>
            email us
          </a>
        </div>
      </section>
    </>
  );
}

const styles = {
  wrapper: {
    minHeight: "100vh",
    background: "#0b0b12",
    color: "white",
    fontFamily: "Inter, sans-serif",
    overflow: "hidden",
    position: "relative",
  },

  bgWrapper: {
    position: "fixed",
    inset: 0,
    zIndex: 0,
    overflow: "hidden",
  },

  gradientOrb1: {
    position: "absolute",
    width: 600,
    height: 600,
    background: "radial-gradient(circle, #6c5ce7, transparent 70%)",
    filter: "blur(120px)",
    top: "-100px",
    left: "-100px",
    animation: "float1 12s infinite alternate ease-in-out",
  },

  gradientOrb2: {
    position: "absolute",
    width: 500,
    height: 500,
    background: "radial-gradient(circle, #00d2ff, transparent 70%)",
    filter: "blur(120px)",
    bottom: "-100px",
    right: "-100px",
    animation: "float2 15s infinite alternate ease-in-out",
  },

  hero: {
    padding: "180px 20px 100px",
    textAlign: "center",
    position: "relative",
    zIndex: 1,
  },

 title: {
  fontSize: "clamp(36px, 8vw, 72px)",
  lineHeight: 1.1,
  fontWeight: 800,
},

  gradientText: {
    background: "linear-gradient(90deg, #6c5ce7, #00d2ff)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  },

subtitle: {
  fontSize: "clamp(16px, 3vw, 22px)",
  opacity: 0.8,
  marginTop: 20,
  marginBottom: 40,
  padding: "0 10px",
},

  cta: {
    background: "linear-gradient(90deg, #6c5ce7, #00d2ff)",
    padding: "14px 32px",
    borderRadius: 12,
    color: "white",
    textDecoration: "none",
    fontWeight: 600,
    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
  },

  gridSection: {
    padding: "80px 20px",
    maxWidth: 1200,
    margin: "0 auto",
    position: "relative",
    zIndex: 1,
  },

 grid: {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: 24,
},

  card: {
    position: "relative",
    padding: "clamp(100px, 15vw, 180px) 20px 80px",
    borderRadius: 20,
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(20px)",
    border: "1px solid rgba(255,255,255,0.1)",
    transition: "all 0.4s ease",
    overflow: "hidden",
    
  },

  cardGlow: {
    position: "absolute",
    width: 200,
    height: 200,
    background: "radial-gradient(circle, rgba(108,92,231,0.5), transparent 70%)",
    top: -50,
    right: -50,
    filter: "blur(60px)",
  },

  tag: {
    fontSize: 12,
    opacity: 0.6,
  },

  cardTitle: {
    fontSize: 22,
    marginTop: 10,
  },

  stat: {
    marginTop: 20,
    fontWeight: 600,
    fontSize: 14,
    opacity: 0.8,
  },

  ctaSection: {
    padding: "120px 20px",
    textAlign: "center",
    position: "relative",
    zIndex: 1,
  },
  section: {
  padding: "140px 32px",
},

container: {
  maxWidth: 1300,
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 80,
  alignItems: "center",
},

left: {
  display: "flex",
  flexDirection: "column",
},

tag: {
  fontSize: 12,
  letterSpacing: 2,
  opacity: 0.5,
  marginBottom: 20,
},

title: {
  fontSize: 42,
  lineHeight: 1.2,
  marginBottom: 24,
},

text: {
  fontSize: 18,
  opacity: 0.7,
  marginBottom: 40,
},

metrics: {
  display: "flex",
  gap: 20,
},

metricCard: {
  padding: "20px 30px",
  borderRadius: 20,
  background: "rgba(255,255,255,0.05)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255,255,255,0.08)",
},

metricNumber: {
  fontSize: 28,
  fontWeight: 700,
  background: "linear-gradient(90deg,#6C63FF,#00D4FF)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
},

metricLabel: {
  fontSize: 14,
  opacity: 0.6,
},

right: {
  display: "flex",
  justifyContent: "center",
},

phone: {
  width: 300,
  height: 600,
  borderRadius: 40,
  padding: 12,
  background: "linear-gradient(145deg,#111,#000)",
  boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
  position: "relative",
},

phoneScreen: {
  width: "100%",
  height: "100%",
  borderRadius: 30,
  background: "linear-gradient(180deg,#0f172a,#020617)",
  padding: 20,
  display: "flex",
  flexDirection: "column",
  gap: 20,
},

appHeader: {
  fontWeight: 700,
  fontSize: 18,
  marginBottom: 20,
},

appCard: {
  padding: 20,
  borderRadius: 20,
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.08)",
  fontSize: 14,
}
};
