'use client'

import { FormEvent, useState } from 'react'
import { ArrowRight, Check, Send, ChevronDown } from 'lucide-react'
import { Reveal, SectionHeading, ButtonLink } from '@/components/shared'

const faqs = [
  ['What kind of projects do you take on?', 'We partner with ambitious teams on high-impact websites, digital products, eCommerce experiences, and practical AI automation systems.'],
  ['How do you work with in-house teams?', 'We can lead the entire engagement or plug into your existing team as a focused design and development partner.'],
  ['How long does a typical project take?', 'Most focused launches take 4–8 weeks. Larger platforms are planned in clear milestones so value ships early and often.'],
  ['Do you offer ongoing support?', 'Yes. Our care plans cover iteration, performance, experiments, and the small improvements that compound after launch.'],
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [activeFaq, setActiveFaq] = useState(-1)

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSending(true)
    setErrorMsg('')
    
    const formData = new FormData(e.currentTarget)
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      type: formData.get('type') || 'Not Specified',
      message: formData.get('message'),
    }

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const data = await res.json()
      if (res.ok) {
        setSubmitted(true)
      } else {
        setErrorMsg(data.error || 'Failed to send message. Please try again.')
      }
    } catch (err) {
      console.error(err)
      setErrorMsg('A network error occurred. Please check your connection.')
    } finally {
      setSending(false)
    }
  }

  return (
    <main className="site-shell inner-page">
      <section id="contact" className="dark-section contact-section">
        <div className="container contact-layout">
          <Reveal className="contact-intro">
            <SectionHeading 
              light 
              eyebrow="Let's talk" 
              title="Have a good one?" 
              copy="Tell us a little about what you're building. We usually reply within one business day." 
            />
            <div className="contact-details">
              <a href="mailto:vitainventio@gmail.com"><span>Email</span>vitainventio@gmail.com</a>
              <a href="tel:+919175723038"><span>Phone</span>+91-9175723038</a>
              <a href="#contact"><span>Based in</span>Mumbai, Maharashtra, India</a>
            </div>
          </Reveal>
          
          <Reveal className="contact-form-wrap">
            {submitted ? (
              <div className="form-success">
                <span className="success-icon"><Check /></span>
                <h3>Message received.</h3>
                <p>Thanks for reaching out. We'll be in touch shortly.</p>
                <button onClick={() => setSubmitted(false)}>Send another message <ArrowRight /></button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={submit}>
                <div className="form-row">
                  <label>Name<input required name="name" placeholder="Your name" /></label>
                  <label>Email<input required type="email" name="email" placeholder="you@company.com" /></label>
                </div>
                <div className="form-row">
                  <label>Phone<input name="phone" placeholder="Optional" /></label>
                  <label>
                    Project type
                    <select name="type" defaultValue="">
                      <option value="" disabled>Select one</option>
                      <option>Website</option>
                      <option>Digital product</option>
                      <option>AI automation</option>
                      <option>Something else</option>
                    </select>
                  </label>
                </div>
                <label>
                  What are you looking to build?
                  <textarea required name="message" placeholder="A few words about the project, goals, and timing..." rows={5} />
                </label>
                {errorMsg && (
                  <p style={{ color: '#ff4444', fontSize: '13px', margin: '0 0 10px', fontWeight: '500' }}>
                    {errorMsg}
                  </p>
                )}
                <button disabled={sending} className="button-link form-submit" type="submit">
                  {sending ? 'Sending...' : 'Send inquiry'} <Send />
                </button>
                <p className="form-privacy">Your information stays private. No spam, ever.</p>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      <section className="light-section faq-section">
        <div className="container faq-layout">
          <Reveal>
            <SectionHeading 
              eyebrow="Questions, answered" 
              title="The useful stuff." 
              copy="Still curious? Drop us a note and we'll get back to you with a straight answer." 
            />
            <ButtonLink href="/contact">Ask us anything</ButtonLink>
          </Reveal>
          <Reveal className="faq-list">
            {faqs.map(([question, answer], index) => (
              <div className={`faq-item ${activeFaq === index ? 'faq-open' : ''}`} key={question}>
                <button onClick={() => setActiveFaq(activeFaq === index ? -1 : index)} aria-expanded={activeFaq === index}>
                  <span>{question}</span><ChevronDown />
                </button>
                <div className="faq-answer"><p>{answer}</p></div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </main>
  )
}
