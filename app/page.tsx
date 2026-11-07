import type { Metadata } from 'next'
import giftData from '@/lib/giftData'
import GiftClient from '@/components/GiftClient'

export const metadata: Metadata = {
  metadataBase: new URL('https://agiftforyouuu.vercel.app'),
  title: 'a gift for bebo! ',
  description: 'A special  message for bebo 🤍',
  openGraph: {
    title: 'a gift for  bebo! ',
    description: 'A special  message for bebo 🤍',
    url: 'https://agiftforyouuu.vercel.app',
    siteName: 'Birthday Gift',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'a gift for bebo!',
    description: 'A special  message for bebo 🤍',
  },
}

export default function Home() {
  const data = giftData.ahmed || giftData.amir
  return <GiftClient data={data} />
}