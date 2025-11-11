import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const models = [
  {
    name: "Pulseira Laserband",
    description: "Resistente à água, perfeita para eventos de longa duração e festas aquáticas.",
    image: "/Pulseira.png",
    whatsappMessage: "Olá!%20Tenho%20interesse%20na%20pulseira%20de%20vinil%20personalizada!",
    color: "from-[#ff005c] to-[#e6ff4b]",
  },
  {
    name: "Pulseira de Papel Tyvek",
    description: "Econômica e versátil, ideal para eventos de um dia e controle de acesso.",
    image: "/tyvek-paper-wristband-with-vibrant-colors.jpg",
    whatsappMessage: "Olá!%20Tenho%20interesse%20na%20pulseira%20de%20papel%20Tyvek%20personalizada!",
    color: "from-secondary to-secondary/60",
  },
]

export function ModelsSection() {
  return (
    <section id="modelos" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Conheça a pulseira para {""}
            <span className="bg-gradient-to-r from-[#ff005c] via-[#ff005c] to-[#e6ff4b] bg-clip-text text-transparent">
              eventos e baladas
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Descubra as vantagens da nossa pulseira exclusiva, ideal para eventos de longa duração e festas.
          </p>
        </div>

        {/* Laserband Details */}
        <div className="max-w-4xl mx-auto bg-card/50 backdrop-blur-sm border-2 border-border rounded-lg p-8 shadow-lg">
          <div className="w-full h-full overflow-hidden rounded-md mb-6">
            <img
              src="/Pulseiras.png"
              alt="Pulseira Laserband"
              className="w-full h-[340] object-cover rounded-md"
            />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-4">Características da Pulseira Laserband</h3>
          <ul className="list-disc list-inside text-muted-foreground text-lg leading-relaxed">
            <li>Resistente à água, perfeita para eventos de longa duração e festas.</li>
            <li>Lacre picotado para maior segurança e praticidade.</li>
            <li>Design confortável que não tranca a circulação.</li>
          </ul>
          <Button
            asChild
            className="bg-[#ff005c] text-white hover:bg-[#ff005c]/90 font-semibold text-lg w-full px-6 py-6 shadow-md hover:shadow-[#ff005c]/30 transition-all rounded-md mt-6"
          >
            <Link href="https://wa.me/5545998103872?text=Olá!%20Tenho%20interesse%20na%20Pulseira%20Laserband!" target="_blank">
              Pedir pelo WhatsApp
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
