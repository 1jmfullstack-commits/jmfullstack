"use client";

export default function Home() {
  return (
    <main className="page">

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Build Your MVP <br />
            <span className="gradient">Without Bureaucracy</span>
          </h1>

          <p>
            We design and develop high-quality MVPs for founders at any stage — 
            from idea validation to scalable product architecture.
          </p>

          <div className="hero-buttons">
            <a href="#stages" className="btn-primary">
              See Where You Fit
            </a>

            <a href="#process" className="btn-secondary">
              How We Work
            </a>
          </div>
        </div>

        <div className="hero-glow"></div>
      </section>

      {/* TWO PATHS */}
      <section id="stages" className="section">
        <h2 className="section-title">
          Where Is Your Project Today?
        </h2>

        <div className="grid">

          <div className="card">
            <h3>Stage A — Idea to MVP</h3>
            <p>
              You have a clear concept and want to launch fast.
              We build a production-ready MVP in 30–45 days
              so you can validate and get real users.
            </p>
          </div>

          <div className="card">
            <h3>Stage B — Scale & Rebuild</h3>
            <p>
              You already have something running — but it’s messy,
              unstable or not scalable. We restructure and rebuild
              your system with clean architecture and solid foundations.
            </p>
          </div>

        </div>
      </section>

      {/* WHAT WE DELIVER */}
      <section className="section dark">
        <h2 className="section-title">
          What We Deliver
        </h2>

        <div className="grid">
          <div className="card">Clean, Maintainable Code</div>
          <div className="card">Scalable Backend Architecture</div>
          <div className="card">Proper Auth & Role Systems</div>
          <div className="card">Payment Integration (Stripe, etc.)</div>
          <div className="card">Production Deployment</div>
          <div className="card">Technical Documentation</div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="section">
        <h2 className="section-title">
          This Is For Founders Who
        </h2>

        <div className="text-block">
          <p>
            ✔ Have clarity and want execution  
            ✔ Value speed over corporate process  
            ✔ Want technical quality without enterprise pricing  
            ✔ Prefer working with an agile team, not bureaucracy  
          </p>

          <p className="muted">
            If you are still “exploring ideas” without commitment, 
            we are probably not the right fit.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="section dark">
        <h2 className="section-title">
          How We Work
        </h2>

        <div className="steps">
          <div className="step">
            <h3>1. Strategy Call</h3>
            <p>We define scope, goals and timeline clearly.</p>
          </div>

          <div className="step">
            <h3>2. Fixed Proposal</h3>
            <p>Clear deliverables. 50% upfront. No surprises.</p>
          </div>

          <div className="step">
            <h3>3. Build & Launch</h3>
            <p>Fast execution. Clean architecture. Production-ready.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="cta">
        <h2>
          Ready to Build the Right Way?
        </h2>

        <p className="muted">
          Crypto, Stripe or international transfer accepted.
        </p>

        <a
          href="mailto:juan.oddone@jmfullstack.lat"
          className="btn-primary large"
        >
          Start the Conversation
        </a>
      </section>

    </main>
  );
}
