"use client"

import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function CtaSection() {
  const handleWhatsAppClick = () => {
    window.open(
      "https://api.whatsapp.com/send?phone=5521979750896&text=Olá! Gostaria de solicitar um orçamento para serviços de faxina.",
      "_blank",
    )
  }

  return (
    <section
      id="contato"
      className="py-16 md:py-24 bg-gradient-to-br from-[#0090c5] to-[#022f52] text-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#85e0ff]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#85e0ff]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">Pronto para Contratar?</h2>
          <p className="text-lg md:text-xl mb-8 leading-relaxed text-white/90">
            Entre em contato agora mesmo e solicite um orçamento personalizado. Nossa equipe está pronta para atender
            você!
          </p>

          <Button
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-white text-[#0090c5] hover:bg-[#85e0ff] hover:text-[#022f52] text-lg px-8 py-6 transition-all duration-300 hover:scale-105 shadow-xl mb-6"
          >
            <Phone className="w-5 h-5 mr-2" />
            Falar no WhatsApp Agora
          </Button>

          <p className="text-xl font-semibold flex items-center justify-center gap-2">
            <Phone className="w-5 h-5" />
            {"(21) 97975-0896"}
          </p>
        </div>
      </div>
    </section>
  )
}
