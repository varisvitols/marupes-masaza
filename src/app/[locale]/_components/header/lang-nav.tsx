'use client'

import { useParams } from 'next/navigation'
import { Link } from '@/src/navigation'
import { locales } from '@/src/navigation'
import mainNavStyles from './main-nav.module.css'
import styles from './lang-nav.module.css'
import linkStyles from './nav-link.module.css'

export default function LangNav() {
  const params = useParams()

  const localeLinks = locales.map((locale) => (
    <Link
      key={locale}
      className={`${linkStyles.link} ${params.locale === locale ? linkStyles.active : ''}`}
      href="/"
      locale={locale}
    >
      {locale}
    </Link>
  ))

  return (
    <nav className={`${mainNavStyles.navigation} ${styles['lang-nav']}`}>
      {localeLinks}
    </nav>
  )
}
