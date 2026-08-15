import styles from "./SlidingArrow.module.css"

function ArrowGlyph({ className }: { className: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 14 13"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 0 4.375 L 1.823 4.375 M 11.667 4.375 L 7.292 0 M 11.667 4.375 L 7.292 8.75 M 11.667 4.375 L 4.01 4.375"
        fill="transparent"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.31"
        transform="translate(0.875 2.625)"
      />
    </svg>
  )
}

export function SlidingArrow() {
  return (
    <span aria-hidden="true" className={styles.window}>
      <span className={styles.track}>
        <ArrowGlyph className={`${styles.glyph} ${styles.incoming}`} />
        <ArrowGlyph className={`${styles.glyph} ${styles.current}`} />
      </span>
    </span>
  )
}
