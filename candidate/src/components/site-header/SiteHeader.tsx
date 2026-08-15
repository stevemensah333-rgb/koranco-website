"use client"

import { useEffect, useRef, useState } from "react"

import { SlidingArrow } from "../sliding-arrow/SlidingArrow"
import { siteContent } from "../../content/siteContent"
import styles from "./SiteHeader.module.css"

const primaryLinks = siteContent.navigation.primary

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const transitionTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  useEffect(
    () => () => {
      if (transitionTimer.current) clearTimeout(transitionTimer.current)
    },
    [],
  )

  const queueMenuState = (nextState: boolean) => {
    if (transitionTimer.current) clearTimeout(transitionTimer.current)
    transitionTimer.current = setTimeout(() => setIsOpen(nextState), 100)
  }

  return (
    <header className={`${styles.header} ${isOpen ? styles.headerOpen : ""}`}>
      <nav
        aria-label="Primary navigation"
        className={`${styles.panel} ${isOpen ? styles.panelOpen : ""}`}
      >
        <div className={styles.headerRow}>
          <a
            aria-label={siteContent.brand.homeAriaLabel}
            className={styles.logoLink}
            href="#home"
          >
            <img
              alt={siteContent.brand.logoAlt}
              className={styles.logo}
              height="695"
              src="/assets/images/koranco-farms-logo.jpg"
              width="695"
            />
          </a>

          <div className={styles.desktopMenu}>
            {primaryLinks.map((link) => (
              <a
                className={styles.desktopLink}
                href={link.href}
                key={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a className={styles.contactButton} href="#contact">
            <span>{siteContent.navigation.contactLabel}</span>
            <SlidingArrow />
          </a>

          <button
            aria-controls="responsive-navigation"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className={`${styles.menuButton} ${isOpen ? styles.menuButtonOpen : ""}`}
            onClick={() => queueMenuState(!isOpen)}
            type="button"
          >
            <span className={styles.menuLine} />
            <span className={styles.menuLine} />
            <span className={styles.menuLine} />
          </button>
        </div>

        <div className={styles.mobileMenu} id="responsive-navigation">
          {[
            ...primaryLinks,
            {
              href: "#contact",
              label: siteContent.navigation.mobileContactLabel,
            },
          ].map(
            (link) => (
              <a
                className={styles.mobileLink}
                href={link.href}
                key={link.href}
                onClick={() => queueMenuState(false)}
              >
                {link.label}
              </a>
            ),
          )}
        </div>
      </nav>
    </header>
  )
}
