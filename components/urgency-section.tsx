"use client"

import { Clock, Zap, Shield, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function UrgencySection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/5521979750896?text=Olá! Quero aproveitar a promoção especial e contratar os serviços da Casa Limpa AGORA!",
      "_blank",
    )
  }

  return (
    <section
      ref={sectionRef}
      className="py-12 md:py-16 bg-gradient-to-r from-[#20c997] to-[#0090c5] relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div
            className={`bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl border-2 border-[#20c997] ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            {/* Badge de urgência */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="bg-red-500 text-white px-4 py-2 rounded-full flex items-center gap-2 animate-pulse">
                <Zap className="w-4 h-4" />
                <span className="font-bold text-sm">OFERTA LIMITADA</span>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#022f52] text-center mb-4">
              🎉 Não Perça Esta Oportunidade!
            </h2>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-gradient-to-br from-[#85e0ff]/20 to-[#0090c5]/20 rounded-lg">
                <Clock className="w-8 h-8 text-[#0090c5] mx-auto mb-2" />
                <p className="text-sm text-[#022f52] font-semibold">
                  Disponível hoje mesmo
                </p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-[#85e0ff]/20 to-[#0090c5]/20 rounded-lg">
                <Shield className="w-8 h-8 text-[#0090c5] mx-auto mb-2" />
                <p className="text-sm text-[#022f52] font-semibold">
                  100% de garantia
                </p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-[#85e0ff]/20 to-[#0090c5]/20 rounded-lg">
                <CheckCircle2 className="w-8 h-8 text-[#20c997] mx-auto mb-2" />
                <p className="text-sm text-[#022f52] font-semibold">
                  Profissionais certificados
                </p>
              </div>
            </div>

            <div className="text-center space-y-4">
              <p className="text-lg md:text-xl text-[#022f52] font-semibold">
                ⚡ Últimas vagas disponíveis para esta semana!
              </p>
              <p className="text-[#022f52]/70">
                Agende agora e garante seu horário preferido antes que as vagas acabem
              </p>

              <Button
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-gradient-to-r from-[#20c997] to-[#0090c5] hover:from-[#1baa80] hover:to-[#0077a3] text-white font-bold px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105 mt-4"
              >
                <Phone className="w-5 h-5 mr-2" />
                RESERVAR MINHA VAGA AGORA
              </Button>

              <p className="text-sm text-[#022f52]/60 mt-2">
                📞 Ou ligue agora: <strong className="text-[#0090c5]">21 97975-0896</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
