import { ArrowRight } from "lucide-react"

const steps = [
  {
    number: "1",
    title: "Escolha o modelo",
    description: "Selecione o tipo de pulseira ideal para seu evento",
    icon: "🎯",
    color: "from-primary to-primary/60",
  },
  {
    number: "2",
    title: "Envie sua arte",
    description: "Compartilhe seu design",
    icon: "🎨",
    color: "from-secondary to-secondary/60",
  },
  {
    number: "3",
    title: "Receba em casa",
    description: "Suas pulseiras prontas e personalizadas em poucas horas",
    icon: "🚀",
    color: "from-accent to-accent/60",
  },
]

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-20 md:py-32 bg-card/30 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Como{" "}
            <span className="bg-gradient-to-r from-[#ff005c] to-[#e6ff4b] bg-clip-text text-transparent">Funciona</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Processo simples e rápido para criar suas pulseiras personalizadas
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col">
                {/* Step Card */}
                <div className="relative group flex-1 flex flex-col">
                  {/* Number Badge */}
                  <div
                    className={`absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-2xl font-bold text-white shadow-lg z-10`}
                  >
                    {step.number}
                  </div>

                  {/* Card Content */}
                  <div className="bg-card border-2 border-border rounded-2xl p-8 pt-12 text-center hover:border-[#ff005c] transition-all duration-300 hover:shadow-xl hover:shadow-[#ff005c]/10 flex-1 flex flex-col justify-center">
                    <div className="text-5xl mb-4">{step.icon}</div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Arrow (hidden on mobile and last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-5 -translate-y-1/2 z-20">
                    <div className="flex justify-center items-center">
                      <ArrowRight className="w-8 h-8 text-[#ff005c]" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
