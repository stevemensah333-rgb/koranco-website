"use client"

import { useEffect, useState } from "react"
import { siteContent } from "../../content/siteContent"
import styles from "./TestimonialsSection.module.css"

const cardCount = siteContent.testimonials.cards.length
const streamCards = [
  ...siteContent.testimonials.cards,
  ...siteContent.testimonials.cards,
  ...siteContent.testimonials.cards,
]

function getTrackTransform(index: number) {
  const baseIndex = cardCount
  const delta = index - baseIndex
  if (typeof window === "undefined") return "translateX(-732.578px)"
  if (window.innerWidth <= 767.98) return `translateX(${-354 - delta * 374}px)`
  if (window.innerWidth <= 900) return `translateX(${-702 - delta * 732}px)`
  if (window.innerWidth <= 1199.98) return `translateX(${-958 - delta * 988}px)`
  return `translateX(${-732.578 - delta * 790.578}px)`
}

export function TestimonialsSection() {
  const [streamIndex, setStreamIndex] = useState<number>(cardCount)
  const [trackTransform, setTrackTransform] = useState(getTrackTransform(cardCount))
  const [isResetting, setIsResetting] = useState(false)
  const activeIndex = ((streamIndex - cardCount) % cardCount + cardCount) % cardCount

  useEffect(() => {
    const updateTransform = () => setTrackTransform(getTrackTransform(streamIndex))
    updateTransform()
    window.addEventListener("resize", updateTransform)
    return () => window.removeEventListener("resize", updateTransform)
  }, [streamIndex])

  useEffect(() => {
    const timer = window.setInterval(() => {
      setStreamIndex((index) => Math.min(index + 1, cardCount * 2))
    }, 2000)
    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    if (streamIndex !== cardCount * 2) return
    const timer = window.setTimeout(() => {
      setIsResetting(true)
      setTrackTransform(getTrackTransform(cardCount))
      setStreamIndex(cardCount)
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => setIsResetting(false))
      })
    }, 720)
    return () => window.clearTimeout(timer)
  }, [streamIndex])

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
        <div
          className={`${styles.track} ${isResetting ? styles.trackResetting : ""}`}
          onTransitionEnd={(event) => {
            if (event.propertyName === "transform" && streamIndex === cardCount * 2) {
              setIsResetting(true)
              setTrackTransform(getTrackTransform(cardCount))
              setStreamIndex(cardCount)
              window.requestAnimationFrame(() => {
                window.requestAnimationFrame(() => setIsResetting(false))
              })
            }
          }}
          style={{ transform: trackTransform }}
        >
          {streamCards.map((card, index) => (
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
            onClick={() => setStreamIndex(cardCount + index)}
            type="button"
          >
            <span />
          </button>
        ))}
      </div>
    </section>
  )
}
