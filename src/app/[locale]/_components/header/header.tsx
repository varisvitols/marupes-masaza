import Navigation from '@/src/app/[locale]/_components/header/main-nav'
import LangNav from './lang-nav'
import Logo from './logo'
import styles from './header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <LangNav />
      <Logo />
      <Navigation />
    </header>
  )
}
