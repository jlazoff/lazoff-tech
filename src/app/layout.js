import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { SITE_URL } from '@/constants'
import Script from 'next/script'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Lazoff Tech — Software Engineering That Values Craft',
  description: 'Boutique software engineering since 2016. Goldman Sachs, MetaMask, Digital Twin Pro. A small number of clients. Full attention on every project.',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Lazoff Tech',
    title: 'Lazoff Tech — Software Engineering That Values Craft',
    description: 'Boutique software engineering since 2016. Goldman Sachs, MetaMask, Digital Twin Pro. A small number of clients. Full attention on every project.',
    images: [
      {
        url: '/assets/images/cover.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lazoff Tech — Software Engineering That Values Craft',
    description: 'Boutique software engineering since 2016. Goldman Sachs, MetaMask, Digital Twin Pro.',
    images: ['/assets/images/cover.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
    apple: '/apple-touch-icon.png',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      "name": "Lazoff Tech",
      "url": SITE_URL,
      "founder": {
        "@type": "Person",
        "name": "Joshua Lazoff"
      },
      "description": "Boutique software engineering consultancy since 2016."
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      "url": SITE_URL,
      name: "Lazoff Tech",
      description: 'Boutique software engineering since 2016. A small number of clients. Full attention on every project.',
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
      <body className={`${inter.variable} ${playfair.variable} ${inter.className}`}>{children}</body>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-XTW1L750YS"></Script>
      <Script id='gtm'>
        {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-XTW1L750YS');`}
      </Script>
    </html>
  )
}
