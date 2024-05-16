import './globals.css'
import type { Metadata } from 'next'
import { Tilt_Neon } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

const inter = Tilt_Neon({ subsets: ['latin'], })

export const metadata: Metadata = {
    title: 'Denis Badura - Software Developer from Ostrava',
    description: 'Least reliable developer in Ostrava',
    keywords: ['Software Developer, Software Engineer', 'Ostrava', 'Web Developer', 'Javascript', 'Typescript', 'HTML', 'CSS', 'Angular', 'Denis Badura', 'Badura']
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{minHeight: '100%', margin: '0'}} className={inter.className}>{children}</body>
      <Analytics />
    </html>
  )
}