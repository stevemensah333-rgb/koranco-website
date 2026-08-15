import { Hero } from "../components/hero/Hero"
import { SiteHeader } from "../components/site-header/SiteHeader"

const legacyBaseUrl =
  process.env.NEXT_PUBLIC_LEGACY_BASE_URL ?? "https://koranco.framer.website"

export default function HomePage() {
  return (
    <main className="migration-page">
      <SiteHeader legacyBaseUrl={legacyBaseUrl} />
      <Hero legacyBaseUrl={legacyBaseUrl} />
    </main>
  )
}
