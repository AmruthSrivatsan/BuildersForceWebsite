import React, { useEffect } from 'react';
import { PILLARS } from '../data/content';

export default function About() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    setTimeout(() => {
      elements.forEach(el => el.classList.add('active'));
    }, 100);
  }, []);

  return (
    <main className="main-content">
      <section className="section">
        <div className="container">
          <div className="reveal">
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>We engineer the systems<br/>others only prototype.</h1>
          </div>
          
          <div className="grid-2 mt-16 reveal">
            <div>
              <p className="mb-8">
                <strong><span className="brand-text">BUILDERS<span>FORCE</span></span> was founded on a simple observation:</strong> the gap between an impressive AI demonstration and a reliable, secure production system is vast.
              </p>
              <p className="mb-8">
                Many agencies can wire together an API call. Very few can design the zero-trust architecture, robust data pipelines, and deterministic fallback mechanisms required by enterprise procurement and operations teams.
              </p>
              <p>
                We bridge that gap. We combine decades of enterprise leadership and rigorous software engineering to deliver systems that align perfectly with business goals—and operate flawlessly at scale.
              </p>
            </div>
            
            <div className="contact-box" style={{ padding: '48px 40px' }}>
              <h3 style={{ marginBottom: '24px', color: 'var(--navy)' }}>Operating Principles</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '24px', padding: 0 }}>
                <li>
                  <strong style={{ display: 'block', color: 'var(--blue)', marginBottom: '4px' }}>Pragmatic Engineering</strong>
                  <span style={{ color: 'var(--slate-dark)', fontSize: '0.95rem' }}>We choose stable technology over hype. If a simple heuristic works better than a neural network, we use the heuristic.</span>
                </li>
                <li>
                  <strong style={{ display: 'block', color: 'var(--blue)', marginBottom: '4px' }}>Obsessive Security</strong>
                  <span style={{ color: 'var(--slate-dark)', fontSize: '0.95rem' }}>Enterprise data is sacred. We build with zero-trust architecture, VPC deployments, and strict RBAC from day one.</span>
                </li>
                <li>
                  <strong style={{ display: 'block', color: 'var(--blue)', marginBottom: '4px' }}>Transparent Delivery</strong>
                  <span style={{ color: 'var(--slate-dark)', fontSize: '0.95rem' }}>No black boxes. We hand over fully documented, cleanly tested systems that your internal teams can actually maintain.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="reveal mb-16">
            <span className="eyebrow">The DNA of Delivery</span>
            <h2>Our Core Pillars</h2>
          </div>
          
          <div className="grid-3 reveal">
            {PILLARS.map(pillar => (
              <div key={pillar.num} className="card">
                <div className="metric-number" style={{ fontSize: '1.5rem', marginBottom: '16px' }}>{pillar.num}</div>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
