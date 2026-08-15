# Koranco Website Working Agreement

This repository is a preservation-first takeover of the public Koranco website.
The approved live Framer site at `https://koranco.framer.website/` is the current
visual and interaction specification. Read `docs/visual-contract.md` before
changing runtime code, styles, markup, media, routing, or deployment behavior.

## Non-negotiable principles

1. **Visual fidelity is the first acceptance criterion.** Preserve the approved
   layout, type, spacing, sizes, image crops, colors, borders, section rhythm,
   responsive composition, and UI states.
2. **Maintainability must become conventional without changing the experience.**
   Replacing generated Framer output is allowed only in measured, reviewable
   slices with an equivalent reference capture.
3. **Animation is part of the product.** Preserve scroll reveals, sticky
   sequences, carousel behavior, header transitions, hover and focus feedback,
   durations, delays, stagger, easing, and reduced-motion behavior unless a
   deliberate product or accessibility change is approved.
4. **Do not redesign while refactoring.** No “close enough” component swaps,
   typography substitutions, spacing normalization, crop changes, simplified
   motion, or breakpoint changes without explicit approval.
5. **Stop when equivalence is unknown.** If a behavior cannot be observed,
   measured, or compared reliably, document the uncertainty and ask for a
   decision before replacing it.

## Source of truth

- The live public site is the reference for appearance and interaction.
- `docs/visual-contract.md` records the audited contract and known defects.
- Current generated files are implementation evidence, not a preferred future
  architecture.
- Existing content is not frozen. Future approved work may replace text,
  photography, Koranco logos/assets, contact details, links, factual company
  information, and SEO/metadata. Keep content slots straightforward to edit, and
  do not let a content change silently redesign layout or behavior.
- Obvious template remnants such as “Farmio” are defects, not brand guidance.

## Maintainable destination

Prefer code a normal frontend engineer can understand: conventional framework
patterns, clear component ownership, meaningful names, explicit styling, local
reasoning, shallow indirection, and small focused utilities.

Avoid generated-code patterns, opaque hashed component names, unnecessary
factories, excessive wrappers, giant configuration-driven UI systems,
abstraction solely to remove duplication, and clever code that hides visual
behavior. These preferences never justify a visual regression. If simpler code
and demonstrated fidelity conflict, preserve fidelity.

## Required workflow for runtime changes

1. Identify the route, sections, viewport classes, and interactions affected.
2. Capture the live reference at the fixed audit viewports before implementation.
3. Make the smallest coherent change; avoid broad cleanup in the same patch.
4. Compare reference and candidate in stable states and during important motion.
5. Exercise keyboard focus, pointer hover, menu, accordion, carousel, sticky,
   scroll-reveal, and media behavior where applicable.
6. Record intentional differences and unresolved uncertainty in the change notes.

Use these fixed comparison viewports unless a change requires additional sizes:

- Desktop: `1440 x 1000`
- Small desktop/tablet: `1024 x 900`
- Tablet boundary: `768 x 900`
- Mobile: `390 x 844`

Test both `/` and `/contact-us`. The local export currently renders
`/contact-us` blank; restoring it is a future implementation task and must match
the live route rather than inventing a replacement.

## Repository boundaries

- Treat `index.html` and the hashed files under `scripts/` as generated runtime
  until their behavior has been replaced and verified.
- Treat referenced files under `assets/` as required. Do not rename, recompress,
  or recrop them casually.
- Do not hand-edit a generated bundle for architectural convenience. A targeted,
  documented emergency fix is acceptable only when it is the smallest safe fix.
- Do not delete unreferenced-looking editor or snapshot artifacts until their
  runtime and deployment role has been proved unnecessary.
- Preserve user changes and unrelated work in a dirty worktree.
- Do not introduce a framework, design system, animation library, build tool, or
  hosting dependency merely because it is conventional. Choose these only as
  part of an approved migration slice with an equivalence plan.

## Verification expectations

For visual work, a successful build or HTTP 200 is not sufficient. Verification
should include:

- full-page captures at all four fixed widths;
- focused captures of the desktop and mobile navigation states;
- the five-stage services sequence on desktop/tablet and its mobile stack;
- FAQ closed/open transitions;
- testimonial autoplay, pagination, and drag behavior;
- CTA and navigation hover/focus states;
- hero entry and representative scroll-reveal states;
- image crop, video playback, sticky positioning, and footer behavior;
- both normal and `prefers-reduced-motion: reduce` modes.

Prefer deterministic browser automation for repeatable screenshots, supplemented
by manual review for timing, drag, scroll feel, and visual artifacts. Do not
approve equivalence from DOM snapshots alone.

## Safe change discipline

Generally safe without redesign approval:

- documentation, audit tooling, and non-production visual test scaffolding;
- correcting content or metadata while keeping layout stable;
- adding characterization tests around current behavior;
- isolating a dependency after proving its output is equivalent.

Requires reference comparison and careful review:

- any runtime, route, CSS, component, font, image, video, animation, or server
  change;
- changing breakpoints, semantic structure, focus handling, or loading order;
- removing generated, editor, or deployment artifacts;
- changing cache, MIME, asset-path, fallback-route, or external-resource behavior.

Do not proceed without explicit direction when a proposed change alters the
approved visual language, interaction model, accessibility behavior, public URL
structure, or hosting contract.
