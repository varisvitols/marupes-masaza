import type { PageProps } from '@/.next/types/app/[locale]/page'
import Gallery from './components/gallery'
import styles from './gallery.module.css'

export default async function GalleryPage({ params: { locale } }: PageProps) {
  return (
    <main className={styles.gallery}>
      <div>
        <Gallery />
      </div>
    </main>
  )
}
