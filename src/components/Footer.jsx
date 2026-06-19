import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GLOBAL, NAV_LINKS } from '../data/content';

export default function Footer() {
  const location = useLocation();
  const hideWavePages = ['/', '/services'];
  const shouldHideWave = hideWavePages.includes(location.pathname);

  return (
    <div style={{ marginTop: shouldHideWave ? 0 : '-8.33vw', position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column' }}>
      {!shouldHideWave && (
        <div style={{ width: '100%', lineHeight: 0 }}>
          <svg className="wave-transition" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ width: '100%', display: 'block' }}>
            <path fill="var(--navy)" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      )}
      <footer className="footer" style={{ marginTop: 0, paddingTop: '32px' }}>
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand brand-text" style={{ marginBottom: '8px', fontSize: '1.25rem' }}>
              BUILDERS<span>FORCE</span> <span style={{ textTransform: 'none', fontWeight: 400, color: 'var(--slate)' }}>AI</span>
            </div>
            <p style={{ maxWidth: '300px', color: 'var(--slate)', marginBottom: '16px', fontSize: '0.9rem' }}>
              Engineering reliable, production-grade AI systems for the modern enterprise.
            </p>
            <a href={`mailto:${GLOBAL.email}`} className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.875rem' }}>
              Start a Conversation
            </a>
          </div>

          <div style={{ textAlign: 'right' }}>
            <div className="footer-links" style={{ marginTop: '16px' }}>
              {NAV_LINKS.map(link => (
                <Link key={link.path} to={link.path}>{link.label}</Link>
              ))}
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
    </div>
  );
}
