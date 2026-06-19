import React from 'react';
import { Link } from 'react-router-dom';
import { GLOBAL, NAV_LINKS } from '../data/content';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand brand-text" style={{ marginBottom: '16px', fontSize: '1.25rem' }}>
              BUILDERS<span>FORCE</span> <span style={{ textTransform: 'none', fontWeight: 400, color: 'var(--slate)' }}>AI</span>
            </div>
            <p style={{ maxWidth: '300px', color: 'var(--slate)', marginBottom: '32px' }}>
              Engineering reliable, production-grade AI systems for the modern enterprise.
            </p>
            <a href={`mailto:${GLOBAL.email}`} className="btn btn-primary">
              Start a Conversation
            </a>
          </div>

          <div>
            <h4>Company</h4>
            <div className="footer-links">
              {NAV_LINKS.map(link => (
                <Link key={link.path} to={link.path}>{link.label}</Link>
              ))}
            </div>
          </div>

          <div>
            <h4>Legal & Trust</h4>
            <div className="footer-links">
              <Link to="#">Privacy Policy</Link>
              <Link to="#">Terms of Service</Link>
              <Link to="#">Security & Compliance</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p style={{ margin: 0, color: 'var(--slate)' }}>
            © {GLOBAL.year} <span className="brand-text">BUILDERS<span>FORCE</span></span>. All rights reserved.
          </p>
          <div style={{ color: 'var(--slate)' }}>
            Based in Bangalore, India
          </div>
        </div>
      </div>
    </footer>
  );
}
