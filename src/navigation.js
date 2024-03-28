import {
  createLocalizedPathnamesNavigation,
  Pathnames,
} from 'next-intl/navigation'

export const locales = ['lv', 'en']
export const localePrefix = 'always'
export const pathnames = {
  '/': '/',
  '/procedures': {
    en: '/procedures',
    lv: '/proceduras',
  },
}

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames })
