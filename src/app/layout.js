import { Lato } from 'next/font/google'
import './globals.css'
import { SITE_URL } from '@/constants'
import Script from 'next/script'

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

const jsonLd = {
  '@context': 'https://schema.org',
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      "name": "Lazoff.Tech",
      "url": SITE_URL
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      "url": SITE_URL,
      name: "Lazoff.Tech",
      description: 'Websites, Mobile Apps, and Custom Software Solutions',
      "inLanguage": "en-US"
    }
  ]
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={lato.className}>{children}</body>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-XTW1L750YS"></Script>
      <Script id='gtm'>
        {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-XTW1L750YS');`}
      </Script>
    </html>
  )
}
