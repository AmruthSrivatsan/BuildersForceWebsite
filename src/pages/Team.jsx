import React, { useEffect } from 'react';
import { TEAM } from '../data/content';

export default function Team() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    setTimeout(() => {
      elements.forEach(el => el.classList.add('active'));
    }, 100);
  }, []);

  return (
    <main className="main-content">
      <section className="section section-light" style={{ paddingBottom: '160px' }}>
        <div className="container">
          <div className="reveal">
            <span className="eyebrow">Leadership</span>
            <h1>The minds behind <span className="brand-text">BUILDERS<span>FORCE</span></span>.</h1>
            <p style={{ maxWidth: '700px', marginBottom: '64px', fontSize: '1.25rem' }}>
              Led by engineers with a track record of scaling complex systems. We combine deep technical expertise with pragmatic business execution.
            </p>
          </div>

          <div className="grid-2 reveal">
            {TEAM.map((member, idx) => (
              <div key={idx} className="team-card">
                <img src={member.image} alt={member.name} className="team-card-img" />
                <div className="team-card-info">
                  <h3>{member.name}</h3>
                  <div className="team-role">{member.role}</div>
                  <p style={{ fontSize: '0.95rem', color: 'var(--slate-dark)', marginBottom: '24px' }}>{member.bio}</p>
                  <a href={member.linkedin} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: '8px 16px', fontSize: '0.875rem' }}>
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
