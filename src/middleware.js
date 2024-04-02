import createMiddleware from 'next-intl/middleware'
import { locales, localePrefix, pathnames } from './navigation'

export default createMiddleware({
  localePrefix,
  locales,
  pathnames,
  defaultLocale: 'lv',
})

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(lv|en|es)/:path*'],
}
