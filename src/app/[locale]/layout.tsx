import type { Metadata } from 'next'
import type { LayoutProps } from '@/.next/types/app/[locale]/layout'
import { getTranslations } from 'next-intl/server'
import { Raleway } from 'next/font/google'
import Header from './_components/header/header'
import Footer from './_components/footer/footer'
import '../globals.css'

const raleway = Raleway({ subsets: ['latin-ext'] })

type Props = {
  params: { locale: string }
}

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'metadata' })

  return {
    title: t('title'),
    description: t('description'),
  }
}

export default function LocaleLayout({
  children,
  params: { locale },
}: LayoutProps) {
  return (
    <html lang={locale}>
      <body className={raleway.className}>
        <div className="page-container">
          <div className="page-content">
            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
