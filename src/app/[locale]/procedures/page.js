import TreatmentsItem from '@/src/app/[locale]/_components/treatments-item'
import { promises as fs } from 'fs'

export default async function Procedures({ params: { locale } }) {
  const file = await fs.readFile(process.cwd() + '/src/data.json', 'utf8')
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

  return <main className="treatments">{treatments}</main>
}
