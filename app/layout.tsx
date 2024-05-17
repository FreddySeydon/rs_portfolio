import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import localFont from 'next/font/local'

const inter = Inter({ subsets: ['latin'] })
const oswald = localFont({
  src: './Oswald-VariableFont_wght.woff2',
  display: 'swap',
  variable: '--oswald'
})
const roboto = localFont({
  src: [
    {
      path: './Roboto-Bold.woff2',
      weight: '400',
      style: 'bold'
    },
    {
      path: './Roboto-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: './Roboto-MediumItalic.woff2',
      weight: '400',
      style: 'italic'
    },
  ],
  display: 'swap',
  variable: '--roboto'
})

export const metadata: Metadata = {
  title: 'Renja Schmakeit - Portfolio',
  description: 'Web- and App-Development Portfolio of Renja Schmakeit',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='scroll-smooth' lang="en">
      <body className={`${oswald.className} flex flex-col justify-center items-center`} style={{overflowX:"auto", minWidth: 300}}>{children}</body>
    </html>
  )
}
