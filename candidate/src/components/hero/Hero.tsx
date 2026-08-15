import { SlidingArrow } from "../sliding-arrow/SlidingArrow"
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
          src="/assets/images/w8BxcgOTdrnm1oAx9APIWHAr7Y.png"
          width="2880"
        />
      </div>
      <div aria-hidden="true" className={styles.overlay} />

      <div className={styles.content}>
        <div className={styles.titleGroup}>
          <div className={styles.eyebrow}>Smart farming solutions</div>
          <h1 className={styles.title}>
            Innovative Technology for Agricultural Growth
          </h1>
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
                src="/assets/misc/Np45wly46PBKqCGM0tXpdJqVAo.mp4"
                type="video/mp4"
              />
            </video>
            <div className={styles.videoText}>
              <p className={styles.videoTitle}>Farming in Motion</p>
              <p className={styles.videoDescription}>
                Real-time insights driving smarter decisions.
              </p>
            </div>
          </article>

          <div className={styles.descriptionGroup} data-testid="hero-description">
            <p className={styles.description}>
              Koranco Farms delivers smart farming solutions to improve productivity
              and promote sustainable agricultural growth.
            </p>
            <a className={styles.primaryButton} href={contactHref}>
              <span>Ger started</span>
              <SlidingArrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
