"use client";

export default function Home() {
  return (
    <main className="page">

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Launch Your SaaS <br />
            <span className="gradient">In 30–45 Days</span>
          </h1>

          <p>
            I help non-technical founders turn ideas into real,
            scalable MVPs — fast. Web, Mobile, AI-powered if needed.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">
              Start Your MVP
            </a>

            <a href="#process" className="btn-secondary">
              See How It Works
            </a>
          </div>
        </div>

        <div className="hero-glow"></div>
      </section>

      {/* WHAT I BUILD */}
      <section className="section">
        <h2 className="section-title">
          What I Build
        </h2>

        <div className="grid">
          <div className="card">SaaS Platforms</div>
          <div className="card">AI-Powered Tools</div>
          <div className="card">Marketplaces</div>
          <div className="card">Internal Systems</div>
          <div className="card">Creator Platforms</div>
          <div className="card">Web & Mobile Apps</div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="section dark">
        <h2 className="section-title">
          Who This Is For
        </h2>

        <div className="text-block">
          <p>
            ✔ You have a clear idea  
            ✔ You want to launch fast  
            ✔ You don’t want a corporate dev team  
            ✔ You want clarity, speed and execution  
          </p>

          <p className="muted">
            If you're still “exploring options”, this is not for you.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="section">
        <h2 className="section-title">
          How It Works
        </h2>

        <div className="steps">
          <div className="step">
            <h3>1. Strategy Call</h3>
            <p>We define scope, features and timeline.</p>
          </div>

          <div className="step">
            <h3>2. Fixed Proposal</h3>
            <p>50% upfront. Clear deliverables. No surprises.</p>
          </div>

          <div className="step">
            <h3>3. Build & Launch</h3>
            <p>4–6 weeks. Clean, scalable, production-ready MVP.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="cta">
        <h2>
          Let’s Build Something That Ships.
        </h2>

        <p className="muted">
          Crypto, Stripe or international transfer accepted.
        </p>

        <a
          href="mailto:juan.oddone@jmfullstack.lat"
          className="btn-primary large"
        >
          Book Your MVP Call
        </a>
      </section>

    </main>
  );
}
