'use client'

import { useSelectedLayoutSegment } from 'next/navigation'
import { Link } from '@/src/navigation'
import styles from './nav-link.module.css'

export default function NavLink({ href, ...rest }) {
  const selectedLayoutSegment = useSelectedLayoutSegment()
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/'
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={`${styles.link} ${isActive ? styles.active : ''}`}
      {...rest}
    />
  )
}
