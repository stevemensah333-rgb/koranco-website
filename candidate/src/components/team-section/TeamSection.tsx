import { siteContent } from "../../content/siteContent"
import styles from "./TeamSection.module.css"

export function TeamSection() {
  return (
    <section aria-labelledby="team-heading" className={styles.team} id="team">
      <div className={styles.intro}>
        <p className={styles.eyebrow}>{siteContent.team.eyebrow}</p>
        <h2 id="team-heading">{siteContent.team.title}</h2>
      </div>

      <div className={styles.members}>
        {siteContent.team.members.map((member) => (
          <article className={styles.member} key={member.name}>
            <div className={styles.media}>
              <img alt={member.alt} className={styles.portrait} loading="lazy" src={member.image} />
              <div className={styles.details}>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
