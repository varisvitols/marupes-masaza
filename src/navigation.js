import { createLocalizedPathnamesNavigation } from 'next-intl/navigation'

export const locales = ['lv', 'en', 'es']
export const localePrefix = 'always'
export const pathnames = {
  '/': '/',
  '/procedures': {
    lv: '/proceduras',
    en: '/procedures',
    es: '/procedimientos',
  },
}

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames })
