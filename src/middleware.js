import createMiddleware from 'next-intl/middleware'
import { locales, localePrefix, pathnames } from './navigation'

export default createMiddleware({
  locales: ['lv', 'en'],
  defaultLocale: 'lv',
  localePrefix,
  locales,
  pathnames,
})

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(lv|en)/:path*'],
}
