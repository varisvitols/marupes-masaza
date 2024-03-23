import styles from '../about.module.css'
import { promises as fs } from 'fs'

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/app/data.json', 'utf8')
  const data = JSON.parse(file)

  const enTextItems = data.info.en.map((item) => {
    if (item.style === 'italic') {
      return (
        <p key={item.id}>
          <i>{item.text}</i>
        </p>
      )
    }

    return <p key={item.id}>{item.text}</p>
  })

  return (
    <main className={styles.about}>
      <div
        className={styles.aboutItem}
        style={{ whiteSpace: 'pre-wrap' }}
      >
        {enTextItems}
      </div>
    </main>
  )
}
