'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'

export function Reveal({ children, className = '', style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { node.classList.add('is-visible'); observer.disconnect() }
    }, { threshold: 0.12 })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])
  return <div ref={ref} className={`reveal ${className}`} style={style}>{children}</div>
}

export function SectionHeading({ eyebrow, title, copy, light = false }: { eyebrow: string; title: string; copy?: string; light?: boolean }) {
  return <div className={`section-heading ${light ? 'section-heading-light' : ''}`}>
    <p className="eyebrow"><span />{eyebrow}</p>
    <h2>{title}</h2>
    {copy && <p className="section-copy">{copy}</p>}
  </div>
}

export function ButtonLink({ children, href, secondary = false }: { children: React.ReactNode; href: string; secondary?: boolean }) {
  return <a href={href} className={`button-link ${secondary ? 'button-link-secondary' : ''}`}>{children}<ArrowRight aria-hidden="true" /></a>
}
