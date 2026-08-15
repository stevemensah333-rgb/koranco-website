import { Hero } from "../components/hero/Hero"
import { AboutSection } from "../components/about-section/AboutSection"
import { ContactSection } from "../components/contact-section/ContactSection"
import { GallerySection } from "../components/gallery-section/GallerySection"
import { ProductsSection } from "../components/products-section/ProductsSection"
import { ServicesSection } from "../components/services-section/ServicesSection"
import { TeamSection } from "../components/team-section/TeamSection"
import { TestimonialsSection } from "../components/testimonials-section/TestimonialsSection"
import { SiteHeader } from "../components/site-header/SiteHeader"

export default function HomePage() {
  return (
    <main className="migration-page">
      <SiteHeader />
      <Hero />
      <AboutSection />
      <ProductsSection />
      <ServicesSection />
      <GallerySection />
      <TeamSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  )
}
