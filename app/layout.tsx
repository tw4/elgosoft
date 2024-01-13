import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import styles from './layout.module.css'
import { Footer } from './components/Footer/Footer'
import { Navbar } from './components/Navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ElgoSoft - Digital Agency',
  description: 'Elgosoft is a digital agency that helps companies to grow their business by providing them with the best software solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <main className={styles.mainLayout}>
        <Navbar/>
        <div className={styles.mainLayoutBody}>{children}</div>
        <Footer />
      </main>
      </body>
    </html>
  )
}
