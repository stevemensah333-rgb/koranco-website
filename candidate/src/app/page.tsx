import { Hero } from "../components/hero/Hero"
import { AboutSection } from "../components/about-section/AboutSection"
import { ContactSection } from "../components/contact-section/ContactSection"
import { GallerySection } from "../components/gallery-section/GallerySection"
import { ProductsSection } from "../components/products-section/ProductsSection"
import { ServicesSection } from "../components/services-section/ServicesSection"
import { SiteHeader } from "../components/site-header/SiteHeader"

const legacyBaseUrl =
  process.env.NEXT_PUBLIC_LEGACY_BASE_URL ?? "https://koranco.framer.website"

export default function HomePage() {
  return (
    <main className="migration-page">
      <SiteHeader legacyBaseUrl={legacyBaseUrl} />
      <Hero legacyBaseUrl={legacyBaseUrl} />
      <AboutSection />
      <ProductsSection />
      <ServicesSection />
      <GallerySection />
      <ContactSection />
    </main>
  )
}
