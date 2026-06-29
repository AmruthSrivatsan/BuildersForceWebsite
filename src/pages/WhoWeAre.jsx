import React, { useEffect } from 'react';
import { TEAM } from '../data/content';
import FadeIn from '../components/FadeIn';

export default function WhoWeAre() {
  return (
    <main className="main-content">
      <section className="section section-light" style={{ paddingBottom: '160px' }}>
        <div className="container">
          <FadeIn>
            <span className="eyebrow">Who we are</span>
            <h1>The minds behind <span className="brand-text">BUILDERS<span>FORCE</span></span>.</h1>
            <p style={{ maxWidth: '700px', marginBottom: '64px', fontSize: '1.25rem' }}>
              We are a team of builders, solvers, and partners who believe in execution over intent. Led by engineers with decades of experience, we combine empathy-led problem solving with deep technical expertise to deliver outcomes that actually matter.
            </p>
          </FadeIn>

          <div className="grid-2">
            {TEAM.map((member, idx) => (
              <FadeIn key={idx} delay={idx * 100}>
                <div className="team-card">
                  <img src={member.image} alt={member.name} className="team-card-img" />
                  <div className="team-card-info">
                    <h3>{member.name}</h3>
                    <div className="team-role">{member.role}</div>
                    <p style={{ fontSize: '0.95rem', color: 'var(--slate-dark)', marginBottom: '24px' }}>{member.bio}</p>
                    <div style={{ display: 'flex', gap: '16px' }}>
                      <a href={member.linkedin} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: '8px 16px', fontSize: '0.875rem' }}>
                        LinkedIn
                      </a>
                      <a href={`mailto:${member.email}`} className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.875rem' }}>
                        Email
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
