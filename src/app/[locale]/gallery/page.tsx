import type { PageProps } from '@/.next/types/app/[locale]/page'
import Gallery from './components/gallery'

export default async function GalleryPage({ params: { locale } }: PageProps) {
  return (
    <main>
      <div>
        <Gallery />
      </div>
    </main>
  )
}
