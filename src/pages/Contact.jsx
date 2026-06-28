import React from 'react';
import { GLOBAL } from '../data/content';
import FadeIn from '../components/FadeIn';

export default function Contact() {
  return (
    <main className="main-content">
      <section className="section" style={{ paddingBottom: '160px' }}>
        <div className="container grid-2">
          <FadeIn>
            <span className="eyebrow">Get in touch</span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>Ready to build?</h1>
            <p style={{ maxWidth: '500px', marginBottom: '32px' }}>
              Whether you have a fully formed RFP or just a complex operational problem, we are ready to engineer the solution. 
            </p>
            <p style={{ maxWidth: '500px', color: 'var(--slate-dark)' }}>
              Reach out to our leadership team directly. We typically respond within 1 business day to schedule a technical alignment call.
            </p>
            
            <div style={{ marginTop: '48px' }}>
              <div className="contact-item">
                <span className="contact-label">Direct Email</span>
                <span className="contact-value" style={{ color: 'var(--blue)' }}>{GLOBAL.email}</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">Headquarters</span>
                <span className="contact-value">Bangalore, India</span>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={200}>
            <div className="contact-box">
              <h3 style={{ marginBottom: '32px' }}>Start a Conversation</h3>
              
              {/* Replace YOUR_FORM_ID with the actual Formspree form ID */}
              <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label htmlFor="name" style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '0.9rem' }}>Full Name</label>
                  <input type="text" id="name" name="name" required style={{ width: '100%', padding: '12px', border: '1px solid var(--border)', borderRadius: '4px', fontSize: '1rem' }} />
                </div>
                
                <div>
                  <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '0.9rem' }}>Email Address</label>
                  <input type="email" id="email" name="email" required style={{ width: '100%', padding: '12px', border: '1px solid var(--border)', borderRadius: '4px', fontSize: '1rem' }} />
                </div>
                
                <div>
                  <label htmlFor="message" style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '0.9rem' }}>How can we help?</label>
                  <textarea id="message" name="message" rows="5" required style={{ width: '100%', padding: '12px', border: '1px solid var(--border)', borderRadius: '4px', fontSize: '1rem', resize: 'vertical' }}></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '12px' }}>
                  Send Message
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
