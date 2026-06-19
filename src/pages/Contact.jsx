import React, { useEffect } from 'react';
import { GLOBAL } from '../data/content';

export default function Contact() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    setTimeout(() => {
      elements.forEach(el => el.classList.add('active'));
    }, 100);
  }, []);

  return (
    <main className="main-content">
      <section className="section" style={{ paddingBottom: '160px' }}>
        <div className="container grid-2 reveal">
          <div>
            <span className="eyebrow">Get in touch</span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>Ready to build?</h1>
            <p style={{ maxWidth: '500px', marginBottom: '32px' }}>
              Whether you have a fully formed RFP or just a complex operational problem, we are ready to engineer the solution. 
            </p>
            <p style={{ maxWidth: '500px', color: 'var(--slate-dark)' }}>
              Reach out to our leadership team directly. We typically respond within 1 business day to schedule a technical alignment call.
            </p>
          </div>
          
          <div>
            <div className="contact-box">
              <h3 style={{ marginBottom: '32px' }}>Start a Conversation</h3>
              
              <div className="contact-item">
                <span className="contact-label">Direct Email</span>
                <a href={`mailto:${GLOBAL.email}`} className="contact-value" style={{ color: 'var(--blue)' }}>{GLOBAL.email}</a>
              </div>
              
              <div className="contact-item">
                <span className="contact-label">Headquarters</span>
                <span className="contact-value">Bangalore, India</span>
              </div>
              
              <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--border)' }}>
                <p style={{ fontSize: '0.95rem', color: 'var(--slate-dark)', marginBottom: '16px' }}>
                  For enterprise procurement or formal RFP submissions, please include your timeline and security requirements.
                </p>
                <a href={`mailto:${GLOBAL.email}?subject=Enterprise Inquiry: `} className="btn btn-primary" style={{ width: '100%' }}>Send an Inquiry</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
