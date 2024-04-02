import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import styles from './logo.module.css'
import logoImg from '@/public/half-a-sun1.png'

export default function Logo() {
  const t = useTranslations('metadata')

  return (
    <Link
      className={styles.logo}
      href="/"
    >
      <Image
        src={logoImg}
        width={118}
        height={60}
        alt={`${t('title')} Logo`}
      />
      <div className={styles['logo-text']}>{t('title')}</div>
    </Link>
  )
}
