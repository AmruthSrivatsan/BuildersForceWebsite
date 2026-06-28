import React from 'react';
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
                    <a href={accel.demoLink} className="btn btn-primary">
                      Demo Link
                    </a>
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
