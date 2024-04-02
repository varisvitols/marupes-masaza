import { getTranslations } from 'next-intl/server'
import { Raleway } from 'next/font/google'
import '../globals.css'
import Header from './_components/header/header'
import Footer from './_components/footer/footer'

const raleway = Raleway({ subsets: ['latin-ext'] })

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'metadata' })

  return {
    title: t('title'),
    description: t('description'),
  }
}

export default function LocaleLayout({ children, params: { locale } }) {
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
