import { Header } from "@/components/header"
import { HeroImageBanner } from "@/components/hero-image-banner"
import { BannerSection } from "@/components/banner-section"
import { ServicesSection } from "@/components/services-section"
import { PricingSection } from "@/components/pricing-section"
import { BenefitsSection } from "@/components/benefits-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FaqSection } from "@/components/faq-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroImageBanner />
      <BannerSection />
      <ServicesSection />
      <PricingSection />
      <BenefitsSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
