import suryanHeadshot from '../assets/suryan-headshot.jpeg';
import venkatHeadshot from '../assets/venkat-headshot.jpeg';

export const GLOBAL = {
  email: 'suryan@buildersforce.ai',
  companyName: 'Builders Force AI Pvt Ltd',
  year: new Date().getFullYear(),
};

export const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { 
    label: 'What we do', 
    dropdown: [
      { path: '/discover', label: 'Discover' },
      { path: '/build', label: 'Build' },
      { path: '/operate', label: 'Operate' },
    ]
  },
  { path: '/what-we-think', label: 'What we think' },
  { path: '/accelerators', label: 'Accelerators' },
  { path: '/case-studies', label: 'Case Studies' },
  { path: '/who-we-are', label: 'Who we are' },
  { path: '/contact', label: 'Contact' }, // Keeping Contact as button action in navbar
];

export const TEAM = [
  {
    name: 'Suryanarayanan Ramamurthy',
    role: 'Founder, Chief Builder',
    image: suryanHeadshot,
    linkedin: 'https://www.linkedin.com/in/suryan/',
    bio: 'Former technical lead scaling highly available systems. Focuses on system architecture and LLM orchestration.',
    email: 'suryan@buildersforce.ai'
  },
  {
    name: 'Venkat Sriraman',
    role: 'Co-Founder, Advisor',
    image: venkatHeadshot,
    linkedin: 'https://www.linkedin.com/in/venkataramanan-sriraman-904603/',
    bio: 'Decades of enterprise leadership. Advises on business alignment, compliance, and strategic delivery.',
    email: 'venkat@buildersforce.ai'
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
    link: 'https://www.thehindu.com/news/national/cbi-launches-ai-powered-notice-verification-system-abhay/article70984297.ece',
    linkText: 'Read The Hindu Coverage',
  },
  {
    tag: 'US Real Estate',
    title: 'AI-first Lease Intelligence Platform',
    description: 'A boutique partner with a stealth AI startup working to disrupt property management in the commercial real estate sector.',
    impact: [
      { metric: '5x', label: 'Productivity Increase' },
      { metric: '80%', label: 'Revenue Leaks Plugged' }
    ],
    linkText: 'Proprietary Engagement',
    isProprietary: true,
  },
];

export const DISCOVER = {
  title: 'Discover Phase',
  description: 'Create value beyond the hype by identifying AI use-cases based on ROI by',
  points: [
    { title: 'Value Identification', description: 'Pinpoint high-impact AI opportunities mapped directly to your measurable business outcomes.' },
    { title: 'Cost-effective LLM usage', description: 'Optimize prompt engineering and select the right models to maximize ROI and minimize overhead.' },
    { title: 'Rapid Prototyping', description: 'Accelerate validation through quick, functional proofs-of-concept to test viability before full scale.' },
    { title: 'Building Governance Framework', description: 'Establish secure, compliant AI policies that protect enterprise data while fostering innovation.' }
  ]
};

export const BUILD = {
  title: 'Build Phase',
  description: 'Engage with the enterprises to build and scale AI-powered transformation via',
  points: [
    { title: 'Model Fine-tuning', description: 'Adapt foundational models with your proprietary data to achieve domain-specific precision.' },
    { title: 'Custom Build', description: 'Engineer robust, scalable AI architectures tailored precisely to your unique operational requirements.' },
    { title: 'Agentic AI', description: 'Deploy autonomous, multi-step AI agents capable of executing complex business workflows reliably.' },
    { title: 'Inference Hosting (On-Prem or Cloud)', description: 'Implement secure, highly-available deployment pipelines optimized for latency, cost, and compliance.' }
  ]
};

export const OPERATE = {
  title: 'Operate Phase',
  description: 'Get the best out of AI models and applications throughout the lifecycle by',
  points: [
    { title: 'Responsible AI Testing', description: 'Continuously evaluate model outputs to mitigate bias, eliminate hallucinations, and ensure safety.' },
    { title: 'Observability', description: 'Monitor system telemetry, track model drift, and maintain end-to-end visibility across infrastructure.' },
    { title: 'MLOps/LLMOps for scalable deployments', description: 'Automate model lifecycles with continuous integration and delivery pipelines tailored for ML.' },
    { title: 'Integration with Enterprise Systems', description: 'Seamlessly connect AI capabilities into your existing software ecosystem, from CRMs to databases.' }
  ]
};

export const ACCELERATORS = [
  {
    title: 'StudyEdge',
    description: 'This accelerator is an edge-first, AI-powered tutor that evaluates student reading with real-time pronunciation feedback, answers curiosity questions using grounded web scraping, and translates concepts into Indic languages—all while feeding actionable performance metrics directly to teacher dashboards.',
  },
  {
    title: 'LegalEdge',
    description: 'Our accelerator is an enterprise-grade legal AI orchestrator built for high-stakes professional work. We combine multi-model agentic workflows with a rigorous verification stack to deliver secure, hallucination-free legal reasoning at scale, giving you the fastest path from raw information to actionable decisions.',
  },
  {
    title: 'MedicalEdge',
    description: 'This accelerator turns every patient record : text, labs, and imaging,  into an automated, end-to-end clinical audit that runs entirely on-premise: an AI second opinion that validates diagnoses, flags prescription errors, and documents decision quality across every department, giving hospitals both a malpractice shield and a quality engine while keeping all PHI air-gapped and compliant',
  }
];

export const BLOG_STUBS = [
  {
    title: 'The Future of Agentic Workflows in the Enterprise',
    date: 'June 2026',
    excerpt: 'How autonomous agents are moving beyond chat to execute complex, multi-step business logic reliably.',
    link: '#'
  },
  {
    title: 'ROI-Driven AI Strategy: Moving Past the Hype',
    date: 'May 2026',
    excerpt: 'A pragmatic approach to identifying high-value AI use cases and ensuring measurable business outcomes.',
    link: '#'
  },
  {
    title: 'On-Premise vs Cloud LLMs: Navigating the Trade-offs',
    date: 'April 2026',
    excerpt: 'Analyzing the cost, performance, and security considerations when deciding where to host your enterprise models.',
    link: '#'
  }
];
