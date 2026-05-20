import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import suryanHeadshot from './assets/suryan-headshot.jpeg';
import venkatHeadshot from './assets/venkat-headshot.jpeg';
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
    eyebrow: 'A Lease intelligence platform for US based Leasing company',
    copy:
      'BuildersForce.ai has been an outstanding boutique AI and technology partner for our stealth real estate technology startup. They owned the business problem, stayed focused on outcomes, shaped website design, user flow, and AI strategy, and created real value through AI-based lease abstraction and CAM rules extraction capabilities.',
  },
  {
    title: 'Client engagement 02',
    eyebrow: 'AI based Notice Verification system - ABHAY - for Central Bureau Of Investigation, Govt of India',
    copy:
      'AI-powered conversational agentic system, serving as a first line of defense to help citizens instantly verify if notices claiming to be from the CBI are genuine.',
    link: 'https://timesofindia.indiatimes.com/city/delhi/meet-abhay-your-new-shield-against-digital-arrest/articleshow/131125102.cms',
    linkText: 'Learn more',
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

function SectionHeader({ eyebrow, title, copy }) {
  return (
    <div className="section-header">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}

function FloatingCta() {
  return (
    <a className="floating-cta" href={contactHref}>
      Build with us
    </a>
  );
}

function Hero() {
  return (
    <header className="hero">
      <div className="hero-shell">
        <a className="brand" href="https://buildersforce.ai" aria-label="buildersforce.ai">
          <img className="brand-mark" src={buildersForceMark} alt="" />
          <span className="brand-name">
            <span className="brand-builders">BUILDERS</span>
            <span className="brand-force">FORCE</span>
          </span>
        </a>
        <div className="hero-copy">
          <p className="eyebrow">An AI company that every outcome focused business can rely on.</p>
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
  return (
    <section id="team" className="team-section snap-page">
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
          title="Delivering measurable outcomes for real problems."
          copy="From stealth startups to government platforms, we build solutions that matter."
        />
        <div className="proof-grid">
          {proofItems.map((item) => (
            <article className="case-card" key={item.title}>
              <p className="eyebrow">{item.eyebrow}</p>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              {item.link && (
                <a href={item.link} target="_blank" rel="noreferrer" className="engagement-link">
                  {item.linkText || 'Read more'}
                  <span aria-hidden="true">→</span>
                </a>
              )}
            </article>
          ))}
        </div>
        <div className="proof-footer">
          <p className="partnership-note">In partnership with Headrun</p>
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
      <FloatingCta />
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
