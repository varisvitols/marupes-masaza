import styles from './treatments-item.module.css'

export default function TreatmentsItem({ itemData }) {
  const { titleLv, titleEn, price } = itemData

  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <div className={styles.left}>{titleLv}</div>
        <div className={styles.right}>{titleEn}</div>
      </div>
      <div className={styles.price}>{price}</div>
    </div>
  )
}
