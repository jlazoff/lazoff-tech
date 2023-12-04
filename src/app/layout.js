import { Lato } from 'next/font/google'
import './globals.css'
import { SITE_URL } from '@/constants'

const lato = Lato({
  weight: ['100', '300', '400', '700', '900'],
  preload: false,
})

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Lazoff.Tech',
  description: 'Websites, Mobile Apps, and Custom Software Solutions',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    title: 'Lazoff.Tech',
    description: 'Websites, Mobile Apps, and Custom Software Solutions',
    images: [
      {
        url: '/assets/images/cover.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  link: [
    { rel: 'icon', href: '/favicon.ico' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto:ital,wght@0,400;0,700;1,400&display=swap',
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>{children}</body>
    </html>
  )
}
