import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import ScrollProgress from '@/components/ui/ScrollProgress';
import BackToTop from '@/components/ui/BackToTop';

const inter = Inter({ subsets: ['latin'] })

import type { Metadata, Viewport } from 'next'; // Add Viewport import

export const metadata: Metadata = {
  metadataBase: new URL('https://your-portfolio-url.vercel.app'), // Replace with your actual Vercel URL
  title: 'Shashwat Singh Rathour - Software Developer & Technical Mentor',
  description: 'Portfolio of Shashwat Singh Rathour - Software Developer, IoT Specialist, and Technical Mentor. Gold medalist in AKTU Robotics competitions and experienced workshop leader.',
  keywords: ['Software Developer', 'IoT Specialist', 'Technical Mentor', 'Robotics', 'Web Development', 'Cloud Computing'],
  authors: [{ name: 'Shashwat Singh Rathour' }],
  creator: 'Shashwat Singh Rathour',
  publisher: 'Shashwat Singh Rathour',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://your-portfolio-url.vercel.app', // Replace with your actual URL
    title: 'Shashwat Singh Rathour - Software Developer & Technical Mentor',
    description: 'Portfolio of Shashwat Singh Rathour - Software Developer, IoT Specialist, and Technical Mentor',
    siteName: 'Shashwat Singh Portfolio',
    images: [
      {
        url: '/og-image.jpg', // We'll create this placeholder
        width: 1200,
        height: 630,
        alt: 'Shashwat Singh Rathour - Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shashwat Singh Rathour - Software Developer & Technical Mentor',
    description: 'Portfolio of Shashwat Singh Rathour - Software Developer, IoT Specialist, and Technical Mentor',
    images: ['/og-image.jpg'], // Same image for Twitter
  },
};

// Add this new viewport export
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#2563eb',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ScrollProgress />
        <Header />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  )
}