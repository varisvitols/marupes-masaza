'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import styles from './navigation.module.css'

export default function Navigation({}) {
  const pathname = usePathname()
  const homepageLinkText = 'Mana masāžas filozofija'

  return (
    <nav className={styles.navigation}>
      {/* {pathname !== '/' && (
        <Link
          className={styles.link}
          href="/"
        >
          {homepageLinkText}
        </Link>
      )} */}
      <Link
        className={`${styles.link} ${pathname === '/procedures' ? styles.active : ''}`}
        href="/procedures"
      >
        Procedures
      </Link>
      <Link
        className={`${styles.link} ${pathname === '/proceduras' ? styles.active : ''}`}
        href="/proceduras"
      >
        Procedūras
      </Link>
    </nav>
  )
}
