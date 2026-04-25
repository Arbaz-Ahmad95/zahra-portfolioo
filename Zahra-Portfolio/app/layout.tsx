import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Zahra Fiaz | Web Developer & Shopify Expert',
  description: 'I build fast, modern websites and Shopify stores. Based in Lahore, Pakistan. Contact: zahrafiaz28@gmail.com',
}

import { ThemeProvider } from '@/context/ThemeContext'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Playfair Display for italic headings */}
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={jakarta.variable}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}