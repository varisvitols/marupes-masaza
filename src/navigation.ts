import type { Pathnames } from 'next-intl/navigation'
import { createLocalizedPathnamesNavigation } from 'next-intl/navigation'

export const locales = ['lv', 'en', 'es'] as const
export const localePrefix = 'always'
export const pathnames = {
  '/': '/',
  '/procedures': {
    lv: '/proceduras',
    en: '/procedures',
    es: '/procedimientos',
  },
  '/gallery': {
    lv: '/galerija',
    en: '/gallery',
    es: '/galería',
  },
} satisfies Pathnames<typeof locales>

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames })
