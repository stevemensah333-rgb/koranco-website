import { SlidingArrow } from "../sliding-arrow/SlidingArrow"
import { siteContent } from "../../content/siteContent"
import styles from "./Hero.module.css"

export function Hero({ legacyBaseUrl }: { legacyBaseUrl: string }) {
  const contactHref = `${legacyBaseUrl.replace(/\/$/, "")}/contact-us`

  return (
    <section className={styles.hero} id="home">
      <div aria-hidden="true" className={styles.background}>
        <img
          alt=""
          className={styles.backgroundImage}
          height="1600"
          src={siteContent.hero.backgroundImage}
          width="2880"
        />
      </div>
      <div aria-hidden="true" className={styles.overlay} />

      <div className={styles.content}>
          <div className={styles.titleGroup}>
          <div className={styles.eyebrow}>{siteContent.hero.eyebrow}</div>
          <h1 className={styles.title}>{siteContent.hero.title}</h1>
        </div>

        <div className={styles.lowerRegion}>
          <article className={styles.videoCard}>
            <video
              autoPlay
              className={styles.video}
              data-testid="hero-video"
              loop
              muted
              playsInline
              preload="auto"
            >
              <source
                src={siteContent.hero.videoSource}
                type="video/mp4"
              />
            </video>
            <div className={styles.videoText}>
              <p className={styles.videoTitle}>{siteContent.hero.videoTitle}</p>
              <p className={styles.videoDescription}>{siteContent.hero.videoDescription}</p>
            </div>
          </article>

          <div className={styles.descriptionGroup} data-testid="hero-description">
            <p className={styles.description}>{siteContent.hero.description}</p>
            <a className={styles.primaryButton} href={contactHref}>
              <span>{siteContent.hero.ctaLabel}</span>
              <SlidingArrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
