"use client"

import { Button } from "@/components/ui/button"
import { Phone, CheckCircle2, Clock, Shield } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function CtaSection() {
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
      "https://api.whatsapp.com/send?phone=5521979750896&text=Olá! Gostaria de solicitar um orçamento para serviços da Casa Limpa.",
      "_blank",
    )
  }

  return (
    <section
      id="contato"
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-br from-[#0090c5] to-[#022f52] text-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#85e0ff]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#85e0ff]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-4xl mx-auto text-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Transforme Sua Casa Hoje Mesmo!
          </h2>
          <p className="text-lg md:text-xl mb-6 leading-relaxed text-white/90">
            Não perca mais tempo com tarefas domésticas. Nossa equipe está pronta para atender você AGORA!
          </p>

          {/* Benefícios rápidos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg p-3">
              <Clock className="w-5 h-5 text-[#20c997]" />
              <span className="text-sm font-semibold">Atendimento 24/7</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg p-3">
              <Shield className="w-5 h-5 text-[#20c997]" />
              <span className="text-sm font-semibold">100% Garantido</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg p-3">
              <CheckCircle2 className="w-5 h-5 text-[#20c997]" />
              <span className="text-sm font-semibold">Sem compromisso</span>
            </div>
          </div>

          <div className="space-y-6">
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-[#20c997] hover:bg-[#1baa80] text-white font-bold text-lg px-10 py-7 rounded-full transition-all duration-300 hover:scale-110 shadow-2xl hover:shadow-3xl animate-pulse"
            >
              <Phone className="w-6 h-6 mr-2" />
              FALAR NO WHATSAPP AGORA
            </Button>

            <div className="space-y-2">
              <p className="text-xl font-semibold flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                (21) 97975-0896
              </p>
              <p className="text-sm text-white/70">
                📞 Disponível 24 horas por dia, 7 dias por semana
              </p>
            </div>

            {/* Garantia final */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 max-w-xl mx-auto border border-white/20">
              <p className="text-sm font-semibold">
                ✓ Garantia de satisfação 100% ou devolvemos seu dinheiro
              </p>
              <p className="text-xs text-white/70 mt-1">
                Primeira limpeza com garantia total de qualidade
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
