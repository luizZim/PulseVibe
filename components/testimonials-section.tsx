"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, User } from "lucide-react"
import { useState, useEffect } from "react"

const testimonials = [
  {
    name: "Marina Silva",
    role: "Organizadora de Eventos",
    content:
      "As pulseiras ficaram incríveis! A qualidade superou nossas expectativas e o atendimento foi super rápido.",
    rating: 5,
    image: "/realistic-woman-1.jpg",
  },
  {
    name: "Carlos Eduardo",
    role: "Dono de Balada",
    content:
      "Trabalho com a Pulse Vibe há algum tempo e sempre entregam no prazo e a personalização é perfeita!",
    rating: 5,
    image: "/realistic-man-1.jpg",
  },
  {
    name: "Juliana Costa",
    role: "Produtora de Festas",
    content:
      "Melhor custo-benefício do mercado! As pulseiras de vinil são resistentes e ficam lindas com nosso logo.",
    rating: 5,
    image: "/realistic-woman-2.jpg",
  },
  {
    name: "Roberto Alves",
    role: "Coordenador de Festival",
    content:
      "Fizemos 5000 pulseiras personalizadas e todas chegaram perfeitas. Recomendo demais!",
    rating: 5,
    image: "/realistic-man-2.jpg",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="depoimentos"
      className="py-20 md:py-32 bg-card/20 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            O que nossos{" "}
            <span className="bg-gradient-to-r from-accent to-chart-4 bg-clip-text text-transparent">
              clientes dizem
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Milhares de pulseiras feitas com excelência. Veja alguns depoimentos
            de quem já transformou seus eventos com a PulseVibe.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className={`transition-all duration-500 ${index === currentIndex
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 absolute inset-0"
                  } bg-card/80 backdrop-blur-sm border-2 border-[#ff005c]/50`}
              >
                <CardContent className="p-8 md:p-12">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6 justify-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 fill-chart-4 text-chart-4"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-lg md:text-xl text-foreground mb-8 text-center leading-relaxed text-pretty">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-16 h-16 rounded-full border-2 flex items-center justify-center bg-muted-foreground/10">
                      <User className="w-8 h-8 text-[#ff005c]" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${index === currentIndex
                  ? "bg-[#ff005c] w-8"
                  : "bg-[#ff005c]/30 hover:bg-[#ff005c]/50"
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Photos Section */}
        {/* <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Fotos Reais de Eventos
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="relative group overflow-hidden rounded-xl aspect-square"
              >
                <img
                  src={`/people-at-party-wearing-colorful-wristbands-photo-.jpg?height=400&width=400&query=people at party wearing colorful wristbands photo ${i}`}
                  alt={`Event ${i}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  )
}
