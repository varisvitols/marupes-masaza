import {
  createLocalizedPathnamesNavigation,
  Pathnames,
} from 'next-intl/navigation'

export const locales = ['lv', 'en', 'es']
export const localePrefix = 'always'
export const pathnames = {
  '/': '/',
  '/procedures': {
    en: '/procedures',
    lv: '/proceduras',
    es: '/procedimientos',
  },
}

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames })
