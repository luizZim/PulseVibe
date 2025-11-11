import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import Link from "next/link"

export function FinalCTASection() {
  const whatsappLink =
    "https://wa.me/5545998103872?text=Olá!%20Quero%20um%20orçamento%20de%20pulseiras%20personalizadas!"

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Vibrant Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff005c] via-[#ff005c] to-[#e6ff4b] opacity-90" />
      <div className="absolute inset-0 bg-[url('/abstract-neon-pattern-texture.jpg')] opacity-10 bg-cover bg-center" />

      {/* Animated Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white text-balance">
            Pronto para personalizar suas pulseiras?
          </h2>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed text-pretty">
            Fale agora com nossa equipe e receba seu orçamento em minutos.
          </p>

          {/* Giant CTA Button */}
          <Button
            asChild
            size="lg"
            className="bg-white text-[#ff005c] hover:bg-white/90 font-bold text-xl px-12 py-8 shadow-md hover:shadow-white/50 transition-all hover:scale-105 backdrop-blur-sm"
          >
            <Link href={whatsappLink} target="_blank" className="flex items-center gap-3">
              <MessageCircle className="w-7 h-7 text-[#ff005c]" />
              Fazer pedido pelo WhatsApp
            </Link>
          </Button>

          {/* Trust Line */}
          <p className="mt-8 text-white/80 text-sm">
            ⚡ Resposta em até 5 minutos • 🎨 Orçamento gratuito • 🚀 Entrega rápida
          </p>
        </div>
      </div>
    </section>
  )
}
