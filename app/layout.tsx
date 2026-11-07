import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://agiftforyouuu.vercel.app'),
  title: 'a gift for bebo',
  description: 'A special  message for bebo 🤍',
  openGraph: {
    title: 'a gift for bebo! ',
    description: 'A special  message for bebo 🤍',
    url: 'https://agiftforyouuu.vercel.app',
    siteName: ' Gift',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'a gift for  bebo! 🎂',
    description: 'A special  message for bebo 🤍',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&family=Nunito:wght@300;400;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;1,400;1,600&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
