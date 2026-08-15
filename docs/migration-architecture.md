# Incremental migration architecture

## Decision

The maintainable replacement is a statically exported Next.js/React application
under `candidate/`. It runs on its own origin during migration. The generated
Framer homepage at the repository root remains the production control until the
candidate has reproduced every section and both public routes.

Next.js was selected because it provides static HTML, explicit metadata and
routing, conventional React components, a direct Vercel path, and one component
model for the later stateful Services, carousel, FAQ, and navigation work. Client
components remain narrow; the hero and document shell render statically.

## Boundary

Do not mount candidate components inside the generated `#main`. Framer hydrates
that complete SSR tree and owns its appear state, responsive variants, routing,
and layout. The two runtimes would race for the same DOM.

During this first slice:

- legacy site: `npm run serve`, normally port 3000;
- candidate: `npm --prefix candidate run dev`, port 4173;
- candidate output: `candidate/out/` after `npm --prefix candidate run build`.

The candidate currently ends after the Hero. Links to sections that have not yet
been migrated intentionally bridge to `NEXT_PUBLIC_LEGACY_BASE_URL`, defaulting
to the approved live site. This is temporary migration behavior, not the final
navigation contract.

## Asset handling

The source assets remain in the repository-level `assets/` directory. A small
predev/prebuild script copies them into ignored `candidate/public/assets/` so
Next can serve the exact existing URLs without committed media duplication or
symlink-dependent deployment behavior.

Plain `img` and `video` elements are used deliberately. The current files include
AVIF bytes under `.png`/`.jpg` names, and automatic image optimization could
change crops, encoding, or timing. Filename/MIME cleanup belongs to a separately
verified deployment slice.

## Component boundaries

- `SiteHeader`: desktop navigation and responsive menu state.
- `Hero`: background, title, video card, description, and CTA composition.
- `SlidingArrow`: the repeated two-glyph masked-arrow microinteraction used by
  both approved pill CTAs.

Styling is explicit CSS Modules plus a small global token/reset layer. Motion is
CSS because the measured hero and header behavior does not justify an animation
runtime. Later scroll-linked or draggable sections may add a mature motion
dependency only when their characterization demonstrates the need.

## Cutover rule

No Framer runtime file is removable merely because the isolated candidate no
longer imports it. Production cutover requires completed homepage and contact
routes, fixed-viewport visual comparisons, interaction tests, motion review, and
an explicit deployment verification. Until then, all generated runtime and
editor files remain required by the legacy control.
