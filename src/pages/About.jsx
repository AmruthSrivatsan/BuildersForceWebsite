import React, { useEffect } from 'react';
import { PILLARS } from '../data/content';
import StripeBackground from '../components/StripeBackground';

export default function About() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    setTimeout(() => {
      elements.forEach(el => el.classList.add('active'));
    }, 100);
  }, []);

  return (
    <StripeBackground>
      {(dropdown) => (
        <main className="main-content" style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', top: '96px', right: '4vw', zIndex: 100 }}>
            {dropdown}
          </div>
          <section className="section">
            <div className="container">
              <div className="reveal">
                <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'var(--white)' }}>We engineer the systems<br/>others only prototype.</h1>
              </div>
              
              <div className="grid-2 mt-16 reveal">
              <div>
                <p className="mb-8" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                  <strong><span className="brand-text">BUILDERS<span>FORCE</span></span> was founded on a simple observation:</strong> the gap between an impressive AI demonstration and a reliable, secure production system is vast.
                </p>
                <p className="mb-8" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                  Many agencies can wire together an API call. Very few can design the zero-trust architecture, robust data pipelines, and deterministic fallback mechanisms required by enterprise procurement and operations teams.
                </p>
                <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                  We bridge that gap. We combine decades of enterprise leadership and rigorous software engineering to deliver systems that align perfectly with business goals—and operate flawlessly at scale.
                </p>
              </div>
              
              <div className="contact-box" style={{ padding: '48px 40px', background: 'rgba(15, 12, 41, 0.4)', border: '1px solid rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(20px)' }}>
                <h3 style={{ marginBottom: '24px', color: 'var(--white)' }}>Operating Principles</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '24px', padding: 0 }}>
                  <li>
                    <strong style={{ display: 'block', color: 'var(--blue)', marginBottom: '4px' }}>Pragmatic Engineering</strong>
                    <span style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.95rem' }}>We choose stable technology over hype. If a simple heuristic works better than a neural network, we use the heuristic.</span>
                  </li>
                  <li>
                    <strong style={{ display: 'block', color: 'var(--blue)', marginBottom: '4px' }}>Zero-Trust Defaults</strong>
                    <span style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.95rem' }}>Security is not a final step. It is the foundation of every model we train and every pipeline we deploy.</span>
                  </li>
                  <li>
                    <strong style={{ display: 'block', color: 'var(--blue)', marginBottom: '4px' }}>Deterministic Delivery</strong>
                    <span style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.95rem' }}>We don't do endless research spirals. We define clear SLAs, strict timelines, and we ship.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section style={{ paddingBottom: '160px' }}>
          <div className="container">
            <div className="reveal">
              <h2 style={{ color: 'var(--white)' }}>Built by engineers.</h2>
            </div>
            
            <div className="grid-3 mt-16 reveal">
              {PILLARS.map((pillar, idx) => (
                <div key={idx} className="card" style={{ background: 'rgba(15, 12, 41, 0.4)', border: '1px solid rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(20px)' }}>
                  <div className="card-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                  </div>
                  <h3 style={{ color: 'var(--white)' }}>{pillar.title}</h3>
                  <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      )}
    </StripeBackground>
  );
}
