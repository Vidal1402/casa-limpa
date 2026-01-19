"use client"

import { Phone, Zap, Clock } from "lucide-react"
import { useEffect, useState } from "react"

export function BannerSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleContact = () => {
    window.open(
      "https://wa.me/5521979750896?text=Olá! Quero contratar os serviços da Casa Limpa AGORA!",
      "_blank",
    )
  }

  return (
    <section className="py-6 md:py-8 bg-gradient-to-r from-[#022f52] to-[#0090c5] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          {/* Badge de urgência */}
          <div className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm animate-pulse">
            <Zap className="w-4 h-4" />
            <span>OFERTA LIMITADA</span>
          </div>

          {/* Texto principal */}
          <div className="text-center md:text-left">
            <p className="text-white font-bold text-base md:text-lg">
              ⚡ Disponibilidade Imediata - Agende Hoje Mesmo!
            </p>
            <p className="text-white/80 text-sm mt-1">
              Últimas vagas desta semana - Garanta seu horário preferido
            </p>
          </div>

          {/* CTA Button */}
          <button
            onClick={handleContact}
            className="inline-flex items-center gap-3 bg-[#20c997] hover:bg-[#1baa80] text-white font-bold text-base md:text-lg px-8 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group"
          >
            <Phone className="w-5 h-5 md:w-6 md:h-6" />
            <span>Falar no WhatsApp</span>
            <Clock className="w-4 h-4 group-hover:animate-spin" />
          </button>
        </div>
      </div>
    </section>
  )
}
