"use client"

import { MessageCircle } from "lucide-react"
import Link from "next/link"

export function FloatingWhatsApp() {
  const whatsappLink =
    "https://wa.me/5545998103872?text=Olá!%20Quero%20fazer%20um%20orçamento%20de%20pulseiras%20personalizadas!"

  return (
    <Link
      href={whatsappLink}
      target="_blank"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] rounded-full flex items-center justify-center shadow-2xl hover:shadow-[#25D366]/50 transition-all hover:scale-110 animate-bounce"
      style={{ animationDuration: "2s" }}
    >
      <MessageCircle className="w-8 h-8 text-white" />
    </Link>
  )
}
