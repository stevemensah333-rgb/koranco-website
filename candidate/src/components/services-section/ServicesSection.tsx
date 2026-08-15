"use client"

import { useEffect, useRef, useState } from "react"
import { siteContent } from "../../content/siteContent"
import styles from "./ServicesSection.module.css"

const backgroundImage = "/assets/images/PvCp32weG5JkDiZA50WLEDc33S0.png"

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const updateStage = () => {
      const section = document.getElementById("service")
      if (!section) return
      const bounds = section.getBoundingClientRect()
      const progress = Math.min(1, Math.max(0, -bounds.top / Math.max(1, bounds.height - window.innerHeight)))
      const nextIndex = Math.min(siteContent.services.stages.length - 1, Math.floor(progress * siteContent.services.stages.length))
      setActiveIndex(nextIndex)
      section.querySelectorAll(`.${styles.stage}`).forEach((card, index) => {
        card.classList.toggle(styles.active, index === nextIndex)
      })
      const counter = section.querySelector(`.${styles.stageMeta} span`)
      if (counter) counter.textContent = `${String(nextIndex + 1).padStart(2, "0")}/05`
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
        <h2>{siteContent.services.title}</h2>
      </div>

      <div className={styles.desktopSticky}>
        <div className={styles.backdrop} style={{ backgroundImage: `url(${backgroundImage})` }} />
        <div className={styles.scrim} />
        <div className={styles.desktopIntro}>
          <p className={styles.eyebrow}>{siteContent.services.eyebrow}</p>
          <h2>{siteContent.services.title}</h2>
        </div>
        <div className={styles.stageCard}>
          {siteContent.services.stages.map((stage, index) => (
            <article className={`${styles.stage} ${index === activeIndex ? styles.active : ""}`} key={stage.title}>
              <img alt="" src={stage.image} />
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
