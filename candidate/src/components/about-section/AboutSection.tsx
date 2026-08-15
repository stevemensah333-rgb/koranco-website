import { siteContent } from "../../content/siteContent"
import styles from "./AboutSection.module.css"

export function AboutSection() {
  return (
    <section aria-labelledby="about-heading" className={`${styles.about} ${styles.visible}`} id="about">
      <div className={styles.intro}>
        <p className={styles.eyebrow}>{siteContent.about.eyebrow}</p>
        <h2 className={styles.statement} id="about-heading">
          {siteContent.about.statement}
        </h2>
      </div>

      <dl className={styles.stats}>
        {siteContent.about.stats.map((stat, index) => (
          <div className={styles.stat} key={stat.label}>
            {index > 0 ? <span aria-hidden="true" className={styles.separator} /> : null}
            <dt className={styles.value}>{stat.value}</dt>
            <dd className={styles.label}>{stat.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
