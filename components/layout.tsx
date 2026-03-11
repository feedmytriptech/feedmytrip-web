import type { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-syne',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm',
})

export const metadata: Metadata = {
  title: 'FeedMyTrip — Plan • Explore • Connect • Share',
  description:
    'The ultimate travel companion for city explorers. Plan trips, discover hidden gems, and share your adventures with a community that truly gets it.',
  metadataBase: new URL('https://feedmytrip.com'),
  openGraph: {
    title: 'FeedMyTrip — Coming Soon',
    description: 'Plan • Explore • Connect • Share. Something exciting is on the way.',
    url: 'https://feedmytrip.com',
    siteName: 'FeedMyTrip',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FeedMyTrip — Coming Soon',
    description: 'Plan • Explore • Connect • Share.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
