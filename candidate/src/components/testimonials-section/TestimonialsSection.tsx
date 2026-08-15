"use client"

import { useEffect, useState } from "react"
import { siteContent } from "../../content/siteContent"
import styles from "./TestimonialsSection.module.css"

const carouselCards = [
  siteContent.testimonials.cards[siteContent.testimonials.cards.length - 1],
  ...siteContent.testimonials.cards,
]

function getTrackTransform(index: number) {
  if (typeof window === "undefined") return "translateX(-732.578px)"
  if (window.innerWidth <= 767.98) return `translateX(${-354 - index * 374}px)`
  if (window.innerWidth <= 900) return `translateX(${-702 - index * 732}px)`
  if (window.innerWidth <= 1199.98) return `translateX(${-958 - index * 988}px)`
  return `translateX(${-732.578 - index * 790.578}px)`
}

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [trackTransform, setTrackTransform] = useState("translateX(-732.578px)")

  useEffect(() => {
    const updateTransform = () => setTrackTransform(getTrackTransform(activeIndex))
    updateTransform()
    window.addEventListener("resize", updateTransform)
    return () => window.removeEventListener("resize", updateTransform)
  }, [activeIndex])

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % siteContent.testimonials.cards.length)
    }, 1500)
    return () => window.clearInterval(timer)
  }, [])

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
        <div className={styles.track} style={{ transform: trackTransform }}>
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
          <button
            aria-current={activeIndex === index ? "true" : undefined}
            aria-label={`Show testimonial ${index + 1}`}
            className={styles.dot}
            key={card.name}
            onClick={() => setActiveIndex(index)}
            type="button"
          >
            <span />
          </button>
        ))}
      </div>
    </section>
  )
}
