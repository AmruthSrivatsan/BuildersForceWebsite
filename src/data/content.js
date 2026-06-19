import suryanHeadshot from '../assets/suryan-headshot.jpeg';
import venkatHeadshot from '../assets/venkat-headshot.jpeg';

export const GLOBAL = {
  email: 'suryan@buildersforce.ai',
  companyName: 'Builders Force AI Pvt Ltd',
  year: new Date().getFullYear(),
};

export const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/work', label: 'Work' },
  { path: '/team', label: 'Team' },
  { path: '/contact', label: 'Contact' },
];

export const TEAM = [
  {
    name: 'Suryanarayanan Ramamurthy',
    role: 'Founder, Chief Builder',
    image: suryanHeadshot,
    linkedin: 'https://www.linkedin.com/in/suryan/',
    bio: 'Former technical lead scaling highly available systems. Focuses on system architecture and LLM orchestration.',
  },
  {
    name: 'Venkat Sriraman',
    role: 'Co-Founder, Advisor',
    image: venkatHeadshot,
    linkedin: 'https://www.linkedin.com/in/venkataramanan-sriraman-904603/',
    bio: 'Decades of enterprise leadership. Advises on business alignment, compliance, and strategic delivery.',
  },
];

export const WORK = [
  {
    tag: 'Government & Law Enforcement',
    title: 'CBI ABHAY System',
    description: 'A comprehensive platform empowering officers of the Central Bureau of Investigation. ABHAY streamlines case management, investigation workflows, and provides secure data access, significantly enhancing operational efficiency and transparency.',
    impact: [
      { metric: '100%', label: 'Adoption Rate' },
      { metric: 'Zero', label: 'Data Breaches' }
    ],
    link: 'https://timesofindia.indiatimes.com/india/interpol-like-software-abhay-launched-for-tracking-criminals/articleshow/115655768.cms',
    linkText: 'Read Times of India Coverage',
  },
  {
    tag: 'US Real Estate',
    title: 'AI-Powered Leasing Verification',
    description: 'Developed an intelligent platform for a major US real estate firm to automate the parsing, verification, and extraction of critical data from complex leasing documents. The system parses unstructured PDFs into structured SQL schemas with deterministic accuracy.',
    impact: [
      { metric: '85%', label: 'Time Saved per Lease' },
      { metric: '<1%', label: 'Error Rate' }
    ],
    linkText: 'Proprietary Engagement',
    isProprietary: true,
  },
];

export const SERVICES = [
  {
    title: 'Strategy & Architecture',
    description: 'We audit your infrastructure and design AI roadmaps that avoid vendor lock-in and optimize for long-term ROI.',
    icon: 'strategy'
  },
  {
    title: 'Precision RAG Systems',
    description: 'Retrieval-Augmented Generation that grounds LLMs in your proprietary data, eliminating hallucinations.',
    icon: 'rag'
  },
  {
    title: 'Agentic Workflows',
    description: 'Autonomous agents that sequence complex tasks, executing business logic reliably without human intervention.',
    icon: 'agents'
  },
  {
    title: 'Deployment & Security',
    description: 'We handle VPC deployments, SOC 2 compliance readiness, and zero-trust API management.',
    icon: 'security'
  }
];

export const PILLARS = [
  {
    num: '01',
    title: 'Scalable Architecture',
    description: 'Systems designed for real-world load, focusing on clean code and robust infrastructure.',
  },
  {
    num: '02',
    title: 'Execution Velocity',
    description: 'Agile delivery cycles focused on tangible outcomes and rapid iteration based on real user feedback.',
  },
  {
    num: '03',
    title: 'Applied Intelligence',
    description: 'Custom LLM integrations and precise RAG systems that solve complex business logic deterministically.',
  },
];
