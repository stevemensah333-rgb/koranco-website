import { siteContent } from "../../content/siteContent"
import styles from "./GallerySection.module.css"

export function GallerySection() {
  return (
    <section aria-labelledby="gallery-heading" className={styles.gallery} id="gallery">
      <div className={styles.intro}>
        <p className={styles.eyebrow}>{siteContent.gallery.eyebrow}</p>
        <h2 id="gallery-heading">{siteContent.gallery.title}</h2>
      </div>

      <div className={styles.masonry}>
        {siteContent.gallery.columns.map((column, columnIndex) => (
          <div className={styles.column} key={`gallery-column-${columnIndex}`}>
            {column.map((image, imageIndex) => (
              <img
                alt={image.alt}
                className={styles.image}
                key={`${image.src}-${imageIndex}`}
                src={image.src}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
