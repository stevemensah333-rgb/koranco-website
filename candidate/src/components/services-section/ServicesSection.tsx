"use client"

import { Fragment, useEffect, useRef, useState } from "react"
import { siteContent } from "../../content/siteContent"
import styles from "./ServicesSection.module.css"

const backgroundImages = [
  "/assets/images/PvCp32weG5JkDiZA50WLEDc33S0.png",
  "/assets/images/o4O1rkfHcP4NVZLe6RUPh9ju8.png",
  "/assets/images/Yn65LO0TzUXQEx7nFLupeZxycUo.png",
  "/assets/images/kU1LyGOp2lq412yFefbraS0A.png",
  "/assets/images/znwoT9yqd0qIIlVsLEnXZRi3zU.png",
] as const

const serviceImagePositions = ["50% 52%", "50% 56%", "50% 42%", "50% 50%", "50% 58%"] as const

function ServiceHeading() {
  return (
    <h2>
      {siteContent.services.title.split(" ").map((word, index, words) => (
        <Fragment key={`${word}-${index}`}>
          <span>{word}</span>
          {index < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </h2>
  )
}

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const updateStage = () => {
      const section = sectionRef.current
      if (!section) return
      const bounds = section.getBoundingClientRect()
      const progress = Math.min(1, Math.max(0, -bounds.top / Math.max(1, bounds.height - window.innerHeight)))
      setActiveIndex(Math.min(siteContent.services.stages.length - 1, Math.floor(progress * siteContent.services.stages.length)))
    }

    updateStage()
    window.addEventListener("scroll", updateStage, { passive: true })
    window.addEventListener("resize", updateStage)
    const interval = window.setInterval(updateStage, 80)
    return () => {
      window.removeEventListener("scroll", updateStage)
      window.removeEventListener("resize", updateStage)
      window.clearInterval(interval)
    }
  }, [])

  return (
    <section className={styles.services} id="service" ref={sectionRef}>
      <div className={styles.mobileIntro}>
        <p className={styles.eyebrow}>{siteContent.services.eyebrow}</p>
        <ServiceHeading />
      </div>

      <div className={styles.desktopSticky}>
        <div aria-hidden="true" className={styles.backdrop}>
          {backgroundImages.map((image, index) => (
            <div
              className={`${styles.backdropLayer} ${index === activeIndex ? styles.backdropLayerActive : ""}`}
              key={image}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>
        <div className={styles.scrim} />
        <div className={styles.desktopIntro}>
          <p className={styles.eyebrow}>{siteContent.services.eyebrow}</p>
          <ServiceHeading />
        </div>
        <div className={styles.stageCard}>
          {siteContent.services.stages.map((stage, index) => (
            <article className={`${styles.stage} ${index === activeIndex ? styles.active : ""}`} key={stage.title}>
              <img alt="" src={stage.image} style={{ objectPosition: serviceImagePositions[index] }} />
              <div className={styles.stageBody}>
                <h3>{stage.title}</h3>
                <p>{stage.description}</p>
              </div>
            </article>
          ))}
        </div>
        <div className={styles.stageMeta}>
          <span>{String(activeIndex + 1).padStart(2, "0")}/05</span>
          <span>[ Keep Scrolling ]</span>
        </div>
      </div>

      <div className={styles.mobileStages}>
        {siteContent.services.stages.map((stage, index) => (
          <article className={styles.mobileStage} key={stage.title}>
            <img alt="" src={stage.image} />
            <div className={styles.mobileStageBody}>
              <h3>{stage.title}</h3>
              <p>{stage.description}</p>
              <span>{String(index + 1).padStart(2, "0")}/05</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
