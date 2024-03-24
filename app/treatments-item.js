import styles from './treatments-item.module.css'

export default function TreatmentsItem({ itemData, lang }) {
  const { titleLv, titleEn, price, price2 } = itemData

  return (
    <div className={styles.container}>
      <div className={styles.description}>
        {lang === 'lv' ? titleLv : titleEn}
      </div>
      <div className={styles.price}>{lang === 'lv' ? price2 : price}</div>
    </div>
  )
}
