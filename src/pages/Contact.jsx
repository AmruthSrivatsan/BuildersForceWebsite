import React from 'react';
import { GLOBAL } from '../data/content';
import FadeIn from '../components/FadeIn';

export default function Contact() {
  return (
    <main className="main-content">
      <section className="section" style={{ paddingBottom: '160px' }}>
        <div className="container" style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <FadeIn>
            <span className="eyebrow">Get in touch</span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>Ready to build?</h1>
            <p style={{ marginBottom: '32px', fontSize: '1.125rem' }}>
              Whether you have a fully formed RFP or just a complex operational problem, we are ready to engineer the solution. 
            </p>
            <p style={{ color: 'var(--slate-dark)', fontSize: '1.125rem' }}>
              Reach out to our leadership team directly. We typically respond within 1 business day to schedule a technical alignment call.
            </p>
            
            <div style={{ marginTop: '48px', padding: '40px', background: 'var(--off-white)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', textAlign: 'left' }}>
              <div className="contact-item" style={{ marginBottom: '32px' }}>
                <span className="contact-label" style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--slate-dark)' }}>Direct Email</span>
                <a href={`mailto:${GLOBAL.email}`} className="contact-value" style={{ color: 'var(--blue)', fontSize: '1.5rem', textDecoration: 'none', fontWeight: '500' }}>
                  {GLOBAL.email}
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-label" style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--slate-dark)' }}>Headquarters</span>
                <span className="contact-value" style={{ fontSize: '1.25rem' }}>Bangalore, India</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
