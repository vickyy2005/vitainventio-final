'use client'

import { useState } from 'react'
import { ArrowUpRight, ArrowRight, Globe2, MonitorSmartphone, PenTool, Layers3, Code2, Bot, Database, Rocket, Check } from 'lucide-react'
import { Reveal, SectionHeading, ButtonLink } from '@/components/shared'

const services = [
  { icon: Globe2, title: 'Website Development', text: 'High-performance marketing sites that turn attention into action.', id: 'website-development' },
  { icon: MonitorSmartphone, title: 'eCommerce', text: 'Conversion-led storefronts engineered for memorable shopping journeys.', id: 'ecommerce' },
  { icon: PenTool, title: 'Landing Pages', text: 'Focused launch pages with crisp messaging and measurable outcomes.', id: 'landing-pages' },
  { icon: Layers3, title: 'UI / UX Design', text: 'Clear, expressive product experiences users understand instantly.', id: 'ui-ux' },
  { icon: Code2, title: 'Custom Software', text: 'Purpose-built platforms that remove friction from complex workflows.', id: 'custom-software' },
  { icon: Bot, title: 'AI Automation', text: 'Practical AI systems that give your team leverage, not more tools.', id: 'ai-projects' },
  { icon: Database, title: 'SEO Services', text: 'Connected customer systems that keep your pipeline moving.', id: 'seo-services' },
  { icon: Rocket, title: 'SaaS Applications', text: 'Scalable foundations for ambitious products and recurring revenue.', id: 'saas' },
]

const techStack = ['Next.js', 'React', 'TypeScript', 'Tailwind', 'OpenAI', 'Supabase', 'Node.js', 'Vercel', 'AWS', 'Docker']

const processSteps = [
  {
    num: '01',
    title: 'Discovery & Strategy',
    shortText: 'We locate the sharpest opportunities and set a clear product direction.',
    details: 'Through stakeholder workshops, customer research, and competitor teardowns, we clarify your unique advantage and map out a technical blueprint designed for business growth.',
    deliverables: ['Competitive Audit', 'Technical Architecture Blueprint', 'Project Scope Definition'],
    tools: ['Figma', 'FigJam', 'Notion', 'Miro']
  },
  {
    num: '02',
    title: 'Design & Prototyping',
    shortText: 'We translate raw ideas into visual, high-fidelity interactive interfaces.',
    details: 'We build comprehensive layout systems, typographic foundations, and high-fidelity clickable designs. You will see and test exactly how the product behaves before any code is written.',
    deliverables: ['UI/UX Design Systems', 'Interactive Prototypes', 'Design System Library'],
    tools: ['Figma', 'Adobe Creative Suite', 'Principle']
  },
  {
    num: '03',
    title: 'Engineered Development',
    shortText: 'We build high-performance systems with clean, production-ready code.',
    details: 'We translate designs into lightning-fast, production-ready code. Using modern architectures, we build secure backend structures and responsive user frontends optimized for scale and speed.',
    deliverables: ['TypeScript Web Apps', 'Headless CMS Integration', 'Secure API Systems'],
    tools: ['Next.js', 'React', 'Node.js', 'Tailwind', 'Supabase']
  },
  {
    num: '04',
    title: 'Quality Testing & QA',
    shortText: 'We pressure-test every component to verify stability and performance.',
    details: 'No product ships without extensive quality checks. We write comprehensive automated test suites and run manual checks across real mobile and desktop browsers to verify responsiveness.',
    deliverables: ['Automated Jest Tests', 'Cross-browser Audits', 'Core Web Vitals Optimization'],
    tools: ['Jest', 'Playwright', 'Google Lighthouse', 'Sentry']
  },
  {
    num: '05',
    title: 'Launch & Expansion',
    shortText: 'We deploy the system smoothly and scale it based on real-world data.',
    details: 'We configure DNS settings, set up continuous deployment hosting, and launch your product. Post-launch, we monitor search visibility and analytics to optimize paths for conversions.',
    deliverables: ['Live Vercel Deployment', 'SEO Verification Audit', 'Analytics Dashboard Integration'],
    tools: ['Vercel', 'AWS Cloudfront', 'Google Analytics', 'PostHog']
  }
]

export default function ServicesPage() {
  const [activeStep, setActiveStep] = useState(0)
  return (
    <main className="site-shell pt-[84px]">
      <section id="services" className="dark-section services-section">
        <div className="container">
          <Reveal>
            <SectionHeading 
              light 
              eyebrow="What we do" 
              title="A sharper digital edge." 
              copy="From first sketch to final launch, we make the complicated feel clear and the ordinary feel exceptional." 
            />
          </Reveal>
          <div className="services-grid">
            {services.map(({ icon: Icon, title, text, id }, index) => (
              <Reveal key={title} className="service-card" id={id} style={{ transitionDelay: `${(index % 4) * 0.08}s` }}>
                <span className="service-index">0{index + 1}</span>
                <div className="service-icon-wrap">
                  <Icon className="service-icon" />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <a href="/contact">Learn more <ArrowUpRight size={14} /></a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      
      <section id="process" className="light-section process-section">
        <div className="container process-layout">
          <Reveal>
            <SectionHeading 
              eyebrow="How we work" 
              title="A process built for momentum." 
              copy="No black boxes. No endless handoffs. Just a clear path from the first conversation to a launch you can be proud of." 
            />
            {/* Display active step details card on the left side */}
            <div className="active-process-details">
              <div className="active-step-badge">Phase {processSteps[activeStep].num}</div>
              <h3 className="active-step-title">{processSteps[activeStep].title}</h3>
              <p className="active-step-desc">{processSteps[activeStep].details}</p>
              
              <div className="deliverables-box">
                <h4>Key Deliverables</h4>
                <ul>
                  {processSteps[activeStep].deliverables.map(item => (
                    <li key={item}><Check size={14} style={{ color: '#e8ff00', marginRight: '8px' }} /> {item}</li>
                  ))}
                </ul>
              </div>

              <div className="tools-box">
                <h4>Tech & Tools</h4>
                <div className="tools-chips">
                  {processSteps[activeStep].tools.map(item => (
                    <span key={item} className="tool-chip">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Stepper Selector on the Right */}
          <div className="timeline-interactive">
            {processSteps.map((step, idx) => {
              const isActive = activeStep === idx
              return (
                <div 
                  key={step.num} 
                  className={`timeline-item-new ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveStep(idx)}
                  onMouseEnter={() => setActiveStep(idx)}
                >
                  <span className="step-number-new">{step.num}</span>
                  <div className="step-main-new">
                    <h3>{step.title}</h3>
                    <p>{step.shortText}</p>
                  </div>
                  <ArrowRight size={20} className="step-arrow-new" />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="stack-section">
        <div className="container">
          <p className="stack-label">A modern stack for modern work</p>
        </div>
        <div className="marquee">
          <div className="marquee-track">
            {[...techStack, ...techStack].map((tech, index) => (
              <span key={`${tech}-${index}`}><i />{tech}</span>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
