import React from 'react';
import { Link } from 'react-router-dom';
import { ACCELERATORS } from '../data/content';
import FadeIn from '../components/FadeIn';

export default function Accelerators() {
  return (
    <div className="main-content">
      <section className="section section-light">
        <div className="container">
          <FadeIn>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <span className="eyebrow">Products</span>
              <h1>Our Accelerators</h1>
              <p className="mt-4" style={{ fontSize: '1.25rem' }}>
                Pre-built AI solutions designed to deploy rapidly and solve complex industry problems.
              </p>
            </div>
          </FadeIn>
          
          <div className="mt-16" style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {ACCELERATORS.map((accel, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className="card">
                  <div className="card-icon" style={{ marginBottom: '16px' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                    </svg>
                  </div>
                  <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>{accel.title}</h2>
                  <p style={{ fontSize: '1.125rem' }}>{accel.description}</p>
                  <div className="mt-4">
                    {accel.title === 'StudyEdge' ? (
                      <Link to="/contact" className="btn btn-primary">
                        Contact us to setup a demo
                      </Link>
                    ) : (
                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--off-white)', padding: '10px 16px', borderRadius: '4px', border: '1px solid var(--border)', color: 'var(--slate-dark)', fontWeight: '600', fontSize: '0.95rem' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        In the making
                      </div>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
