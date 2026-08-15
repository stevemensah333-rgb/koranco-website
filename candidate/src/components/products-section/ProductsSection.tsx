import { siteContent } from "../../content/siteContent"
import styles from "./ProductsSection.module.css"

export function ProductsSection() {
  return (
    <section className={styles.products} id="product">
      <div className={styles.intro}>
        <p className={styles.eyebrow}>{siteContent.products.eyebrow}</p>
        <h2>{siteContent.products.title}</h2>
        <a className={styles.cta} href="#contact">
          {siteContent.products.ctaLabel}
          <span aria-hidden="true">→</span>
        </a>
      </div>

      <div className={styles.cards}>
        {siteContent.products.cards.map((card, index) => (
          <article className={`${styles.card} ${styles[`card${index + 1}`]}`} key={card.title}>
            <img src={card.image} alt="" />
            <div className={styles.overlay} />
            <div className={styles.cardContent}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <div className={styles.tags}>
                {card.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
