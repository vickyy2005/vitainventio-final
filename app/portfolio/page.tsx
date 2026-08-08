'use client'

import { useState, useRef } from 'react'
import { ArrowRight, ArrowUpRight, MessageCircle, Laptop, ShieldCheck, Check } from 'lucide-react'
import { Reveal, ButtonLink } from '@/components/shared'

const showcasedProjects = [
  {
    title: 'CASA VISTA',
    tagline: 'Premium Fragrance Flagship Store',
    desc: 'An immersive digital flagship for a luxury fragrance brand, focusing on high conversion, elegant typography, and responsive micro-animations.',
    image: '/demo1.png',
    badgeText: 'Conversion Optimized',
    tech: 'React / Next.js / Tailwind'
  },
  {
    title: 'AURA INTERIORS',
    tagline: 'Modern Architectural Storefront',
    desc: 'A minimal, fluid grid-based luxury storefront showcasing curated designer items, custom furniture, and interior architectural models.',
    image: '/demo2.png',
    badgeText: 'Refined UI/UX',
    tech: 'TypeScript / Shopify / Framer'
  },
  {
    title: 'NORTHSTAR LOGISTICS',
    tagline: 'Supersonic Telemetry Command Center',
    desc: 'A high-performance operations dashboard console built to automate supply chain pipelines and monitor logistics assets in real time.',
    image: '/demo3.png',
    badgeText: '10x Speed Lift',
    tech: 'React / Go / WebSockets'
  }
]

const projects = [
  { category: 'eCommerce', title: 'Guru Ganesh Jewellers', text: 'Premium handcrafted fine jewelry store showcasing custom collections and traditional Indian ornaments.', video: '/guru-ganesh.mp4', link: 'https://3-3514.vercel.app' },
  { category: 'Websites', title: 'Anand Interiors', text: 'Premium PVC solutions, modular furniture, and custom interior design showcases for residential and commercial spaces.', video: '/anand-interiors.mp4', link: 'https://anandinterior.in' },
  { category: 'SaaS / Portals', title: 'Rajdeep Corporation', text: 'Industrial pipes, fittings, and valves manufacturer catalog showcasing product specs, blueprints, and query requests.', video: '/rajdeep-corp.mp4', link: 'https://rajdeepcorporation.com' },
  { category: 'Websites', title: 'Start Up Web Agency', text: 'A modern, fast-loading, and creative design agency landing page featuring premium dark aesthetics, clean copy, and interactive sound effects.', video: '/web-agency.mp4', link: 'https://vitainventio.vercel.app/' },
  { category: 'eCommerce', title: 'Amul Demo Newsletter', text: 'A clean, responsive newsletter showcase and customer FAQ portal designed to drive email sign-ups and resolve product inquiries.', video: '/amul-newsletter.mp4', link: 'https://amul-kool-newsletter-website-3d-ani.vercel.app/' }
]

const clientReviews = [
  {
    name: 'Rajdeep Corporation',
    project: 'Industrial Spec & Valves Catalog',
    image: '/review-rajdeep.jpg',
    logo: '/logo-rajdeep.png',
    tag: 'Industrial SaaS'
  },
  {
    name: 'From bowl to Soul Cafe',
    project: 'Cafe Booking & Menu Portal',
    image: '/review-bowl-to-soul.png',
    logo: '/logo-bowl-to-soul.png',
    tag: 'Restaurant Website'
  },
  {
    name: 'Guru Ganesh Jewellers',
    project: 'Fine Jewelry eCommerce Store',
    image: '/review-guru-ganesh.png',
    logo: '/logo-guru-ganesh.png',
    tag: 'Jewelry E-Commerce'
  },
  {
    name: 'Anand Interiors',
    project: 'PVC Solutions & Modular Design Showcase',
    image: '/review-anand.png',
    logo: '/logo-anand.jpg',
    tag: 'Design Showroom'
  }
]

export default function PortfolioPage() {
  const [activeShowcase, setActiveShowcase] = useState(0)
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  const currentShowcase = showcasedProjects[activeShowcase]

  const scrollToCatalog = () => {
    const catalogSection = document.getElementById('catalog-section')
    if (catalogSection) {
      catalogSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <main className="site-shell bg-dark-theme">
      
      {/* Featured Showcase Hero */}
      <section className="portfolio-hero-section">
        <div className="hero-grid" />
        <div className="container portfolio-hero-layout">
          
          <Reveal className="p-hero-left">
            <span className="eyebrow-lime-plain"><span className="status-dot" /> WEBSITE & SOFTWARE PORTFOLIO</span>
            <h1 style={{ textTransform: 'uppercase', fontStyle: 'normal' }}>
              Websites,<br />stores and<br />software<br />built to<br />
              <span className="about-highlight-word">grow.</span>
            </h1>
            <p className="p-hero-subtitle">
              Explore business websites, eCommerce stores, booking systems, custom portals, landing pages, and smart tools built to help brands look professional and generate enquiries.
            </p>

            <div className="p-hero-actions" style={{ marginTop: '30px' }}>
              <button onClick={scrollToCatalog} className="btn-lime">
                View Projects
              </button>
              <a href="https://wa.me/919175723038" target="_blank" rel="noopener noreferrer" className="btn-outline">
                <MessageCircle size={16} /> WhatsApp Us
              </a>
            </div>
          </Reveal>

          <Reveal className="p-hero-right">
            {/* Custom Interactive Browser Mockup */}
            <div className="p-mock-browser">
              <div className="browser-header">
                <div className="browser-dots">
                  <span className="dot-red" />
                  <span className="dot-yellow" />
                  <span className="dot-green" />
                </div>
                <div className="browser-address">vitainventio.dev/preview</div>
              </div>
              <div className="browser-screen">
                <video 
                  src="/amul-kool.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="browser-screenshot"
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
          </Reveal>

        </div>
      </section>

      {/* Catalog Filter Tabs */}
      <section id="catalog-section" className="portfolio-catalog-section">
        <div className="container">
          <Reveal className="catalog-header">
            <h2>Our Project <span className="about-highlight-word">Catalog</span></h2>
            <p>A few recent launches for teams with something important to say.</p>
          </Reveal>

          {/* Catalog Grid */}
          <div className="portfolio-grid-new">
            {projects.map((project, idx) => (
              <CatalogCard key={idx} project={project} />
            ))}
          </div>

        </div>
      </section>

      {/* Client Reviews Section */}
      <section className="reviews-section">
        <div className="container">
          <Reveal className="reviews-header">
            <span className="eyebrow-lime-plain">
              <span className="status-dot" /> VERIFIED REVIEWS
            </span>
            <h2>What our <span className="about-highlight-word">clients say</span></h2>
            <p>Real feedback from businesses we partner with. Hover over any review card to scroll, and click to view full size.</p>
          </Reveal>

          <div className="reviews-grid">
            {clientReviews.map((review, idx) => (
              <Reveal className="review-card" key={idx} style={{ transitionDelay: `${(idx % 2) * 0.1}s` }}>
                <div 
                  className="review-card-inner" 
                  onClick={() => setLightboxImage(review.image)}
                >
                  <div className="review-card-header">
                    <div className="review-meta">
                      {review.logo && (
                        <img 
                          src={review.logo} 
                          alt={`${review.name} Logo`} 
                          className="review-client-logo"
                        />
                      )}
                      <div className="review-meta-text">
                        <strong>{review.name}</strong>
                        <span className="review-project-name">{review.project}</span>
                      </div>
                    </div>
                    <div className="review-card-badge-wrap">
                      <div className="review-stars">★★★★★</div>
                      <span className="review-badge">{review.tag}</span>
                    </div>
                  </div>
                  
                  {/* Browser Mockup Casing */}
                  <div className="review-browser-mockup">
                    <div className="review-browser-bar">
                      <div className="review-browser-dots">
                        <span className="dot-red" />
                        <span className="dot-yellow" />
                        <span className="dot-green" />
                      </div>
                      <div className="review-browser-title">Inbox — Client Review</div>
                    </div>
                    <div className="review-screenshot-scrollable">
                      <img src={review.image} className="review-scroll-img" alt={`${review.name} Review`} />
                      <div className="review-hover-hint">
                        <span>Click to view full screenshot</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="lightbox-backdrop" onClick={() => setLightboxImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightboxImage(null)}>&times;</button>
            <img src={lightboxImage} alt="Expanded Review" />
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container cta-box">
          <div className="cta-glow" />
          <Reveal>
            <p className="eyebrow"><span></span> Ready to build?</p>
            <h2>Let's build something <span className="about-highlight-word">extraordinary</span> together.</h2>
            <p>Get in touch with our team to discuss your next big project.</p>
            <div style={{ marginTop: '24px' }}>
              <ButtonLink href="/contact">Start a Project <ArrowUpRight /></ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

    </main>
  )
}

function CatalogCard({ project }: { project: any }) {
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleMouseEnter = () => {
    if (videoRef.current) {
      // Play video only when hovered
      videoRef.current.play().catch(() => {})
    }
  }

  const handleMouseLeave = () => {
    if (videoRef.current) {
      // Pause video and restart/rewind to the beginning
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <Reveal>
      <div 
        className="catalog-card" 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
      >
        <div className="catalog-image-wrap">
          {'video' in project ? (
            <video 
              ref={videoRef}
              src={project.video} 
              loop 
              muted 
              playsInline 
              className="catalog-card-video"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : (
            <img src={project.image} alt={project.title} loading="lazy" />
          )}
          <span className="catalog-tag">{project.category}</span>
        </div>
        <div className="catalog-content">
          <h3>{project.title}</h3>
          <p>{project.text}</p>
          <div className="catalog-actions">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-card-primary">
              Live preview <ArrowUpRight size={14} />
            </a>
            <a href="/contact" className="btn-card-secondary">
              Get similar <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  )
}
