import './globals.css'
import type { Metadata } from 'next'
import { Tilt_Neon } from 'next/font/google'

const inter = Tilt_Neon({ subsets: ['latin'], })

export const metadata: Metadata = {
  title: 'Denis Badura',
  description: 'Least reliable developer in Ostrava',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{minHeight: '100%', margin: '0'}} className={inter.className}>{children}</body>
    </html>
  )
}