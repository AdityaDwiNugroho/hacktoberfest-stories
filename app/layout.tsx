import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SEOHead from './components/SEOHead'
import Analytics from './components/Analytics'
import { Analytics as VercelAnalytics } from '@vercel/analytics/react'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true
})

export const metadata: Metadata = {
  title: {
    default: 'Iwan Motor | Service Motor Terpercaya Yogyakarta',
    template: '%s | Iwan Motor Yogyakarta'
  },
  description: 'Bengkel motor profesional di Yogyakarta dengan layanan service berkualitas, spare part original, teknisi berpengalaman 15+ tahun. Spesialis motor matic & manual. Hubungi +62 819-1553-9242',
  keywords: [
    'bengkel motor yogyakarta',
    'service motor jogja', 
    'iwan motor',
    'bengkel motor matic yogyakarta',
    'service motor bebek jogja',
    'spare part motor original',
    'teknisi motor berpengalaman',
    'service CVT yogyakarta',
    'tune up motor jogja',
    'ganti oli motor yogyakarta',
    'bengkel motor terdekat',
    'service motor murah yogyakarta'
  ],
  authors: [{ name: 'Iwan Motor', url: 'https://iwanmotor.com' }],
  creator: 'Iwan Motor',
  publisher: 'Iwan Motor',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://iwan-motor-git-main-adityaadn.vercel.app',
    languages: {
      'id-ID': 'https://iwan-motor-git-main-adityaadn.vercel.app',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://iwan-motor-git-main-adityaadn.vercel.app',
    title: 'Iwan Motor | Service Motor Terpercaya Yogyakarta',
    description: 'Bengkel motor profesional dengan layanan service berkualitas, spare part original, dan teknisi berpengalaman di Yogyakarta. Hubungi +62 819-1553-9242',
    siteName: 'Iwan Motor',
    images: [
      {
        url: 'https://iwan-motor-git-main-adityaadn.vercel.app/images/workshop-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Iwan Motor - Bengkel Motor Terpercaya Yogyakarta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Iwan Motor | Service Motor Terpercaya Yogyakarta',
    description: 'Bengkel motor profesional dengan layanan service berkualitas tinggi di Yogyakarta',
    images: ['https://iwan-motor-git-main-adityaadn.vercel.app/images/workshop-hero.jpg'],
    creator: '@iwanmotor',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/favicon.ico', sizes: '180x180', type: 'image/x-icon' },
    ],
    other: [
      { rel: 'mask-icon', url: '/favicon.svg', color: '#0ea5e9' },
    ],
  },
  category: 'business',
  classification: 'Automotive Repair Services',
  other: {
    'google-site-verification': 'your-google-verification-code',
    'msvalidate.01': 'your-bing-verification-code',
    'yandex-verification': 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id-ID" className="scroll-smooth">
      <head>
        <SEOHead />
        <Analytics />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Iwan Motor" />
        <meta name="application-name" content="Iwan Motor" />
        <meta name="msapplication-TileColor" content="#0ea5e9" />
        <meta name="theme-color" content="#0ea5e9" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/images/workshop-hero.jpg" as="image" type="image/jpeg" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        
        {/* Additional SEO tags */}
        <meta name="geo.region" content="ID-DI" />
        <meta name="geo.placename" content="Yogyakarta" />
        <meta name="geo.position" content="-7.8543921;110.3566719" />
        <meta name="ICBM" content="-7.8543921, 110.3566719" />
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        {children}
        <VercelAnalytics />
      </body>
    </html>
  )
}
