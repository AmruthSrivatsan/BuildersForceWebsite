import React from 'react';
import { BLOG_STUBS } from '../data/content';
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
                Thoughts, perspectives, and architectural insights from our engineering team.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid-3">
            {BLOG_STUBS.map((blog, index) => (
              <FadeIn key={index} delay={index * 100}>
                <a href={blog.link} className="card" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none', color: 'inherit' }}>
                  <div style={{ flex: 1 }}>
                    <span style={{ fontSize: '0.875rem', color: 'var(--blue)', fontWeight: '600', marginBottom: '12px', display: 'block' }}>
                      {blog.date}
                    </span>
                    <h3 style={{ marginBottom: '16px', fontSize: '1.5rem', lineHeight: '1.3' }}>
                      {blog.title}
                    </h3>
                    <p style={{ fontSize: '1rem', color: 'var(--slate-dark)' }}>
                      {blog.excerpt}
                    </p>
                  </div>
                  <div style={{ marginTop: '24px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--blue)', fontWeight: '600', fontSize: '0.875rem' }}>
                    Read Article
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
