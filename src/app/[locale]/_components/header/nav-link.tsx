'use client'

import { ComponentProps } from 'react'
import { useSelectedLayoutSegment } from 'next/navigation'
import { Link, pathnames } from '@/src/navigation'
import styles from './nav-link.module.css'

export default function NavLink<Pathname extends keyof typeof pathnames>({
  href,
  ...rest
}: ComponentProps<typeof Link<Pathname>>) {
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
