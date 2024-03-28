import styles from './navigation.module.css'
import { useTranslations } from 'next-intl'
import NavigationLink from './navigation-link'

export default function Navigation() {
  const t = useTranslations('mainMenu')

  return (
    <nav className={styles.navigation}>
      <NavigationLink href="/">{t('myStory')}</NavigationLink>
      <NavigationLink href="/procedures">{t('procedures')}</NavigationLink>
    </nav>
  )
}
