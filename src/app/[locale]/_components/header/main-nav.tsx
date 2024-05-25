import styles from './main-nav.module.css'
import { useTranslations } from 'next-intl'
import NavigationLink from './nav-link'

export default function MainNav() {
  const t = useTranslations('mainMenu')

  return (
    <nav className={styles.navigation}>
      <NavigationLink href="/">{t('myStory')}</NavigationLink>
      <NavigationLink href="/procedures">{t('procedures')}</NavigationLink>
      <NavigationLink href="/gallery">{t('gallery')}</NavigationLink>
    </nav>
  )
}
