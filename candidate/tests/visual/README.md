# Shell, Header, and Hero Visual Checks

This harness characterizes the first migration slice against the approved live
Framer site. It covers the settled initial viewport, desktop navigation hover
and keyboard focus, and responsive menu open/closed states at the four viewports
defined in `docs/visual-contract.md`.

It intentionally does not start a server. Set `VISUAL_BASE_URL` to either the
live reference or an independently running candidate preview. Keeping the two
targets explicit prevents the blank legacy `/contact-us` route or the generated
root server from being mistaken for the approved reference.

## Prerequisites

- `@playwright/test` must be available to the repository. This scaffold does not
  install it or modify a package manifest.
- Stable Google Chrome must be installed. The configuration deliberately uses
  Playwright's `chrome` channel so reference and candidate use the same browser
  and MP4 codec support.
- Run commands from the repository root.

## Capture the approved reference

Start from a clean worktree and update snapshots only as an intentional baseline
operation:

```sh
VISUAL_BASE_URL=https://koranco.framer.website \
  npx playwright test --config candidate/playwright.config.mjs --update-snapshots
```

Review every generated image before committing it. Do not run
`--update-snapshots` against a candidate URL; that would bless the implementation
being evaluated instead of comparing it with the approved live site.

## Compare a candidate

Run the candidate on its own root URL, for example port `4173`, then execute:

```sh
VISUAL_BASE_URL=http://127.0.0.1:4173 \
  npx playwright test --config candidate/playwright.config.mjs
```

To inspect a single viewport or scenario:

```sh
VISUAL_BASE_URL=http://127.0.0.1:4173 \
  npx playwright test --config candidate/playwright.config.mjs \
  --project desktop-1440 --grep "hover treatment"
```

Diffs and failure screenshots are written beneath `test-results/`; the HTML
report is written to `playwright-report/`. Both directories are ignored locally.

## Stabilization policy

Before each assertion the helper:

1. waits for the hero heading, fonts, and visible images;
2. hides only known Framer attribution-badge selectors;
3. waits for the audited hero entrance to settle;
4. hides and blocks the dynamic video frame for stable endpoint comparisons;
5. returns the page to scroll position zero.

The approved logo, hero image, and display font are fulfilled from the exact
repository files during both reference and candidate runs. This avoids treating
transient Framer CDN failures as visual regressions. Screenshots are clipped to
the migrated Hero boundary, so unmigrated lower sections are not compared yet.
The right description/CTA layer is also hidden in stable pixel captures because
Framer's headless compositor paints it intermittently; its text and measured
geometry remain part of the separate browser characterization.

Playwright disables CSS transitions and Web Animations while producing these
settled screenshots. Timing, easing, stagger, and playback behavior still need
separate motion checks; these endpoint comparisons are not evidence of animation
equivalence.

Semantic controls are preferred. Narrow `data-framer-name` fallbacks exist only
so the same scenario can capture the live Framer reference. The candidate menu
button should remain a real button with clear `Open menu` and `Close menu`
accessible names.
