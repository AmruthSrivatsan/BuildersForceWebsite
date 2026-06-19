import React, { useEffect } from 'react';
import { WORK } from '../data/content';

export default function Work() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    setTimeout(() => {
      elements.forEach(el => el.classList.add('active'));
    }, 100);
  }, []);

  return (
    <main className="main-content">
      <section className="section" style={{ paddingBottom: '160px' }}>
        <div className="container">
          <div className="reveal">
            <span className="eyebrow">Selected Work</span>
            <h1>Impact, Deployed.</h1>
            <p style={{ maxWidth: '700px', marginBottom: '64px', fontSize: '1.25rem' }}>
              We partner with organizations ranging from government agencies to enterprise SaaS platforms to deliver critical technology infrastructure.
            </p>
          </div>

          <div className="grid-2 reveal">
            {WORK.map((item, idx) => (
              <div key={idx} className="work-card">
                <div className="work-card-content">
                  <span className="work-tag">{item.tag}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  
                  {item.impact && (
                    <div className="impact-metrics">
                      {item.impact.map((imp, i) => (
                        <div key={i} className="impact-item">
                          <strong>{imp.metric}</strong>
                          <span>{imp.label}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div style={{ marginTop: 'auto' }}>
                    {item.isProprietary ? (
                      <span className="work-card-link" style={{ color: 'var(--slate)' }}>
                        {item.linkText}
                      </span>
                    ) : (
                      <a href={item.link} target="_blank" rel="noreferrer" className="work-card-link">
                        {item.linkText}
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
