import TreatmentsItem from '../../treatments-item'
import { promises as fs } from 'fs'

export default async function Home({ params: { locale } }) {
  const file = await fs.readFile(process.cwd() + '/src/data.json', 'utf8')
  const data = JSON.parse(file)

  const treatments = data.treatments.map((item) => (
    <TreatmentsItem
      key={Math.round(Math.random)}
      itemData={item}
      lang={locale}
    />
  ))

  return <main className="treatments">{treatments}</main>
}
