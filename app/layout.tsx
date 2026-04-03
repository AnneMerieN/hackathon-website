import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hack at UCI',
  description: 'UC Irvine\'s student-run hackathon organization — empowering students to learn, build, and grow.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
