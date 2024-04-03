import type { TTreatmentsItem } from '../types'
import styles from './treatments-item.module.css'

type Props = {
  itemData: TTreatmentsItem
}

export default function TreatmentsItem({ itemData }: Props) {
  const { title, price } = itemData

  return (
    <div className={styles.container}>
      <div className={styles.description}>{title}</div>
      <div className={styles.price}>{price}</div>
    </div>
  )
}
