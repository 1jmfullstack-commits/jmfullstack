"use client";

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
      <PersonalBrand />
      <Projects />
      <CTA />
    </div>
  );
}

/* ---------------- BACKGROUND ---------------- */

function AnimatedBackground() {
  return (
    <div style={styles.bgWrapper}>
      <div style={styles.gradientOrb1} />
      <div style={styles.gradientOrb2} />
    </div>
  );
}

/* ---------------- HERO ---------------- */

function Hero() {
  return (
    <section style={styles.hero}>
      <h1 style={styles.heroTitle}>
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

/* ---------------- PERSONAL BRAND ---------------- */

function PersonalBrand() {
  return (
    <section style={styles.pbWrapper}>
      <div style={styles.pbContainer}>
        <div>
          <span style={styles.pbLabel}>CASE STUDY</span>

          <h2 style={styles.pbTitle}>Vamo Nene Digital Platform</h2>

          <p style={styles.pbDescription}>
            We built the complete premium access portal, automation system,
            and high-conversion onboarding architecture for vamonene.com.
          </p>

          <div style={styles.pbMetrics}>
            <div style={styles.metricBox}>
              <h3 style={styles.metricNumber}>100–120</h3>
              <p style={styles.metricText}>New Users / Day</p>
            </div>

            <div style={styles.metricBox}>
              <h3 style={styles.metricNumber}>+212%</h3>
              <p style={styles.metricText}>Conversion Growth</p>
            </div>
          </div>
        </div>

        <div style={styles.phoneWrapper}>
          <div style={styles.phone}>
            <div style={styles.phoneScreen}>
              <div style={styles.appHeader}>Vamo Nene</div>
              <div style={styles.appCard}>Premium Portal</div>
              <div style={styles.appCard}>Exclusive Content</div>
              <div style={styles.appCard}>Private Community</div>
              <div style={styles.appCard}>Automated Access</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROJECTS ---------------- */

function Projects() {
  return (
    <section style={styles.gridSection}>
      <div style={styles.grid}>
        {projects.map((p, i) => (
          <div key={i} style={styles.card}>
            <div style={styles.cardGlow} />
            <span style={styles.cardTag}>{p.tag}</span>
            <h3 style={styles.cardTitle}>{p.title}</h3>
            <div style={styles.stat}>{p.stat}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */

function CTA() {
  return (
    <section id="contact" style={styles.ctaSection}>
      <h2 style={styles.ctaTitle}>Let’s Build Something Massive.</h2>

      <div style={{ maxWidth: 600, margin: "40px auto" }}>
        <LeadForm source="landing" />
      </div>

      <a href="mailto:juan.oddone@jmfullstack.lat" style={styles.cta}>
        email us
      </a>
    </section>
  );
}

/* ---------------- STYLES ---------------- */

const styles = {
  wrapper: {
    minHeight: "100vh",
    background: "#0b0b12",
    color: "white",
    fontFamily: "Inter, sans-serif",
    position: "relative",
    overflowX: "hidden",
  },

  bgWrapper: {
    position: "fixed",
    inset: 0,
    zIndex: 0,
  },

  gradientOrb1: {
    position: "absolute",
    width: 600,
    height: 600,
    background: "radial-gradient(circle, #6c5ce7, transparent 70%)",
    filter: "blur(120px)",
    top: "-100px",
    left: "-100px",
  },

  gradientOrb2: {
    position: "absolute",
    width: 500,
    height: 500,
    background: "radial-gradient(circle, #00d2ff, transparent 70%)",
    filter: "blur(120px)",
    bottom: "-100px",
    right: "-100px",
  },

  hero: {
    padding: "180px 20px 100px",
    textAlign: "center",
    position: "relative",
    zIndex: 1,
  },

  heroTitle: {
    fontSize: "clamp(36px, 8vw, 72px)",
    fontWeight: 800,
    lineHeight: 1.1,
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
  },

  cta: {
    display: "inline-block",
    marginTop: 20,
    background: "linear-gradient(90deg, #6c5ce7, #00d2ff)",
    padding: "14px 32px",
    borderRadius: 12,
    color: "white",
    textDecoration: "none",
    fontWeight: 600,
  },

  pbWrapper: {
    padding: "160px 20px",
    background: "#06070f",
    position: "relative",
    zIndex: 1,
  },

  pbContainer: {
    maxWidth: 1200,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: 60,
    alignItems: "center",
  },

  pbLabel: {
    fontSize: 12,
    letterSpacing: 2,
    opacity: 0.5,
  },

  pbTitle: {
    fontSize: "clamp(28px, 4vw, 48px)",
    margin: "20px 0",
  },

  pbDescription: {
    fontSize: 18,
    opacity: 0.7,
    marginBottom: 40,
  },

  pbMetrics: {
    display: "flex",
    gap: 30,
    flexWrap: "wrap",
  },

  metricBox: {
    background: "rgba(255,255,255,0.05)",
    padding: "20px 30px",
    borderRadius: 16,
  },

  metricNumber: {
    fontSize: 28,
    fontWeight: 700,
  },

  metricText: {
    opacity: 0.6,
  },

  phoneWrapper: {
    display: "flex",
    justifyContent: "center",
  },

  phone: {
    width: 300,
    height: 600,
    borderRadius: 40,
    padding: 12,
    background: "#111",
    boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
  },

  phoneScreen: {
    width: "100%",
    height: "100%",
    borderRadius: 30,
    background: "#0f172a",
    padding: 20,
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },

  appHeader: {
    fontWeight: 700,
  },

  appCard: {
    padding: 15,
    borderRadius: 16,
    background: "rgba(255,255,255,0.08)",
  },

  gridSection: {
    padding: "100px 20px",
    position: "relative",
    zIndex: 1,
  },

  grid: {
    maxWidth: 1200,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 24,
  },

  card: {
    position: "relative",
    padding: "120px 20px 60px",
    borderRadius: 20,
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(20px)",
  },

  cardGlow: {
    position: "absolute",
    width: 200,
    height: 200,
    background: "radial-gradient(circle, rgba(108,92,231,0.4), transparent 70%)",
    top: -50,
    right: -50,
    filter: "blur(60px)",
  },

  cardTag: {
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

  ctaTitle: {
    fontSize: "clamp(28px, 5vw, 42px)",
  },
};
