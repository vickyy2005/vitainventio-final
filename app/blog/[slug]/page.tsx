'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, User, Send } from 'lucide-react'
import { blogPosts } from '@/lib/blog'
import { Reveal } from '@/components/shared'
import { useState, FormEvent } from 'react'

export default function BlogPostDetail() {
  const params = useParams()
  const slug = params.slug as string
  const post = blogPosts.find(p => p.slug === slug)
  
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault()
    setSubscribed(true)
  }

  if (!post) {
    return (
      <main className="site-shell pt-[120px] pb-[100px]">
        <div className="container" style={{ textAlign: 'center', padding: '100px 0' }}>
          <h1 style={{ fontSize: '32px', marginBottom: '20px' }}>Article Not Found</h1>
          <p style={{ color: '#aaa', marginBottom: '40px' }}>The post you are looking for does not exist or has been moved.</p>
          <Link href="/blog" className="button-link" style={{ textDecoration: 'none' }}>
            Back to Journal
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="site-shell pt-[84px]">
      <section className="article-section">
        <div className="article-container">
          <Reveal>
            <Link href="/blog" className="article-back-link">
              <ArrowLeft size={16} /> Back to Journal
            </Link>
          </Reveal>

          <Reveal className="article-header">
            <span className="article-category-badge">{post.category}</span>
            <h1>{post.title}</h1>
            <p className="article-desc">{post.desc}</p>
            
            <div className="article-meta">
              <div className="article-author">
                <img src={post.author.avatar} alt={post.author.name} />
                <div>
                  <strong>{post.author.name}</strong>
                  <span>{post.author.role}</span>
                </div>
              </div>
              <div className="article-stats">
                <div>
                  <Calendar size={14} />
                  <span>{post.date}</span>
                </div>
                <div>
                  <Clock size={14} />
                  <span>{post.time}</span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="article-cover">
            <img src={post.image} alt={post.title} />
          </Reveal>

          <Reveal className="article-body-wrap">
            <div 
              className="article-body-content" 
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />
          </Reveal>

          <Reveal className="article-footer-box">
            {subscribed ? (
              <div className="article-sub-success">
                <h3>You're on the list!</h3>
                <p>Thanks for subscribing. We'll send insights once a week.</p>
              </div>
            ) : (
              <div className="article-sub-form-wrap">
                <div className="sub-text-column">
                  <h3>Get weekly technology logs</h3>
                  <p>Strictly practical articles on Next.js, AI automation, and spatial interfaces.</p>
                </div>
                <form className="sub-form-row" onSubmit={handleSubscribe}>
                  <input required type="email" placeholder="you@domain.com" aria-label="Email address" />
                  <button type="submit">Subscribe <Send size={14} /></button>
                </form>
              </div>
            )}
          </Reveal>
        </div>
      </section>
    </main>
  )
}
