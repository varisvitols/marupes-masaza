'use client'

import { useSelectedLayoutSegment } from 'next/navigation'
import { Link } from '@/src/navigation'
import styles from './navigation-link.module.css'

export default function NavigationLink({ href, ...rest }) {
  const selectedLayoutSegment = useSelectedLayoutSegment()
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/'
  const isActive = pathname === href

  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      href={href}
      className={`${styles.link} ${isActive ? styles.active : ''}`}
      {...rest}
    />
  )
}
