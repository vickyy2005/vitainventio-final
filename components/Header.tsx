'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight, ArrowRight, Menu, X, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navItems } from './constants'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header className={`site-nav ${scrolled ? 'site-nav-scrolled' : ''}`}>
      <Link href="/" className="brand" aria-label="Vita Inventio" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
        <img src="/logo-symbol.png" alt="Vita Inventio Logo" style={{ height: '36px', width: 'auto' }} />
        <span className="brand-text" style={{ marginLeft: '0px', fontSize: '18px', fontWeight: '700', letterSpacing: '0.05em', fontFamily: 'var(--font-space)' }}>VITAINVENTIO</span>
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <div key={item.id} className="nav-item">
            <Link href={item.id} style={{ display: 'inline-flex', alignItems: 'center' }}>{item.label} {item.dropdown && <ChevronDown size={14} className="nav-chevron" style={{ marginLeft: '4px' }} />}</Link>
            {item.dropdown && (
              <div className="nav-dropdown">
                {item.dropdown.map(dropItem => (
                  <Link key={dropItem.label} href={dropItem.id}>{dropItem.label}</Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
      <Link href="/contact" className="nav-cta">Ready to Build</Link>
      <button className="menu-button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X /> : <Menu />}
      </button>
      {menuOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <div key={item.id}>
              <Link href={item.id}>
                {item.label}
                {item.dropdown ? <ChevronDown /> : <ArrowRight />}
              </Link>
              {item.dropdown && (
                <div className="mobile-nav-dropdown">
                  {item.dropdown.map(dropItem => (
                    <Link key={dropItem.label} href={dropItem.id}>— {dropItem.label}</Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link className="mobile-nav-cta" href="/contact">Ready to Build <ArrowRight /></Link>
        </nav>
      )}
    </header>
  )
}
