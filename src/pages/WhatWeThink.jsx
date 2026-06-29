import React from 'react';
import FadeIn from '../components/FadeIn';

export default function WhatWeThink() {
  return (
    <div className="main-content">
      <section className="section section-light">
        <div className="container">
          <FadeIn>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '64px' }}>
              <span className="eyebrow">Insights</span>
              <h1>What We Think</h1>
              <p className="mt-4" style={{ fontSize: '1.25rem' }}>
                Thoughts and perspectives from our team.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={200}>
            <div style={{
              background: 'var(--off-white)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
              padding: '80px 32px',
              textAlign: 'center',
              marginTop: '48px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                background: 'var(--blue-light)',
                color: 'var(--blue)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px'
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
              </div>
              <h2 style={{ fontSize: '2.25rem', marginBottom: '16px', color: 'var(--navy)' }}>Coming soon.</h2>
              <p style={{ fontSize: '1.125rem', color: 'var(--slate-dark)', maxWidth: '500px' }}>
                We're currently busy building for our clients. We'll be sharing our thoughts and experiences here soon.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
