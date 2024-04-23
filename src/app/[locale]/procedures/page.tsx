import type { PageProps } from '@/.next/types/app/[locale]/page'
import type { TTreatmentsItem } from './types'
import type { TKeyValueString } from '@/types/generic'
import TreatmentsItem from './components/treatments-item'
import * as path from 'path'
import { promises as fs } from 'fs'
import styles from './procedures.module.css'
import Image from 'next/image'
import img2 from '@/public/gallery/gallery2.jpeg'
import img13 from '@/public/gallery/gallery13.jpeg'

export default async function Procedures({ params: { locale } }: PageProps) {
  const file = await fs.readFile(path.join(process.cwd(), 'data.json'), 'utf8')
  const data = JSON.parse(file)

  const treatments = data.treatments.map(
    (item: { title: TKeyValueString; price: TKeyValueString }) => {
      const currency = locale === 'es' ? 'usd' : 'eur'
      const title = item.title[locale]
      const price = item.price[currency]
      const itemData: TTreatmentsItem = {
        title,
        price,
      }

      if (title) {
        return (
          <TreatmentsItem
            key={Math.round(Math.random())}
            itemData={itemData}
          />
        )
      }
    }
  )

  return (
    <main className={styles.treatments}>
      {treatments}
      {/* <div>
        <Image
          src={img2}
          alt="Procedure"
          style={{ marginBottom: '2rem' }}
        />
      </div> */}
      {/* <div>
        <Image
          src={img13}
          alt="Procedure"
        />
      </div> */}
    </main>
  )
}
