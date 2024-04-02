import styles from './treatments-item.module.css'

export default function TreatmentsItem({ itemData }) {
  const { title, price } = itemData

  return (
    <div className={styles.container}>
      <div className={styles.description}>{title}</div>
      <div className={styles.price}>{price}</div>
    </div>
  )
}
