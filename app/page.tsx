import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ModelsSection } from "@/components/models-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FinalCTASection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ModelsSection />
      <HowItWorksSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <FinalCTASection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
