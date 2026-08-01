import type { Metadata } from 'next'
import { Golos_Text } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { site } from '@/data/site'
import './globals.css'

const golos = Golos_Text({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-golos',
  display: 'swap',
})

export const metadata: Metadata = {
  title: `${site.name} — прокат Suzuki Jimny Sierra на Камчатке`,
  description:
    'Свежие Suzuki Jimny Sierra в аренду в Петропавловске-Камчатском. Полный привод, АКПП, полный бак и снаряжение в багажнике. Доставка в аэропорт.',
  openGraph: {
    title: `${site.name} — прокат Suzuki Jimny Sierra на Камчатке`,
    description:
      'Свежие Suzuki Jimny Sierra в аренду в Петропавловске-Камчатском. Полный привод, АКПП, доставка в аэропорт.',
    locale: 'ru_RU',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={golos.variable}>
      <body className="bg-paper text-ink font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
