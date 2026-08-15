# Koranco Website Visual Preservation Contract

Status: takeover baseline  
Audited: 2026-08-15  
Reference: `https://koranco.framer.website/`

## 1. Purpose and authority

The live Framer site is the approved visual and interaction reference for the
Koranco public website. This document records the observable contract that a
future conventional implementation must preserve. It is not a mandate to retain
Framer's generated code structure.

Content is not frozen. Copy, contact details, and metadata may be corrected, but
the current layout and behavior remain the baseline until a product decision
changes them. Template remnants and obvious copy errors recorded below are
defects, not immutable visual requirements.

Measurements are browser observations, rounded to practical values. Animated and
content-dependent layouts can differ by a pixel at capture time. Use the live
reference, this contract, and side-by-side captures together.

## 2. Audited routes

| Route | Live reference | Current local export |
| --- | --- | --- |
| `/` | Complete homepage | Complete and geometrically equivalent in audited stable states; the live-only Framer badge is absent locally |
| `/contact-us` | Complete contact page | Blank white page; the SPA fallback returns the homepage document but the exported runtime has no usable route payload |

The blank local contact page is the highest-impact preservation defect. Unknown
extensionless paths also receive the SPA document from `serve.js`; this does not
prove that a client route exists.

## 3. Global visual language

### Color tokens observed

| Role | Value |
| --- | --- |
| Primary dark green | `#04303b` |
| Accent lime | `#e7f352` |
| Sage/beige background | `#e3e4d4` |
| Off-white surface | `#f2f3ee` |
| White | `#ffffff` |
| Primary body gray | `#3b3939` |
| Muted green | `#04303b99` |
| Secondary grays | `#999999`, `#f3f3f3`, `#0a0a0a` |

Additional alpha colors appear in generated effects and borders. Preserve their
rendered result when extracting tokens; do not flatten translucency into a close
opaque color.

### Typography

- Display headings use **BDO Grotesk Variable**, included locally as WOFF2.
- Body, navigation, labels, and controls use **Inter**, currently loaded from
  Framer's remote asset host.
- The generated variable-font styling reports unusually heavy computed weights;
  match the visible glyph shapes and line breaks rather than normalizing weights
  by number alone.

Representative sizes:

| Style | Desktop | Tablet | Mobile |
| --- | --- | --- | --- |
| H1 | `62px / 71.3px` | `48px / 55.2px` | `38px / 43.7px` |
| H2 | `52px / 62.4px` | `36px / 43.2px` | `36px / 43.2px` |
| H3 | `42px / 50.4px` | context-dependent | context-dependent |
| H4 | `32px / 38.4px` | context-dependent | context-dependent |

Typography preservation includes wrapping, tracking, casing, and the space
reserved while fonts load. A fallback that changes line breaks is not equivalent.

### Geometry and surfaces

- Desktop content is generally capped at about `1320px`, leaving `60px` side
  margins at a `1440px` viewport.
- Tablet sections generally use `30px` horizontal gutters; the header uses about
  `20px`.
- Mobile sections generally use `20px` gutters.
- Cards commonly use approximately `20px` corner radii.
- Primary CTAs are lime pills with a dark arrow treatment and roughly `42px`
  pill radius.
- Large breathing room and deliberately tall scroll regions are part of the
  composition, especially in Services. Do not compress them as dead space.

## 4. Responsive model

The generated site exposes three principal variants:

- Desktop: `1200px` and above.
- Tablet/small desktop: `768px` through `1199.98px`.
- Mobile: below `768px`.

The widths `1024px` and `768px` use the tablet composition, while `390px` uses
the mobile composition. Test just above and below the boundaries when replacing
the generated implementation.

Observed total homepage heights after stable layout:

| Viewport width | Approximate page height |
| --- | ---: |
| 1440 | 14,144px |
| 1024 | 14,908px |
| 768 | 14,423px |
| 390 | 13,567px |

These heights are diagnostics, not fixed CSS requirements. Large divergence is a
signal to inspect wrapping, reveal state, sticky spacing, and asset loading.

## 5. Header and navigation

### Desktop

- White rounded navigation pill at approximately `x:60, y:32`, `1320 x 64px`.
- Logo at the left, centered navigation links, lime CTA at the right.
- The header remains viewport-persistent while scrolling and uses animated
  layout transitions. Scroll captures show both the full pill and a compact
  arrow/CTA-like state; the exact transition rule must be characterized before
  reimplementation rather than inferred from a single screenshot.
- Hovering a navigation item changes it to a dark-green rounded pill with white
  text.

### Tablet and mobile

- White rounded header, about `48px` high, positioned `20px` from the sides and
  `15px` from the top on mobile.
- Logo is approximately `100 x 33px`; a three-line menu button sits at right.
- Activating the menu expands a white overlay panel with logo, close icon, and
  vertical links: Home, About, Services, Gallery, Testimonials, Contact Us.
- On a `390px` viewport the panel is about `350px` wide and overlays the hero.

### Focus and controls

Keyboard focus currently relies mainly on the browser's visible native focus
outline (observed as a blue auto outline). Do not remove it. A future custom focus
system may improve accessibility only if visibility and layout are preserved or
intentionally approved.

## 6. Homepage section contract

At `1440px`, the stable section sequence and approximate bounds are:

| Section | Top | Height | Essential composition |
| --- | ---: | ---: | --- |
| Hero | 0 | 1,000 | Full-bleed farm image; label and large title; video card; description and CTA |
| About | 1,000 | 656 | Mission statement and four metrics |
| Solutions | 1,656 | 952 | Three staggered dark image cards |
| Services | 2,608 | 5,000 | Tall sticky, five-stage visual sequence |
| Features/impact | 7,608 | 770 | Sustainability statement and two percentage metrics |
| How it works | 8,377 | 923 | Three numbered step cards |
| Gallery | 9,300 | 1,097 | Eight-image masonry composition |
| Team | 10,398 | 878 | Three portrait cards |
| Testimonials | 11,276 | 909 | Auto-playing carousel and four pagination dots |
| FAQ | 12,185 | about 1,114 | Six-item single-open accordion |
| CTA | about 13,378 | 324 | Centered conversion panel |
| Footer | about 13,703 | 382 | Brand, navigation/contact/social content |

Representative responsive section heights:

| Section | 1024 | 768 | 390 |
| --- | ---: | ---: | ---: |
| Hero | 670 | 670 | 805 |
| About | 430 | 430 | 578 |
| Solutions | 1,104 | 1,228 | 1,298 |
| Services | 4,500 | 4,500 | 2,414 |
| Features/impact | 1,280 | 1,306 | 1,198 |
| How it works | 1,027 | 1,078 | 1,442 |
| Gallery | 791 | 658 | 468 |
| Team | 1,461 | 1,139 | 1,587 |
| Testimonials | 730 | 730 | 1,077 |
| FAQ | 1,960 | 1,729 | 1,550 |
| CTA | 266 | 266 | 295 |
| Footer | 548 | 548 | 736 |

### Hero

- Full-width background image uses a centered cover crop.
- Left-aligned eyebrow and title balance a lower video card and right-side copy.
- The small media card autoplays a local MP4 and includes text over the video.
- Desktop entry sequence is deliberately staggered; see the motion inventory.

### About and solutions

- About presents the brand statement with four metrics: `12+`, `235K+`, `421K+`,
  and `$12B+` in the audited content.
- Solutions contains three staggered image cards titled Precision farming
  solutions, Farm management system, and Sustainable agriculture services.
- Staggered placement, card darkness, crop, rounding, and whitespace are part of
  the visual signature.

### Services sticky sequence

Desktop and tablet use a long scroll-controlled, full-viewport presentation with
five stages:

1. Agriculture consulting — tractor image.
2. Agri-Technology integration — planter image.
3. Farm management services — grain-unloading image.
4. Supply chain & market access — aerial blue-tractor image.
5. Training & support — handshake image.

The background, foreground card image, title, description, and `01/05` through
`05/05` counter transition together while the stage remains sticky. The pale
foreground card is centered and rounded over a dark, image-led background. The
desktop/tablet composition includes a “Keep Scrolling” cue.

Mobile is intentionally different: all five service cards form a static vertical
stack and the sticky takeover/cue is absent. Do not force the desktop interaction
onto mobile or collapse desktop into the mobile list.

### Remaining sections

- Features/impact combines the sustainability statement with `60%` and `55%`
  metrics in the audited copy.
- How it works uses three numbered cards and preserves their ordered rhythm.
- Gallery uses eight cover-cropped images in a masonry-style composition. Its
  image wrappers advertise pointer/filter behavior in generated styling; capture
  the exact hover response before replacing it.
- Team uses three portrait cards for Sarah Wilson, Michael Brown, and John Carter
  in the audited content. Portrait crop and card proportions are contractual;
  the names are editable content.
- Testimonials shows multiple cards on desktop and one centered card on mobile,
  loops automatically, supports drag, and exposes four dots but no visible
  arrows.
- FAQ has six items, the first open by default, and permits one open item at a
  time. Opening another item closes the previous one.
- CTA and footer retain their large reveal spacing, pill controls, social links,
  and responsive stacking.

## 7. Contact page contract

The live `/contact-us` route contains:

1. A contact hero with eyebrow “Contact us” and heading “Let’s talk about your
   farming needs”.
2. Contact information on the left and a rounded outlined form on the right at
   desktop widths.
3. The shared FAQ, CTA, and footer below.

The contact intro and form stack vertically on tablet/mobile. Approximate live
page heights are `2,801px` at 1440, `3,972px` at 1024, `3,796px` at 768, and
`3,892px` at 390. At 1440 the main regions are contact `0–902`, FAQ `902–1956`,
CTA about `2035–2359`, and footer about `2360–2742`.

The current live form's observed implementation has defects that should not be
copied blindly: duplicate `Name` field names, an email field name with leading
whitespace, an incorrect message placeholder, template contact data, numerous
honeypot fields, and default GET submission behavior. Preserve the approved
form appearance and feedback states while separately specifying correct form
semantics and delivery before implementing it.

## 8. Motion and interaction inventory

### Page and hero entry

- Global page entry: opacity from transparent to visible over about `0.5s`, with
  an ease close to cubic-bezier `(.27, 0, .51, 1)`.
- Hero background: scale `1.3` to `1`, `1.0s`, cubic-bezier
  `(.44, 0, .56, 1)`.
- Eyebrow: opacity/vertical entry from about `y:12px`, `0.4s`, no added delay.
- H1: opacity/vertical entry from about `y:24px`, `0.5s`, `0.1s` delay.
- Video card: matching opacity/vertical entry, `0.5s`, `0.2s` delay.
- Description and CTA: matching entry, `0.5s`, `0.3s` delay.

### Scroll reveals

- Many headings reveal word by word from `blur(4px)` and near-zero opacity.
- Representative trigger: once when roughly half the element enters view.
- Representative timing: `0.1s` initial delay, `0.05s` per-word stagger, spring
  motion with about `0.7s` duration and no bounce.
- Common container reveal: opacity and `y:40px` to final position using a firm
  spring (observed parameters near damping `55`, stiffness `300`, mass `1`).
- CTA and footer use one-shot upward/opacity reveals.

### Component interactions

- Primary CTA hover changes lime to dark green and shifts/swaps the masked arrow
  toward the right; preserve the approximately `0.4s` feel and curve.
- Desktop navigation links animate into the filled pill state on hover.
- FAQ panel height, answer opacity, and chevron rotation transition together.
- Testimonials autoplay every approximately `2s`, loop, allow dragging, and
  update four dots. Pagination fade is about `0.35s`; dot state change about
  `0.3s`.
- The services stage is scroll-linked and sticky on desktop/tablet, with
  coordinated background/card/copy/counter transitions.
- Header layout transitions during scroll and must be characterized with a
  recorded scroll path before replacement.

### Reduced motion

The audited live site continued to run the hero animations when
`prefers-reduced-motion: reduce` was active; early-frame normal and reduced-motion
captures were nearly identical. This is an observed accessibility defect and a
fidelity decision point. Do not accidentally change it during a refactor. A
deliberate reduced-motion implementation is encouraged, but it requires explicit
approval and a documented expected state.

## 9. Media and crop behavior

- Hero, solution, service, gallery, and most card imagery use `object-fit: cover`
  with centered positioning.
- The logo uses contain-like treatment and must not be stretched.
- The hero's local background source is `1440 x 800`; its crop changes by
  responsive container rather than by distorting the source.
- Team portraits have component-specific sizing/cropping; reproduce the rendered
  frames rather than applying one global image rule.
- The hero video is a required local MP4 (approximately 18 MB), not a decorative
  still. Preserve autoplay/inline/loop behavior subject to browser policy.

All current image, font, and video files are referenced by the public homepage
runtime. Several files named `.png` contain AVIF bytes. Browsers currently decode
them, but the filename/MIME mismatch is deployment risk and must be resolved with
reference comparisons rather than a blind rename.

## 10. Runtime and asset dependency map

The current export is a generated Framer application, not a normal source tree.

| Class | Current items | Treatment |
| --- | --- | --- |
| A. Required runtime | `index.html`; main bundle; React, Motion, Framer and rolldown runtime bundles; shared/generated component bundles; route metadata; `serve.js` | Preserve until an equivalent slice replaces each responsibility |
| B. Required assets | Local BDO Grotesk font, all referenced images, hero MP4, favicon | Preserve paths and rendered treatment; audit licensing/provenance separately |
| C. Generated debt | ~598 KB SSR document with inline CSS/appear data; opaque hashed bundles; duplicated responsive markup; editor hooks; remotely hosted Inter faces | Characterize, then replace incrementally; do not “clean up” in place broadly |
| D. Dead candidates | `assets/misc/edit-644fb2`; unreferenced editor bootstrap; duplicate HTML snapshot after metadata is fixed | Candidates only; prove no deployment/editor dependency before deletion |
| E. Deployment glue | Minimal `package.json`; custom `serve.js`; `PORT` handling and SPA fallback | Specify host contract, MIME/cache/security behavior, and route handling before replacement |
| F. Unknown/unresolved | Missing contact route payload/provenance; necessity of conditional editorbar chunks; compact-header transition rule | Investigate before altering or deleting |

The public document conditionally loads editor support based on browser storage.
That makes some editor files optional public-runtime dependencies, not safely dead
by filename alone. The `assets/misc/asset-5f2e05` file is a duplicate homepage
snapshot currently referenced by broken canonical metadata; fix the metadata and
retain provenance before considering removal.

External runtime dependencies currently include Framer-hosted Inter fonts,
Open Graph/Apple-touch images, search-index resources, and social destinations.
Local fidelity therefore does not yet imply offline completeness.

## 11. Equivalence test strategy

### Capture matrix

For both live reference and candidate, capture `/` and `/contact-us` at:

| Name | Viewport |
| --- | --- |
| Desktop | `1440 x 1000` |
| Tablet/small desktop | `1024 x 900` |
| Tablet boundary | `768 x 900` |
| Mobile | `390 x 844` |

For each route and width:

1. Wait for fonts and essential media to load.
2. Capture the initial viewport at a controlled early animation frame and again
   after the entry sequence settles.
3. Scroll through the page to trigger lazy content and one-shot reveals.
4. Capture a stable full page only after every target section has been visited.
5. Capture focused regions for states that a full-page screenshot cannot express.

### Required interaction scenarios

- Open and close the mobile/tablet menu.
- Hover every desktop navigation treatment and a representative primary CTA.
- Keyboard-tab through header, buttons, form controls, FAQ, and footer links.
- Record the header across a repeatable scroll path.
- Record all five desktop/tablet service stages and the complete mobile stack.
- Open a non-default FAQ item and verify single-open behavior.
- Observe at least two testimonial autoplay changes, click dots, and drag in both
  directions.
- Verify hero video playback and representative image crops.
- Repeat motion checks with reduced-motion preference enabled.
- On the contact route, validate responsive form layout, labels, required states,
  error/success feedback, and submission semantics once specified.

### Comparison standard

Use aligned image overlays or perceptual diffs as diagnostics, not as the only
gate. Stabilize font loading, animation time, scroll position, viewport, browser,
and dynamic content before interpreting pixel differences. Review:

- bounding boxes, section rhythm, line breaks, crops, radii, colors, and borders;
- sticky start/end positions and overlap behavior;
- animation start state, end state, duration, easing, delay, and stagger;
- hover, focus, expanded, dragged, and menu states;
- console errors, failed requests, media playback, and route behavior.

Intentional copy corrections may cause expected diffs. Document those diffs and
confirm that the responsive composition still holds. Pixel identity is not an
excuse to retain broken semantics, but semantic repair must not silently alter
the approved presentation.

## 12. Known defects and risks at takeover

### User-visible defects

- Local `/contact-us` is blank.
- Page title and social titles say “Farmio”.
- Canonical and Open Graph URLs point to a local snapshot path instead of the
  public Koranco URL.
- Template “Farmio” copy remains in testimonials, FAQ, how-it-works, and contact
  content.
- Hero CTA says “Ger started”.
- The footer visibly shows `info@korancofarms.com` but links to
  `mailto:info@farmio.com`.
- Contact details and form attributes contain template values and malformed or
  duplicate field names.

### Technical and operational risks

- AVIF image bytes are served under `.png` names and `image/png` MIME headers.
- `serve.js` gives the HTML document the same one-hour cache policy as assets,
  applies permissive CORS globally, has no compression/security-header policy,
  and falls back to `index.html` for unknown extensionless paths.
- There is no build pipeline, lockfile, automated test suite, continuous
  integration, or checked-in deployment contract.
- The only local font is BDO Grotesk; Inter and some metadata assets remain
  remote dependencies.
- Generated bundle names and duplicated responsive markup make targeted changes
  difficult to review and easy to regress.
- The live reference itself has limited reduced-motion accommodation.
- Asset ownership, optimization source files, and the missing contact-route
  export provenance are not documented.

## 13. Recommended incremental cleanup order

This order deliberately separates preservation from redesign:

1. Add repeatable screenshot and interaction characterization around the current
   homepage and live contact page.
2. Correct public metadata and content-only defects with visual comparisons.
3. Restore `/contact-us` from the live specification, including an explicitly
   designed form submission contract.
4. Correct MIME/extension handling and define cache, compression, headers, 404,
   and SPA-route behavior without changing rendered output.
5. Make external fonts and essential metadata assets deliberate, documented
   dependencies or localize them with font-metric comparison.
6. Establish a conventional source/build structure and extract shared tokens,
   header/footer, controls, and motion primitives one verified slice at a time.
7. Replace homepage sections incrementally, beginning with static sections and
   leaving Services, header scroll behavior, and carousel until their interaction
   tests are robust.
8. Remove duplicate snapshots, editor artifacts, and obsolete bundles only after
   dependency tracing and deployed-route verification prove them unnecessary.
9. Decide and document intentional accessibility improvements, especially
   reduced motion and form semantics, as product changes with approved baselines.

No runtime cleanup was performed during this audit. This contract and the root
working agreement are the only repository changes in the takeover phase.
