"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const whatsappLink =
    "https://wa.me/5545998103872?text=Olá!%20Quero%20fazer%20um%20orçamento%20de%20pulseiras%20personalizadas%20para%20meu%20evento!"

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="h-10 w-auto flex items-center justify-center">
            <img
              src="/logo.png"
              alt="PulseVibe Logo"
              className="h-32 w-auto object-contain"
              style={{ transform: 'scale(1.5)', transition: 'transform 0.3s ease' }}
              onClick={() => scrollToSection("inicio")}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-[#ff005c] transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("modelos")}
              className="text-foreground hover:text-[#ff005c] transition-colors"
            >
              Modelos
            </button>
            <button
              onClick={() => scrollToSection("como-funciona")}
              className="text-foreground hover:text-[#ff005c] transition-colors"
            >
              Como Funciona
            </button>
            <button
              onClick={() => scrollToSection("depoimentos")}
              className="text-foreground hover:text-[#ff005c] transition-colors"
            >
              Depoimentos
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              asChild
              size="lg"
              className="bg-[#25D366] text-white hover:bg-[#20BA5A] font-semibold shadow-lg hover:shadow-[#25D366]/50 transition-all"
            >
              <Link href={whatsappLink} target="_blank">
                Falar no WhatsApp
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-foreground">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-border pt-4">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("modelos")}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Modelos
            </button>
            <button
              onClick={() => scrollToSection("como-funciona")}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Como Funciona
            </button>
            <button
              onClick={() => scrollToSection("depoimentos")}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Depoimentos
            </button>
            <Button
              asChild
              size="lg"
              className="bg-[#25D366] text-white hover:bg-[#20BA5A] font-semibold w-full"
            >
              <Link href={whatsappLink} target="_blank">
                Falar no WhatsApp
              </Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
