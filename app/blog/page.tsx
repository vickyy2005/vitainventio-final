'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared'
import { blogPosts } from '@/lib/blog'

export default function BlogPage() {
  return (
    <main className="site-shell inner-page">
      <section id="blog" className="light-section blog-section">
        <div className="container">
          <Reveal>
            <div className="heading-row">
              <SectionHeading light eyebrow="From the journal" title="Ideas worth sharing." />
              <a href="#subscribe" className="text-link">Subscribe to newsletter <ArrowRight /></a>
            </div>
          </Reveal>
          <div className="blog-grid-new">
            {blogPosts.map((post, index) => (
              <Link href={`/blog/${post.slug}`} key={post.title} style={{ textDecoration: 'none', display: 'flex' }}>
                <Reveal className="blog-card-new" style={{ transitionDelay: `${(index % 3) * 0.08}s`, width: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div className="blog-image-wrap-new">
                    <img src={post.image} alt={post.title} loading="lazy" />
                    <span className="blog-tag-new">{post.category}</span>
                  </div>
                  <div className="blog-content-new">
                    <h3>{post.title}</h3>
                    <p>{post.desc}</p>
                    <div className="blog-footer-new">
                      <span>{post.time}</span>
                      <span className="blog-more-new">Read article <ArrowRight size={14} /></span>
                    </div>
                  </div>
                </Reveal>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
