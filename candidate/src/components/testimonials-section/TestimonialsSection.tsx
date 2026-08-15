import { siteContent } from "../../content/siteContent"
import styles from "./TestimonialsSection.module.css"

const carouselCards = [
  siteContent.testimonials.cards[siteContent.testimonials.cards.length - 1],
  ...siteContent.testimonials.cards,
]

export function TestimonialsSection() {
  return (
    <section aria-labelledby="testimonials-heading" className={styles.testimonials} id="testimonial">
      <div className={styles.intro}>
        <div className={styles.introCopy}>
          <p className={styles.eyebrow}>{siteContent.testimonials.eyebrow}</p>
          <h2 id="testimonials-heading">{siteContent.testimonials.title}</h2>
        </div>
        <p className={styles.description}>{siteContent.testimonials.description}</p>
      </div>

      <div className={styles.carouselViewport}>
        <div className={styles.track}>
          {carouselCards.map((card, index) => (
            <article className={styles.card} key={`${card.name}-${index}`}>
              <div className={styles.cardCopy}>
                <span aria-hidden="true" className={styles.quoteMark}>
                  “
                </span>
                <blockquote className={styles.quoteText}>{card.quote}</blockquote>
                <p className={styles.name}>{card.name}</p>
                <p className={styles.role}>{card.role}</p>
              </div>
              <img alt={card.alt} className={styles.image} src={card.image} />
            </article>
          ))}
        </div>
      </div>

      <div aria-label="Testimonials slides" className={styles.pagination} role="group">
        {siteContent.testimonials.cards.map((card, index) => (
          <button aria-label={`Show testimonial ${index + 1}`} className={styles.dot} key={card.name} type="button">
            <span />
          </button>
        ))}
      </div>
    </section>
  )
}
