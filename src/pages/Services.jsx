import React, { useEffect } from 'react';
import { SERVICES } from '../data/content';

export default function Services() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    setTimeout(() => {
      elements.forEach(el => el.classList.add('active'));
    }, 100);
  }, []);

  const getIcon = (type) => {
    switch(type) {
      case 'strategy':
        return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 22 12 17 22 22 12 2"></polygon></svg>;
      case 'rag':
        return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>;
      case 'agents':
        return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>;
      case 'security':
        return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>;
      default:
        return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>;
    }
  };

  return (
    <main className="main-content">
      <section className="section">
        <div className="container">
          <div className="reveal">
            <span className="eyebrow">Our Capabilities</span>
            <h1>Full-Stack AI Solutions.</h1>
            <p style={{ maxWidth: '700px', marginBottom: '64px', fontSize: '1.25rem' }}>
              We provide end-to-end engineering services tailored to enterprise requirements, from initial architecture design to fully managed, zero-trust deployments.
            </p>
          </div>
          
          <div className="grid-2 reveal">
            {SERVICES.map((service, idx) => (
              <div key={idx} className="card">
                <div className="card-icon">
                  {getIcon(service.icon)}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container grid-2 reveal" style={{ alignItems: 'center' }}>
          <div>
            <h2>Enterprise Trust</h2>
            <p>We build systems that support secure, compliance-aware delivery. We ensure that your data remains securely within your perimeter.</p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            {['SOC 2 Environments', 'HIPAA Workflows', 'GDPR / CCPA Patterns', 'RBAC', 'End-to-End Encryption', 'Zero Trust Architecture'].map(badge => (
              <span key={badge} style={{ padding: '12px 24px', background: 'var(--navy-light)', border: '1px solid var(--border-dark)', borderRadius: '6px', fontSize: '0.95rem', fontWeight: '600' }}>
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
