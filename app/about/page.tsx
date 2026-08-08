'use client'

import { Target, Users, Zap, ShieldCheck, ArrowUpRight, CheckCircle2, Key, Cpu, Gauge, Rocket } from 'lucide-react'
import { Reveal, ButtonLink } from '@/components/shared'

export default function AboutPage() {
  return (
    <main className="site-shell bg-dark-theme">
      
      {/* Hero Section */}
      <section className="about-hero-new">
        <div className="hero-grid" />
        <div className="hero-glow" />
        <div className="container">
          <Reveal className="about-hero-content-new">
            <span className="eyebrow-lime">ABOUT TECH SMASH</span>
            <h1>Engineering the <br/><span className="about-highlight-word">digital future.</span></h1>
            <p>We are a premium development agency dedicated to building scalable software, high-performance websites, and intelligent AI solutions.</p>
          </Reveal>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats-new">
        <div className="container">
          <Reveal className="stats-grid-new">
            <div className="stat-item">
              <h3>150+</h3>
              <p>Projects Delivered</p>
            </div>
            <div className="stat-item">
              <h3>5+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h3>98%</h3>
              <p>Client Retention</p>
            </div>
            <div className="stat-item">
              <h3>24/7</h3>
              <p>Expert Support</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story-new">
        <div className="container">
          <div className="story-grid-new">
            <Reveal className="story-text-new">
              <h2>Small team.<br /><span className="about-highlight-word">Big impact.</span></h2>
              <p>Founded with the vision to bridge the gap between technology and business growth, Tech Smash has grown into a trusted partner for companies looking to establish a strong digital presence.</p>
              <ul className="story-list">
                <li><CheckCircle2 color="#e8ff00" size={20} /> AI-Integrated Development</li>
                <li><CheckCircle2 color="#e8ff00" size={20} /> Performance Obsessed</li>
                <li><CheckCircle2 color="#e8ff00" size={20} /> Built for Scalability</li>
              </ul>
            </Reveal>
            <Reveal className="story-image-new">
              <div className="image-frame">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=85" alt="Tech Smash Studio" loading="lazy" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values-new">
        <div className="container">
          <Reveal className="values-header-new">
            <h2>Our <span className="about-highlight-word">Core Values</span></h2>
            <p>The principles that guide our work, every single day.</p>
          </Reveal>
          
          <div className="values-grid-new">
            {[
              { icon: Target, title: 'Results Oriented', text: 'We focus on delivering measurable outcomes that matter to your business.' },
              { icon: Zap, title: 'Efficiency', text: 'We build streamlined solutions without unnecessary complexity.' },
              { icon: ShieldCheck, title: 'Reliability', text: 'We create robust, secure platforms you can depend on.' },
              { icon: Users, title: 'Partnership', text: 'We work closely with our clients as an extension of their team.' }
            ].map((value, idx) => (
              <Reveal key={idx} className="value-card-new">
                <div className="value-icon-new"><value.icon size={28} /></div>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Engine Pipeline (Vehicle/Dashboard themed diagram) */}
      <section className="delivery-engine-section">
        <div className="container">
          <Reveal className="engine-header">
            <span className="eyebrow-lime">DELIVERY PIPELINE</span>
            <h2>Our Project <span className="about-highlight-word">Delivery Engine</span></h2>
            <p>How we accelerate your digital product from concept blueprint to full-throttle launch.</p>
          </Reveal>

          <div className="engine-pipeline-wrapper">
            <div className="engine-track-line" />
            
            <div className="engine-pipeline-grid">
              {[
                { icon: Key, phase: 'PHASE 01', title: 'Ignition / Blueprint', desc: 'Laying down the chassis. We design the wireframes and select the core technology stack.' },
                { icon: Cpu, phase: 'PHASE 02', title: 'Engine Assembly', desc: 'Crafting the heart. Building scalable backend architectures and writing responsive frontend code.' },
                { icon: Gauge, phase: 'PHASE 03', title: 'Wind Tunnel', desc: 'Performance tuning. Testing caching systems, script load speeds, and database indexes.' },
                { icon: Rocket, phase: 'PHASE 04', title: 'Full Lift-Off', desc: 'Launching to live servers, setting up CDN arrays, and establishing monitoring telemetry.' }
              ].map((step, idx) => (
                <Reveal className="pipeline-card" key={idx}>
                  <div className="dial-container">
                    <div className="dial-speed-gauge" />
                    <div className="dial-icon-box">
                      <step.icon size={26} />
                    </div>
                  </div>
                  <span className="pipeline-phase">{step.phase}</span>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container cta-box">
          <div className="cta-glow" />
          <Reveal>
            <p className="eyebrow"><span></span> Ready to scale?</p>
            <h2>Let's build something <em>extraordinary</em> together.</h2>
            <p>Get in touch with our team to discuss your next big project.</p>
            <div style={{ marginTop: '30px' }}>
              <ButtonLink href="/contact">Start a Project <ArrowUpRight /></ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
