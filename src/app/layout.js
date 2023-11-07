import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lazoff.Tech',
  description: 'Lazoff.Tech Luxury Websites, Mobile Apps, and Custom Software',
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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
