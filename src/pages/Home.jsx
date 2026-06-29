import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GLOBAL } from '../data/content';
import FadeIn from '../components/FadeIn';

const PANELS = [
  {
    label: 'Builder Mindset',
    points: [
      { title: 'Ownership over advisory', desc: 'We\'re in it with you, not watching from the side.' },
      { title: 'Execution over intent', desc: 'Good plans mean nothing without delivery.' },
      { title: 'Outcomes over activity', desc: 'We measure by results, not effort reported.' },
      { title: 'We create, solve & deliver', desc: 'Builders, solvers, producers, partners.' },
    ],
  },
  {
    label: 'Force Multiplier',
    points: [
      { title: 'Empathy-led problem solving', desc: 'We understand the human before the problem.' },
      { title: 'Compelling ROI', desc: 'Every engagement should pay for itself, fast.' },
      { title: 'Seamless integration', desc: 'Fits into your world, not the other way around.' },
      { title: 'Relentless momentum', desc: 'We don\'t slow down after kickoff.' },
    ],
  },
  {
    label: 'AI Acceleration',
    points: [
      { title: 'AI-powered acceleration', desc: 'Speed with intent, not automation for its own sake.' },
      { title: 'People + Process + Technology', desc: 'The intersection where transformation happens.' },
      { title: 'Solvers who take responsibility', desc: 'We own the outcome, not just the output.' },
      { title: 'Producers who deliver', desc: 'Work ships, value lands, impact is felt.' },
    ],
  },
];

export default function Home() {
  const [active, setActive] = useState(0);

  return (
    <main className="main-content">
      {/* ── HERO ── */}
      <section className="hero">
        <div className="container hero-content">
          <FadeIn>
            <h1>We build AI that lands in production.</h1>
            <p>
              The gap between an AI prototype and a real-world system is where most teams get stuck.{' '}
              <span className="brand-text">BUILDERS<span>FORCE</span></span> bridges that gap. 
              We deliver robust, production-ready software—with ownership, not advisory. 
              No handoffs. No excuses.
            </p>
            <div className="hero-actions">
              <a href={`mailto:${GLOBAL.email}`} className="btn btn-primary">
                Build with us
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px' }}><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
              <Link to="/case-studies" className="btn btn-outline">See our work</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── WHAT DRIVES US ── */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <span className="eyebrow">What drives us</span>
              <h2 style={{ maxWidth: '640px', margin: '0 auto 1rem' }}>
                The bridge between prototypes and production.
              </h2>
              <p style={{ maxWidth: '600px', margin: '0 auto' }}>
                Many can build a demo; few can engineer a secure, compliant, and reliable system
                that operates flawlessly at scale.
              </p>
            </div>

            {/* Tab strip */}
            <div className="home-tabs-wrapper">
              <div className="home-tabs">
                {PANELS.map((panel, i) => (
                  <button
                    key={i}
                    className={`home-tab-btn${active === i ? ' home-tab-btn--active' : ''}`}
                    onClick={() => setActive(i)}
                  >
                    {panel.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Panel content */}
            <div className="home-tab-panel">
              {PANELS[active].points.map((pt, i) => (
                <div key={i} className="home-tab-card" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="home-tab-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div className="home-tab-card-content">
                    <h3>{pt.title}</h3>
                    <p>{pt.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Metrics strip */}
            <div className="home-metrics">
              <div className="home-metric-item">
                <div className="metric-number">100%</div>
                <p style={{ color: 'var(--slate-dark)', fontSize: '0.95rem', marginBottom: 0 }}>
                  Adoption in critical law enforcement systems.
                </p>
              </div>
              <div className="home-metric-divider" />
              <div className="home-metric-item">
                <div className="metric-number">&lt;1%</div>
                <p style={{ color: 'var(--slate-dark)', fontSize: '0.95rem', marginBottom: 0 }}>
                  Error rate in our proprietary data extraction pipelines.
                </p>
              </div>
              <div className="home-metric-divider" />
              <div className="home-metric-item">
                <Link to="/what-we-think" className="btn btn-outline" style={{ fontSize: '0.95rem' }}>
                  Read our philosophy →
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <div style={{ width: '100%', lineHeight: 0, marginTop: '64px' }}>
        <svg className="wave-transition" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ width: '100%', display: 'block' }}>
          <path fill="var(--navy)" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </main>
  );
}
