import TreatmentsItem from '@/src/app/[locale]/_components/treatments-item'
import * as path from 'path'
import { promises as fs } from 'fs'
import styles from './procedures.module.css'

export default async function Procedures({ params: { locale } }) {
  const file = await fs.readFile(path.join(process.cwd(), 'data.json'), 'utf8')
  const data = JSON.parse(file)

  const treatments = data.treatments.map((item) => {
    const currency = locale === 'es' ? 'usd' : 'eur'
    const title = item.title[locale]
    const price = item.price[currency]
    const itemData = {
      title,
      price,
    }

    if (title) {
      return (
        <TreatmentsItem
          key={Math.round(Math.random)}
          itemData={itemData}
        />
      )
    }
  })

  return <main className={styles.treatments}>{treatments}</main>
}
