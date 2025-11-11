import { CheckCircle2, Zap, Shield, MessageCircle } from "lucide-react"

const features = [
  {
    icon: CheckCircle2,
    title: "Impressão de alta qualidade",
    description: "Tecnologia de ponta para impressões de alta qualidade e durabilidade",
    color: "text-primary",
  },
  {
    icon: Zap,
    title: "Entrega rápida em todo o Brasil",
    description: "Receba suas pulseiras em poucas horas",
    color: "text-secondary",
  },
  {
    icon: Shield,
    title: "Personalização total",
    description: "Seu design, sua marca - sem limites",
    color: "text-accent",
  },
  {
    icon: MessageCircle,
    title: "Atendimento direto via WhatsApp",
    description: "Suporte rápido e personalizado para seu projeto",
    color: "text-chart-4",
  },
]

export function WhyChooseSection() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Por que escolher a{" "}
            <span className="bg-gradient-to-r from-[#ff005c] via-[#ff005c] to-[#e6ff4b] bg-clip-text text-transparent">
              Pulse Vibe
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-foreground font-medium max-w-3xl mx-auto leading-relaxed text-pretty">
            Transforme seu evento com pulseiras únicas e feitas do seu jeito!
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card/80 backdrop-blur-sm border-2 border-border hover:border-[#ff005c] rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`${feature.color} p-3 bg-background rounded-xl group-hover:scale-110 transition-transform`}
                >
                  <feature.icon className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
