# Koranco Content Guide

This guide describes the editorial content boundary for the incremental Koranco candidate. The current phase centralizes mutable values without rewriting copy or changing the approved visual and interaction behavior. The live reference and the [visual contract](./visual-contract.md) remain authoritative for rendered appearance.

## Central content module

The current editable content for the migrated shell and hero is located in `candidate/src/content/siteContent.ts`. Keep this module deliberately small and typed. It is a data source for existing components, not a page-builder schema. When content is replaced, preserve the surrounding component markup, CSS module classes, animation triggers, media attributes, and link-resolution behavior unless a separate approved migration slice covers those concerns.

| Area | Location | Current content | Expected type | Recommended limit or shape | Layout risk | Factual verification |
| --- | --- | --- | --- | --- | --- | --- |
| Brand name and accessible labels | `siteContent.brand` | Koranco Farms; logo and home labels | Short strings | Brand name should remain brief enough for the fixed header/logo context | Medium; accessible labels do not affect layout, visible brand text may | Confirm approved spelling, capitalization, and brand asset |
| Primary navigation | `siteContent.navigation.primary` | Home, About us, Services, Gallery, Testimonials | Ordered list of `{ href, label }` | Keep labels short; desktop links use non-wrapping pill treatments | High; desktop header uses fixed spacing and `white-space: nowrap` | Confirm route fragments or destination URLs |
| Contact labels | `siteContent.navigation.contactLabel` and `mobileContactLabel` | Contact us / Contact Us | Short strings | Prefer one short line | High; CTA dimensions and mobile panel height are characterized | Confirm approved wording and destination |
| Hero eyebrow | `siteContent.hero.eyebrow` | Smart farming solutions | Short phrase | Prefer one line on desktop and a compact phrase on mobile | Medium; entry animation is container-based, but wrapping changes geometry | Confirm approved positioning and wording |
| Hero title | `siteContent.hero.title` | Innovative Technology for Agricultural Growth | Heading string | Keep close to the current line count; validate at 1440, 1024, 768, and 390 px | High; title max widths and line breaks are part of the visual contract | Confirm factual/product claim and capitalization |
| Hero description | `siteContent.hero.description` | Koranco Farms delivers smart farming solutions... | Paragraph | Keep within the current short paragraph footprint; test wrapping after every change | Medium-high; description block and CTA position move with wrapping | Verify claims about services and sustainability |
| Hero CTA | `siteContent.hero.ctaLabel` | Ger started | Short action label | Keep to one line within the fixed pill | High; CTA width and arrow treatment are characterized | Confirm approved spelling and destination |
| Hero video text | `siteContent.hero.videoTitle` and `videoDescription` | Farming in Motion; Real-time insights... | Short title and supporting sentence | Keep title to one line and description compact | Medium; video card dimensions are fixed | Verify claims and relationship to supplied video |
| SEO metadata | `siteContent.seo` | Current title, description, and favicon path | Strings and asset path | Title should remain concise; description should remain suitable for search snippets | Low for layout, high for discoverability and social previews | Verify brand, claims, and canonical/OG requirements before expanding |
| Hero background image | `siteContent.hero.backgroundImage` | Local preserved PNG path | Local asset path | Preserve the existing 2880 x 1600 source ratio and centered cover treatment | High; focal point, crop, preload behavior, and responsive rendering are contractual | Confirm ownership/provenance and inspect all four fixed widths |
| Hero video | `siteContent.hero.videoSource` | Local MP4 path | Local asset path | Preserve MP4 playback, approximately current dimensions and encoding, `autoPlay`, `loop`, `muted`, `playsInline`, and `preload` behavior | Very high; video is part of the hero interaction and timing | Confirm codec, file availability, autoplay behavior, and licensing |
| Header logo | `SiteHeader.tsx` image slot | Preserved local logo asset | Local asset path | Preserve contain-like treatment and the existing intrinsic dimensions | High; fixed desktop and mobile header geometry | Confirm approved logo file and accessibility text |

## Content intentionally left local

One-off composition remains in JSX where centralizing it would obscure the layout. The hero’s semantic grouping, video overlay structure, CTA arrow, and section wrappers stay in `Hero.tsx`. Header interaction labels that describe transient control state, such as `Open menu` and `Close menu`, remain local because they are behavior-state labels rather than editorial site content. The `legacyBaseUrl` environment bridge also remains component/page logic because it controls routing behavior, not copy.

The candidate currently contains only the migrated shell and hero. Content for the unmigrated homepage sections, contact page, FAQ, testimonials, services, gallery, footer, and legal areas should be centralized only when those sections are migrated. Do not invent content or create placeholder data structures for sections that do not yet exist in the candidate.

## Image replacement rules

Replace images by changing the path in the relevant content slot or, for the header logo, its clearly marked component slot. Do not rename, recompress, recrop, convert, or change MIME assumptions casually. A replacement must be checked for the same intended aspect ratio, focal point, crop behavior, responsive composition, loading behavior, and animation context. The hero background currently uses a centered `cover` crop, while the logo uses contain-like sizing. The hero video must remain a local MP4 with inline autoplay attributes unless a separate approved product decision changes that behavior.

Before accepting a replacement, compare captures at the fixed audit viewports: **1440 × 1000**, **1024 × 900**, **768 × 900**, and **390 × 844**. Also check the initial hero entry state, settled state, mobile menu state, keyboard focus, image loading, and video playback. If the replacement changes focal point or crop at any viewport, treat it as a visual change rather than a content-only change.

## Animation and content coupling

The migrated hero animations are attached to stable layout classes and do not measure individual text strings. Nevertheless, content length affects line wrapping, block height, and therefore the position and timing perceived by the user. Do not add text-dependent animation logic merely to accommodate a new copy length. Instead, keep copy within the documented footprint or obtain an approved visual comparison for a larger change.

The header’s navigation uses non-wrapping desktop links and fixed CTA geometry. The responsive menu uses characterized panel and header heights. A navigation label, title, or CTA that wraps or overflows is not a safe content-only change. Content updates must preserve the established animation, responsive, focus, and loading behavior.

## Verification and factual review

Every content update should run `npm run typecheck` and `npm run build` from `candidate/`. For visual changes, run the Playwright suite against a local preview and compare against the approved reference captures. A successful build is not sufficient to establish visual equivalence. Editorial changes involving company details, addresses, email, phone numbers, statistics, product/crop information, sustainability claims, social links, SEO metadata, or legal copy require factual confirmation from the approved content owner before publication.
