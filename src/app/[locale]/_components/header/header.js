import Link from 'next/link'
import Navigation from '@/src/app/[locale]/_components/header/main-nav'
import styles from './header.module.css'
import LangNav from './lang-nav'

export default function Header() {
  return (
    <header className={styles.header}>
      <LangNav />
      <Link href="/">
        <h1 className="logo">Mārupes Masāža</h1>
      </Link>
      <Navigation />
    </header>
  )
}
