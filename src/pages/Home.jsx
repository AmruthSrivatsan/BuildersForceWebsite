import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GLOBAL, PILLARS, SERVICES } from '../data/content';
import heroBgImage from '../assets/cherry-hero-bg.jpg';

export default function Home() {
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    // Preload image so we can fade it in cleanly
    const img = new Image();
    img.src = heroBgImage;
    img.onload = () => setBgLoaded(true);

    const elements = document.querySelectorAll('.reveal');
    setTimeout(() => {
      elements.forEach(el => el.classList.add('active'));
    }, 100);
  }, []);

  return (
    <main className="main-content">
      <section className="hero">
        <div 
          className="hero-bg" 
          style={{ 
            backgroundImage: `url(${heroBgImage})`,
            opacity: bgLoaded ? 1 : 0,
            transition: 'opacity 0.8s ease'
          }}
        ></div>
        <div className="container hero-content">
          <h1>We build AI that lands in production.</h1>
          <p>
            <span className="brand-text">BUILDERS<span>FORCE</span></span> partners with enterprise product and ops teams to go from problem discovery to production AI. No handoffs, no excuses. Just robust software delivery.
          </p>
          <div className="hero-actions">
            <a href={`mailto:${GLOBAL.email}`} className="btn btn-primary">
              Build with us
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px' }}><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
            <Link to="/work" className="btn btn-outline">See our work</Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className="reveal grid-2" style={{ alignItems: 'center' }}>
            <div>
              <span className="eyebrow">Why <span className="brand-text">BUILDERS<span>FORCE</span></span></span>
              <h2>The bridge between prototypes and production.</h2>
              <p>
                Many can build a demo; few can engineer a secure, compliant, and reliable system that operates flawlessly at scale. We combine deep engineering expertise with a pragmatic approach to AI integration.
              </p>
              <Link to="/about" className="btn btn-outline mt-4">Read our philosophy</Link>
            </div>
            <div className="grid-2" style={{ gap: '24px' }}>
              <div className="card card-dark" style={{ padding: '24px' }}>
                <div className="metric-number">100%</div>
                <p style={{ color: 'var(--slate)', fontSize: '0.875rem' }}>Adoption in critical law enforcement systems.</p>
              </div>
              <div className="card card-dark" style={{ padding: '24px' }}>
                <div className="metric-number">&lt;1%</div>
                <p style={{ color: 'var(--slate)', fontSize: '0.875rem' }}>Error rate in our proprietary data extraction pipelines.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ width: '100%', lineHeight: 0, marginTop: '64px' }}>
        <svg className="wave-transition" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ width: '100%', display: 'block' }}>
          <path fill="var(--navy)" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>

      <section className="section section-dark" style={{ paddingTop: '64px' }}>
        <div className="container">
          <div className="reveal">
            <span className="eyebrow" style={{ color: 'var(--white)', opacity: 0.7 }}>Our Capabilities</span>
            <h2>Enterprise AI Engineering.</h2>
          </div>
          <div className="grid-4 mt-8 reveal">
            {SERVICES.map((service, idx) => (
              <div key={idx} className="card" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '32px 24px' }}>
                <h4 style={{ color: 'var(--white)' }}>{service.title}</h4>
                <p style={{ color: 'var(--slate)', fontSize: '0.95rem' }}>{service.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 reveal" style={{ textAlign: 'center' }}>
            <Link to="/services" className="btn btn-outline" style={{ color: 'var(--white)', borderColor: 'var(--white)' }}>View all services</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
