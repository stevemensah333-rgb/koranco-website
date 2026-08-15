import { siteContent } from "../../content/siteContent"
import styles from "./ContactSection.module.css"

function LinkColumn({ title, links, className = "" }: { title: string; links: readonly string[]; className?: string }) {
  return (
    <div className={`${styles.column} ${className}`.trim()}>
      <h3>{title}</h3>
      <ul>
        {links.map((link) => <li key={link}><a href="#">{link}</a></li>)}
      </ul>
    </div>
  )
}

export function ContactSection() {
  const content = siteContent.contact
  return (
    <section className={styles.contact} id="contact" style={{ backgroundImage: `url(${content.backgroundImage})` }}>
      <div className={styles.ctaBlock}>
        <p className={styles.eyebrow}>{content.eyebrow}</p>
        <h2>{content.title}</h2>
        <a className={styles.cta} href="#contact">
          <span>{content.ctaLabel}</span>
          <span aria-hidden="true">→</span>
        </a>
      </div>

      <footer className={styles.footerCard}>
        <div className={styles.footerMain}>
          <div className={styles.brandColumn}>
            <img src="/assets/images/wuQr8zED6pERTtGdsItynbUjr0.jpg" alt={siteContent.brand.logoAlt} />
            <p>{content.statement}</p>
            <a className={styles.email} href={`mailto:${content.email}`}>{content.email}</a>
          </div>
          <LinkColumn title="Quick links" links={content.quickLinks} />
          <LinkColumn title="Navigation" links={content.navigationLinks} />
          <LinkColumn title="Social Handle" links={content.socials} />
        </div>
        <div className={styles.copyright}>{content.copyright}</div>
        <div className={styles.madeInFramer} aria-label="Made in Framer"><span aria-hidden="true">◢</span> Made in Framer</div>
      </footer>
    </section>
  )
}
