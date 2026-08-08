'use client'

import Link from 'next/link'
import { navItems } from './constants'
import { Send } from 'lucide-react'
import { FormEvent, useState } from 'react'

export function Footer() {
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubscribed(subscribed => !subscribed)
  }

  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-brand-col">
          <Link href="/" className="brand" aria-label="Vita Inventio">
            <img src="/logo-symbol.png" alt="Vita Inventio Logo" className="footer-logo-img" />
            <span className="brand-text footer-brand-text">VITAINVENTIO</span>
          </Link>
          <p className="footer-brand-desc">Digital experiences for companies ready to move forward.</p>
        </div>
        
        <div className="footer-col">
          <strong>Explore</strong>
          <div className="footer-col-links">
            {navItems.slice(1, 5).map((item) => (
              <Link href={item.id} key={item.id}>
                <span className="footer-link-bullet">•</span> {item.label}
              </Link>
            ))}
          </div>
        </div>
        
        <div className="footer-col">
          <strong>Connect</strong>
          <div className="footer-col-links">
            <a href="mailto:vitainventio@gmail.com"><span className="footer-link-bullet">•</span> Email us</a>
            <a href="https://linkedin.com"><span className="footer-link-bullet">•</span> LinkedIn</a>
            <a href="https://instagram.com"><span className="footer-link-bullet">•</span> Instagram</a>
          </div>
        </div>

        <div className="footer-subscribe-col">
          <strong>Stay Updated</strong>
          {subscribed ? (
            <p className="footer-sub-done">Thanks for subscribing!</p>
          ) : (
            <>
              <p className="footer-subscribe-desc">Insights on Next.js, AI automation, and spatial interfaces.</p>
              <form className="footer-subscribe-form" onSubmit={handleSubmit}>
                <input required type="email" placeholder="Email address" className="footer-sub-input" aria-label="Email address" />
                <button type="submit" className="footer-sub-btn" aria-label="Submit newsletter subscribe form"><Send size={11} /></button>
              </form>
            </>
          )}
        </div>
      </div>
      
      <div className="container footer-bottom">
        <span>© 2026 Vita Inventio. All rights reserved.</span>
        <span>Built with intention <span className="brand-dot footer-brand-dot">•</span></span>
      </div>
    </footer>
  )
}

