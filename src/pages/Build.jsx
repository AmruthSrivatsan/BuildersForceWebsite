import React from 'react';
import { BUILD } from '../data/content';
import FadeIn from '../components/FadeIn';

export default function Build() {
  return (
    <div className="main-content">
      <section className="section section-light">
        <div className="container">
          <FadeIn>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <span className="eyebrow">What we do</span>
              <h1>{BUILD.title}</h1>
              <p className="mt-4" style={{ fontSize: '1.25rem' }}>{BUILD.description}</p>
              
              <div className="grid-2 mt-8" style={{ textAlign: 'left' }}>
                {BUILD.points.map((point, index) => (
                  <div key={index} className="card">
                    <div className="card-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                        <polyline points="2 17 12 22 22 17"></polyline>
                        <polyline points="2 12 12 17 22 12"></polyline>
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
