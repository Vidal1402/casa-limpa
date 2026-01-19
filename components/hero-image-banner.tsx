"use client"

import { Phone, CheckCircle2, Users, Clock, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function HeroImageBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="w-full pt-20 md:pt-24 overflow-hidden">
      <div className="relative bg-gradient-to-r from-[#022f52] via-[#0090c5] to-[#85e0ff]">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-48 h-48 md:w-72 md:h-72 bg-white/5 rounded-full translate-y-1/3 -translate-x-1/4" />
        
        <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              {/* Badge de Prova Social */}
              <div className={`flex items-center justify-center lg:justify-start gap-2 mb-4 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                  <Users className="w-4 h-4 text-white" />
                  <span className="text-white text-sm font-semibold">+500 clientes satisfeitos</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-300 text-yellow-300" />
                    <span className="text-white text-sm font-bold">4.9</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                <img 
                  src="/images/casa-limpa-2-removebg-preview.png" 
                  alt="Casa Limpa Logo" 
                  className="h-12 md:h-16 w-auto brightness-0 invert"
                />
              </div>
              
              <h1 className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
                <span className="block">CONFORTO</span>
                <span className="block text-[#85e0ff]">ABSOLUTO</span>
              </h1>
              
              <p className={`text-white/90 text-base md:text-lg lg:text-xl max-w-xl mx-auto lg:mx-0 mb-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
                Pare de perder seus finais de semana com tarefas que nós resolvemos em minutos. Sua casa merece cuidado profissional e você merece o seu descanso de volta.
              </p>

              {/* Lista de benefícios rápida */}
              <div className={`flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.3s" }}>
                <div className="flex items-center gap-2 text-white text-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#20c997]" />
                  <span>Profissionais qualificados</span>
                </div>
                <div className="flex items-center gap-2 text-white text-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#20c997]" />
                  <span>Garantia de satisfação</span>
                </div>
                <div className="flex items-center gap-2 text-white text-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#20c997]" />
                  <span>Atendimento 24/7</span>
                </div>
              </div>

              {/* Urgência e CTA */}
              <div className={`flex flex-col gap-4 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.4s" }}>
                <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg p-3 mb-2 inline-block">
                  <div className="flex items-center gap-2 text-white">
                    <Clock className="w-4 h-4 text-[#20c997] animate-pulse" />
                    <span className="text-sm font-semibold">AGENDE AGORA - Disponível hoje mesmo!</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <a
                    href="https://wa.me/5521979750896?text=Olá! Gostaria de solicitar um orçamento AGORA para os serviços da Casa Limpa."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <Button 
                      size="lg" 
                      className="w-full sm:w-auto bg-[#20c997] hover:bg-[#1baa80] text-white font-bold px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all hover:scale-105 animate-pulse"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      FALAR NO WHATSAPP AGORA
                    </Button>
                  </a>
                  <div className="text-white text-center lg:text-left">
                    <span className="text-sm text-white/70 block">Ligue agora (24 horas)</span>
                    <p className="font-bold text-xl">21 97975-0896</p>
                  </div>
                </div>

                {/* Garantia */}
                <p className="text-white/80 text-sm text-center lg:text-left mt-2">
                  ✓ Primeira limpeza com 100% de garantia ou seu dinheiro de volta
                </p>
              </div>
            </div>
            
            {/* Image */}
            <div className="flex-1 relative">
              <div className="relative">
                {/* Circular frame */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#85e0ff] to-[#0090c5] rounded-full scale-110 opacity-30" />
                <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-2xl">
                  <img
                    src="/images/casa-limpa-banner.png"
                    alt="Equipe Casa Limpa em ação"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
