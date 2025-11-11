"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const whatsappLink =
    "https://wa.me/5545998103872?text=Olá!%20Quero%20fazer%20um%20orçamento%20de%20pulseiras%20personalizadas%20para%20meu%20evento!"

  const scrollToModels = () => {
    const element = document.getElementById("modelos")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background z-10" />
        <img
          src="/vibrant-nightclub-party-with-colorful-neon-wristba.jpg"
          alt="Party Background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Animated Neon Circles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-20 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#ff005c]/10 border border-[#ff005c]/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4 text-[#ff005c]" />
            <span className="text-sm font-medium text-[#ff005c]">Personalização Premium</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up text-balance">
            Destaque seu evento com{" "}
            <span className="bg-gradient-to-r from-[#ff005c] via-[#ff005c] to-[#e6ff4b] bg-clip-text text-transparent">
              pulseiras personalizadas
            </span>{" "}
            incríveis!
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up leading-relaxed"
            style={{ animationDelay: "0.2s" }}
          >
            Crie pulseiras exclusivas com sua marca, logo ou arte. Entrega rápida, qualidade premium e preço acessível.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              asChild
              size="lg"
              className="bg-[#ff005c] text-white hover:bg-[#ff005c]/90 font-semibold text-lg px-8 py-8 shadow-2xl hover:shadow-[#ff005c]/50 transition-all"
            >
              <Link href={whatsappLink} target="_blank" className="flex items-center gap-2">
                Pedir orçamento no WhatsApp
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              onClick={scrollToModels}
              size="lg"
              variant="outline"
              className="border-2 border-[#e6ff4b] text-[#e6ff4b] hover:bg-[#e6ff4b] hover:text-black font-semibold text-lg px-8 py-8 transition-all bg-transparent"
            >
              Ver modelos disponíveis
            </Button>
          </div>

          {/* Trust Indicators */}
          <div
            className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-chart-4 rounded-full" />
              <span>Entrega Rápida</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-chart-4 rounded-full" />
              <span>Qualidade Premium</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-chart-4 rounded-full" />
              <span>100% Personalizável</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
