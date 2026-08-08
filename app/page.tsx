'use client'

import { useRef } from 'react'
import { ArrowDownRight, ArrowDownLeft, ArrowUpRight, Laptop, Network, Asterisk, PhoneCall, Check, X, Lightbulb } from 'lucide-react'
import { Reveal, ButtonLink } from '@/components/shared'

function HighlightedCard({ demo, idx }: { demo: any; idx: number }) {
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <Reveal className="hw-card" key={idx}>
      <div 
        className="hw-image-wrap"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ position: 'relative', overflow: 'hidden' }}
      >
        {demo.video ? (
          <video 
            ref={videoRef}
            src={demo.video}
            loop 
            muted 
            playsInline
            className="hw-card-video"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
          />
        ) : (
          <img src={demo.img} alt={demo.title} />
        )}
      </div>
      <div className="hw-content">
        <span className="hw-tag">{demo.tag}</span>
        <h3>{demo.title}</h3>
        <p>{demo.desc}</p>
        <div className="hw-actions">
          <a href="/contact" className="btn-dark">Get Similar Website</a>
          <a href="/contact" className="btn-lime">Visit Live Website</a>
        </div>
      </div>
    </Reveal>
  )
}

export default function HomePage() {
  return (
    <main className="site-shell">
      <section id="home" className="hero-section hero-bg-video">
        <video 
          className="hero-video-bg" 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-overlay" />
        <div className="hero-grid" />
        <div className="hero-glow" />
        <div className="container hero-content-centered">
          <Reveal className="hero-copy-centered">
            <p className="hero-kicker"><span className="status-dot" /> DEVELOPMENT AGENCY</p>
            <h1>WE DESIGN & BUILD<br />NEXT-GEN DIGITAL<br /><span className="lime-text">EXPERIENCES</span></h1>
            <p className="hero-description">Vita Inventio helps startups and businesses build high-performance websites, custom software, and eCommerce platforms &mdash; now enhanced with AI integration for faster development, smarter automation, and better results.</p>
            <div className="hero-actions"><ButtonLink href="/contact"><ArrowDownLeft /> Get Free Consultation</ButtonLink></div>
            <div className="hero-note"><span className="avatar-stack"><i>JD</i><i>MC</i><i>AS</i></span><span>Trusted by teams building what&apos;s next</span></div>
          </Reveal>
        </div>
        {/* Trust Stats Bar inside hero */}
        <div className="trust-bar container">
          <div className="trust-grid">
            {[
              ['10+', 'Projects delivered'],
              ['15+', 'Happy clients'],
              ['1.5+', 'Years experience'],
              ['99%', 'Client satisfaction']
            ].map(([number, label]) => (
              <div key={label} className="trust-stat">
                <strong>{number}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="why-choose-section">
        <div className="container">
          <Reveal>
            <div className="why-choose-header">
              <span className="why-kicker"><span className="status-dot" /> WHY CHOOSE VITA INVENTIO</span>
              <h2>Why Businesses Choose <span className="why-highlight-word">Vita Inventio</span></h2>
            </div>
          </Reveal>
          
          <div className="why-cards">
            <Reveal className="why-choose-card">
              <div className="why-card-inner">
                <span className="card-badge-mini">AI AUTOMATION</span>
                <div className="why-icon"><Laptop /></div>
                <h3>AI-Integrated Development</h3>
                <p>We integrate AI-powered tools and automation into websites and software to improve performance, reduce manual work, and accelerate business growth.</p>
              </div>
            </Reveal>
            <Reveal className="why-choose-card">
              <div className="why-card-inner">
                <span className="card-badge-mini">SCALABLE SYSTEM</span>
                <div className="why-icon"><Network /></div>
                <h3>Custom & Scalable Solutions</h3>
                <p>From WordPress websites to fully custom software, we build solutions tailored to your business goals &mdash; designed to scale as you grow.</p>
              </div>
            </Reveal>
            <Reveal className="why-choose-card">
              <div className="why-card-inner">
                <span className="card-badge-mini">SEO & SPEED</span>
                <div className="why-icon"><Asterisk /></div>
                <h3>Performance & SEO Focused</h3>
                <p>Every project is built with speed, security, and search engine optimization in mind &mdash; ensuring your digital presence delivers real results.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="highlighted-websites-section">
        <div className="container">
          <Reveal className="hw-header">
            <h2>Highlighted Websites We Have<br /><span className="portfolio-highlight-word">Designed & Developed</span></h2>
            <p>Explore selected website projects created by Vita Inventio with clean UI/UX, responsive layouts, and business-focused design.</p>
          </Reveal>
          
          <div className="hw-grid">
            {[
              {
                tag: 'Business Website',
                title: 'Business Website Demo 1',
                desc: 'Premium fragrance e-commerce store featuring product collections, scent-based shopping, promotional offers and a refined luxury shopping experience.',
                img: '/demo1.png',
                video: '/web-agency.mp4'
              },
              {
                tag: 'Business Website',
                title: 'Business Website Demo 2',
                desc: 'A premium photography website designed to showcase portfolio work with strong visuals and conversion-focused sections.',
                img: '/demo2.png',
                video: '/anand-interiors.mp4'
              },
              {
                tag: 'eCommerce Website',
                title: 'eCommerce Store Demo',
                desc: 'A modern online store experience with product-focused layout, clean navigation, trust sections, and mobile-first shopping flow.',
                img: '/demo3.png',
                video: '/guru-ganesh.mp4'
              }
            ].map((demo, idx) => (
              <HighlightedCard key={idx} demo={demo} idx={idx} />
            ))}
          </div>
          
          <Reveal className="hw-footer">
            <a href="/portfolio" className="btn-lime btn-large">View Full Portfolio</a>
          </Reveal>
        </div>
      </section>

      <section className="workflow-section">
        <div className="container workflow-layout">
          <Reveal className="workflow-left">
            <span className="hero-kicker"><span className="status-dot" /> OUR PROCESS</span>
            <h2>Our Smart<br />Development<br />Workflow</h2>
            <a href="tel:+1234567890" className="btn-lime call-btn">
              <PhoneCall size={16} /> CALL NOW
            </a>
          </Reveal>
          
          <div className="workflow-right">
            {[
              { num: '01', title: 'Discovery & Strategy', desc: 'We understand your business goals, target audience, and competitors. Through research and consultation, we create a clear digital strategy aligned with your growth objectives.' },
              { num: '02', title: 'Design & Architecture', desc: 'We craft modern, conversion-focused UI/UX designs and define a scalable technical structure — ensuring your website or software looks professional and performs efficiently.' },
              { num: '03', title: 'AI-Enhanced Development', desc: 'Our team builds high-performance websites and custom software using modern technologies and AI-powered tools for automation, optimization, and faster deployment.' },
              { num: '04', title: 'Testing, Launch & Growth', desc: 'We rigorously test for speed, security, and performance before launch. Post-launch, we provide support, SEO optimization, and scaling strategies to ensure long-term success.' }
            ].map((step, idx) => (
              <Reveal className="workflow-step" key={idx}>
                <div className="step-num">{step.num}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="new-pricing-section">
        <div className="container">
          <Reveal className="pricing-header">
            <span className="hero-kicker"><span className="status-dot" /> WEBSITE DEVELOPMENT PACKAGES</span>
            <h2>Affordable <span className="pricing-highlight-word">Website Solutions</span><br />for Every Business Stage</h2>
            <p>Whether you&apos;re starting small or scaling big, Vita Inventio offers performance-driven, AI-enhanced website solutions tailored to your needs.</p>
          </Reveal>
          
          <div className="new-pricing-grid">
            <Reveal className="np-card np-card-green">
              <div className="np-icon"><div className="icon-shape-green" /></div>
              <h3>Starter Plan &ndash; &#8377;2999</h3>
              <p className="np-subtitle">Perfect for Individuals &amp; Small Businesses</p>
              <ul>
                <li><Check size={14} /> Up to 3 Pages</li>
                <li><Check size={14} /> Basic SEO Setup</li>
                <li><Check size={14} /> Contact Form Integration</li>
                <li><Check size={14} /> Social Media Links</li>
                <li><Check size={14} /> 7 Days Delivery</li>
                <li><Check size={14} /> Mobile Responsive Design</li>
                <li className="np-disabled"><X size={14} color="red" /> Hosting &amp; Domain Not Included</li>
              </ul>
              <a href="/contact" className="np-btn np-btn-light"><ArrowDownRight size={16} /> Get Started</a>
            </Reveal>

            <Reveal className="np-card np-card-dark">
              <div className="np-icon"><div className="icon-shape-dark" /></div>
              <h3>Business Plan &ndash; &#8377;4,599 (Recommended)</h3>
              <ul>
                <li><Check size={14} /> Up to 5 Pages</li>
                <li><Check size={14} /> Free Domain (1 Year)</li>
                <li><Check size={14} /> Free Hosting (1 Year)</li>
                <li><Check size={14} /> Mobile Responsive</li>
                <li><Check size={14} /> Basic SEO Optimization</li>
                <li><Check size={14} /> WhatsApp Integration</li>
                <li><Check size={14} /> Contact Forms</li>
                <li><Check size={14} /> 7 Days Delivery</li>
                <li><Check size={14} /> AI-Based Speed Optimization</li>
              </ul>
              <a href="/contact" className="np-btn np-btn-green"><ArrowDownRight size={16} /> Choose Business Plan</a>
            </Reveal>

            <Reveal className="np-card np-card-white">
              <div className="np-icon"><div className="icon-shape-white" /></div>
              <h3>eCommerce Plan &ndash; &#8377;6,999</h3>
              <p className="np-subtitle">Start Selling Online</p>
              <ul>
                <li><Check size={14} /> Product Management Setup</li>
                <li><Check size={14} /> Payment Gateway Integration</li>
                <li><Check size={14} /> Up to 20 Products</li>
                <li><Check size={14} /> Mobile Optimized Store</li>
                <li><Check size={14} /> Cart &amp; Checkout Setup</li>
                <li><Check size={14} /> Basic SEO</li>
                <li><Check size={14} /> WhatsApp Chat Integration</li>
                <li><Check size={14} /> AI-Based Product Optimization Setup</li>
              </ul>
              <a href="/contact" className="np-btn np-btn-green-light"><ArrowDownRight size={16} /> Launch My Store</a>
            </Reveal>

            <Reveal className="np-card np-card-orange">
              <div className="np-icon"><div className="icon-shape-orange" /></div>
              <h3>Custom PHP Plan &ndash; &#8377;9,999</h3>
              <p className="np-subtitle">For Custom Business Requirements</p>
              <ul>
                <li><Check size={14} /> Custom PHP Website</li>
                <li><Check size={14} /> Dynamic Database Integration</li>
                <li><Check size={14} /> Custom Admin Panel</li>
                <li><Check size={14} /> Advanced Features</li>
                <li><Check size={14} /> High-Speed Optimization</li>
                <li><Check size={14} /> Secure Code Structure</li>
                <li><Check size={14} /> API Integration</li>
                <li><Check size={14} /> AI Integration for Automation (Optional Add-on)</li>
              </ul>
              <a href="/contact" className="np-btn np-btn-dark"><ArrowDownRight size={16} /> Request Custom Quote</a>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-box">
          <div className="cta-glow" />
          <Reveal>
            <p className="eyebrow"><span />Your next chapter starts here</p>
            <h2>Ready to build something <em>remarkable?</em></h2>
            <p>Bring us the ambition. We&apos;ll bring the clarity, craft, and momentum.</p>
            <ButtonLink href="/contact">Let&apos;s talk <ArrowUpRight /></ButtonLink>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
