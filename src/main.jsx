import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import suryanHeadshot from './assets/suryan-headshot.jpeg';
import venkatHeadshot from './assets/venkat-headshot.jpeg';
import buildersForceLogo from './assets/builders-force-logo-transparent.png';
import buildersForceMark from './assets/builders-force-logo-mark.png';

const contactEmail = 'suryan@buildersforce.ai';
const contactHref = '#contact';

const forceSections = [
  {
    key: 'builders',
    label: 'Builders',
    caption: 'Builder Mindset',
    intro: 'We move from intent to shipped value with ownership from day one.',
    points: [
      'Ownership over mere advisory',
      'Execution over pure intent',
      'Outcomes over baseline activity',
      'Builders who create value with AI',
    ],
  },
  {
    key: 'force',
    label: 'Force',
    caption: 'Force Multiplier',
    intro: 'We blend empathy, speed, and operating rhythm to multiply momentum.',
    points: [
      'Empathy-led core solutions',
      'Rapid AI-powered acceleration',
      'Exponential time-cost ROI',
      'Right blend of people, process and technology',
    ],
  },
  {
    key: 'ai',
    label: 'AI',
    caption: 'AI Acceleration',
    intro: 'We use AI as a practical production layer, not as theater.',
    points: [
      'Responsible and accountable problem solvers',
      'Producers of measurable outcomes utilising agentic AI',
      'Custom AI/ML workflows and hosting services',
      'Speed with controls, observability and ownership',
    ],
  },
];

const valueProps = [
  'Owns your problem, not just understands',
  'Builds with you, not for you',
  'Cares about outcomes, as much as you do',
];

const team = [
  {
    name: 'Suryanarayanan Ramamurthy',
    role: 'Founder, Chief Builder',
    initials: 'SR',
    image: suryanHeadshot,
    link: 'https://www.linkedin.com/in/suryan/',
  },
  {
    name: 'Venkat Sriraman',
    role: 'Co-Founder, Client Success',
    initials: 'VS',
    image: venkatHeadshot,
    link: 'https://www.linkedin.com/in/venkataramanan-sriraman-904603/',
  },
];

const processSteps = ['Discover', 'Design', 'Build', 'Test', 'Deploy'];

const proofItems = [
  {
    title: 'Client engagement 01',
    eyebrow: 'Early client',
    copy:
      'Mapped a manual operating workflow, identified automation opportunities, and shaped a practical AI delivery roadmap.',
  },
  {
    title: 'Client engagement 02',
    eyebrow: 'Early client',
    copy:
      'Built an integrated prototype layer that helped teams move faster while keeping data ownership and controls intact.',
  },
];

const serviceModels = [
  {
    title: 'Build and Integrate',
    copy: 'We connect intelligent capabilities into your current workflows so your teams stay in control.',
  },
  {
    title: 'Build, Integrate and Deploy',
    copy: 'We deploy in your environment so your data, policies and operational context remain yours.',
  },
  {
    title: 'Build, Host and Operate',
    copy: 'We operate the solution layer so your team can stay focused on the business outcome.',
  },
];

const compliance = [
  'SOC 2',
  'ISO 27001',
  'HIPAA',
  'GDPR',
  'Others on request',
];

const graphNodes = [
  { left: 10, top: 18, size: 10, shift: 0.9 },
  { left: 25, top: 12, size: 7, shift: -0.6 },
  { left: 42, top: 26, size: 12, shift: 0.4 },
  { left: 62, top: 14, size: 8, shift: -0.9 },
  { left: 80, top: 23, size: 11, shift: 0.7 },
  { left: 18, top: 48, size: 8, shift: -0.7 },
  { left: 34, top: 58, size: 13, shift: 0.8 },
  { left: 56, top: 48, size: 9, shift: -0.4 },
  { left: 73, top: 58, size: 12, shift: 0.5 },
  { left: 88, top: 46, size: 7, shift: -0.8 },
  { left: 13, top: 78, size: 12, shift: 0.6 },
  { left: 38, top: 84, size: 8, shift: -0.6 },
  { left: 58, top: 76, size: 11, shift: 0.9 },
  { left: 78, top: 82, size: 8, shift: -0.5 },
];

const graphLines = [
  { x1: 10, y1: 18, x2: 25, y2: 12 },
  { x1: 25, y1: 12, x2: 42, y2: 26 },
  { x1: 42, y1: 26, x2: 62, y2: 14 },
  { x1: 62, y1: 14, x2: 80, y2: 23 },
  { x1: 10, y1: 18, x2: 18, y2: 48 },
  { x1: 18, y1: 48, x2: 34, y2: 58 },
  { x1: 34, y1: 58, x2: 56, y2: 48 },
  { x1: 56, y1: 48, x2: 73, y2: 58 },
  { x1: 73, y1: 58, x2: 88, y2: 46 },
  { x1: 18, y1: 48, x2: 13, y2: 78 },
  { x1: 34, y1: 58, x2: 38, y2: 84 },
  { x1: 56, y1: 48, x2: 58, y2: 76 },
  { x1: 73, y1: 58, x2: 78, y2: 82 },
  { x1: 13, y1: 78, x2: 38, y2: 84 },
  { x1: 38, y1: 84, x2: 58, y2: 76 },
  { x1: 58, y1: 76, x2: 78, y2: 82 },
];

function useScrollIndex(sectionRef) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const update = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const total = Math.max(1, rect.height - window.innerHeight);
      const travelled = Math.min(Math.max(-rect.top, 0), total);
      const progress = travelled / total;
      setActive(Math.min(2, Math.round(progress * 2)));
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [sectionRef]);

  return active;
}

function GraphCloud({ position }) {
  return (
    <div
      className="graph-cloud"
      style={{ '--mx': position.x, '--my': position.y }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        {graphLines.map((line, index) => (
          <line
            key={`${line.x1}-${line.y1}-${line.x2}-${line.y2}-${index}`}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
          />
        ))}
      </svg>
      {graphNodes.map((node, index) => (
        <span
          key={`${node.left}-${node.top}-${index}`}
          style={{
            '--left': `${node.left}%`,
            '--top': `${node.top}%`,
            '--size': `${node.size}px`,
            '--shift': node.shift,
          }}
        />
      ))}
    </div>
  );
}

function SectionHeader({ eyebrow, title, copy }) {
  return (
    <div className="section-header">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}

function Hero() {
  return (
    <header className="hero">
      <div className="hero-shell">
        <a className="brand" href="https://buildersforce.ai" aria-label="buildersforce.ai">
          <img className="brand-mark" src={buildersForceMark} alt="" />
          <span>buildersforce.ai</span>
        </a>
        <div className="hero-copy">
          <p className="eyebrow">AI company for businesses that need outcomes</p>
          <h1>AI that Builds, values that last</h1>
          <p>
            We partner with teams to discover the right problems, build intelligent
            solutions, and deliver measurable outcomes at scale.
          </p>
          <a className="primary-cta" href={contactHref}>
            Build with us
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </header>
  );
}

function ForceScroll() {
  const sectionRef = useRef(null);
  const active = useScrollIndex(sectionRef);
  const activeSection = forceSections[active];

  return (
    <section className="force-scroll snap-page" ref={sectionRef} aria-label="Builders Force AI principles">
      <div className="force-sticky">
        <div className="force-orbit" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="force-logo" aria-label="Builders Force AI">
          {forceSections.map((item, index) => (
            <React.Fragment key={item.key}>
              <span className={index === active ? 'is-active' : ''}>{item.label}</span>
              {index < forceSections.length - 1 ? <i>·</i> : null}
            </React.Fragment>
          ))}
        </div>
        <div className="force-content" key={activeSection.key}>
          <p className="eyebrow">{activeSection.caption}</p>
          <h2>{activeSection.intro}</h2>
          <div className="principle-grid">
            {activeSection.points.map((point) => (
              <div className="principle" key={point}>
                <span />
                <p>{point}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="scroll-dots" aria-hidden="true">
          {forceSections.map((item, index) => (
            <span key={item.key} className={index === active ? 'is-active' : ''} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhoWeAre() {
  return (
    <section className="who section-band snap-page">
      <div className="section-inner split">
        <SectionHeader
          eyebrow="Who we are"
          title="Builders Force is an AI partner for teams that need the work to land."
          copy="We discover problems with you, build intelligent solutions beside you, and stay close enough to make the outcome measurable."
        />
        <div className="value-stack">
          {valueProps.map((item, index) => (
            <article className="value-card" key={item}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  const [graphPosition, setGraphPosition] = useState({ x: 0.5, y: 0.5 });

  const handleGraphMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setGraphPosition({
      x: (event.clientX - rect.left) / rect.width,
      y: (event.clientY - rect.top) / rect.height,
    });
  };

  return (
    <section
      id="team"
      className="team-section snap-page"
      onPointerMove={handleGraphMove}
      onPointerLeave={() => setGraphPosition({ x: 0.5, y: 0.5 })}
    >
      <GraphCloud position={graphPosition} />
      <div className="section-inner">
        <SectionHeader
          eyebrow="Team"
          title="A compact team built around ownership."
          copy="Builders Force is led by operators who stay close to client outcomes."
        />
        <div className="team-grid">
          {team.map((member) => (
            <a
              className="team-card"
              href={member.link}
              target="_blank"
              rel="noreferrer"
              key={member.name}
              aria-label={`Open ${member.name}'s LinkedIn profile`}
            >
              <img className="avatar" src={member.image} alt={`${member.name} headshot`} />
              <div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <span className="team-link">LinkedIn</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="process section-band snap-page" id="process">
      <div className="section-inner">
        <SectionHeader
          eyebrow="How we build"
          title="A delivery loop from discovery to scale."
          copy="Clean enough to understand quickly, structured enough to keep momentum after deployment."
        />
        <div className="process-map">
          <div className="process-flow">
            {processSteps.map((step, index) => (
              <React.Fragment key={step}>
                <article className="process-step" style={{ '--step-lift': index % 2 ? '34px' : '0px' }}>
                  <div className="step-icon" aria-hidden="true">
                    {index + 1}
                  </div>
                  <h3>{step}</h3>
                </article>
                {index < processSteps.length - 1 ? <div className="flow-arrow" aria-hidden="true" /> : null}
              </React.Fragment>
            ))}
          </div>
          <div className="optimize-loop" aria-label="Optimise and scale loops from Deploy back to Test">
            <span>Optimise &amp; Scale</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Proof() {
  return (
    <section className="snap-page">
      <div className="section-inner proof">
        <SectionHeader
          eyebrow="Early work"
          title="Two client engagements, captured in one place for now."
          copy="Until public client names and testimonials are ready, we are keeping proof focused on anonymized engagement snapshots."
        />
        <div className="proof-grid">
          {proofItems.map((item) => (
            <article className="case-card" key={item.title}>
              <p className="eyebrow">{item.eyebrow}</p>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="services section-band snap-page">
      <div className="section-inner">
        <SectionHeader
          eyebrow="Services and control"
          title="Build with the operating model that matches your risk, team and environment."
          copy="The constant across every model: your data remains yours."
        />
        <div className="service-grid">
          {serviceModels.map((item) => (
            <article className="service-card" key={item.title}>
              <span className="service-glyph" aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
        <div className="compliance">
          <div>
            <p className="eyebrow">Compliance support</p>
            <h3>Built for conversations where controls matter.</h3>
            <p>
              Builders Force supports delivery against common enterprise security,
              privacy and governance frameworks, with additional compliance needs
              handled based on the client environment.
            </p>
          </div>
          <div className="badge-cloud">
            {compliance.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="section-inner footer-grid">
        <img className="footer-logo" src={buildersForceLogo} alt="Builders Force" />
        <div className="footer-contact">
          <a className="primary-cta" href={`mailto:${contactEmail}`}>
            Build with us
            <span aria-hidden="true">→</span>
          </a>
          <p>Start a conversation about an AI solution, workflow, or operating problem.</p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  useEffect(() => {
    if (!window.location.hash) return;
    const target = document.querySelector(window.location.hash);
    const scrollToTarget = () => {
      if (!target) return;
      window.scrollTo({ top: target.offsetTop, behavior: 'auto' });
    };
    scrollToTarget();
    const timer = window.setTimeout(scrollToTarget, 80);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <Hero />
      <ForceScroll />
      <main>
        <WhoWeAre />
        <Team />
        <Process />
        <Proof />
        <Services />
      </main>
      <Footer />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
