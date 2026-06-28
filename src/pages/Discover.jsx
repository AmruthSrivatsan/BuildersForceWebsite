import React from 'react';
import { DISCOVER } from '../data/content';
import FadeIn from '../components/FadeIn';

export default function Discover() {
  return (
    <div className="main-content">
      <section className="section section-light">
        <div className="container">
          <FadeIn>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <span className="eyebrow">What we do</span>
              <h1>{DISCOVER.title}</h1>
              <p className="mt-4" style={{ fontSize: '1.25rem' }}>{DISCOVER.description}</p>
              
              <div className="grid-2 mt-8" style={{ textAlign: 'left' }}>
                {DISCOVER.points.map((point, index) => (
                  <div key={index} className="card">
                    <div className="card-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 16 16 12 12 8"></polyline>
                        <line x1="8" y1="12" x2="16" y2="12"></line>
                      </svg>
                    </div>
                    <h3>{point.title}</h3>
                    <p style={{ fontSize: '0.95rem' }}>{point.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
