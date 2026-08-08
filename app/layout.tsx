import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { SoundProvider } from '@/components/SoundProvider'
import { WhatsAppWidget } from '@/components/WhatsAppWidget'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' })

export const metadata: Metadata = {
  title: 'Vita Inventio — Digital experiences that move business forward',
  description: 'Vita Inventio is a premium web development and AI automation agency for ambitious teams.',
  generator: 'v0.app',
  metadataBase: new URL('https://vitainventio.com'),
  openGraph: {
    title: 'Vita Inventio — Digital experiences that move business forward',
    description: 'Premium websites, AI automation systems, and digital products for ambitious teams.',
    type: 'website',
    siteName: 'Vita Inventio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vita Inventio — Digital experiences that move business forward',
    description: 'Premium websites, AI automation systems, and digital products for ambitious teams.',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0d0d0d',
  userScalable: true,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Vita Inventio',
    url: 'https://vitainventio.com',
    description: 'Premium web development and AI automation agency.',
    email: 'hello@vitainventio.com',
  }

  return (
    <html lang="en" className="bg-[#0d0d0d] scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        <SoundProvider />
        <Header />
        {children}
        <Footer />
        <WhatsAppWidget />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
