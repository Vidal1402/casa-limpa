"use client"

import { Phone } from "lucide-react"
import { useEffect, useState } from "react"

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar após 300px de scroll
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClick = () => {
    window.open(
      "https://wa.me/5521979750896?text=Olá! Gostaria de solicitar um orçamento para os serviços da Casa Limpa.",
      "_blank",
    )
  }

  if (!isVisible) return null

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25d366] hover:bg-[#20ba5a] text-white p-4 md:p-5 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 animate-bounce md:animate-none group"
      aria-label="Falar no WhatsApp"
    >
      <Phone className="w-6 h-6 md:w-7 md:h-7" />
      
      {/* Tooltip */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-[#022f52] text-white px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        <span className="text-sm font-semibold">Falar no WhatsApp</span>
        <div className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-[#022f52]"></div>
      </div>

      {/* Indicador de notificação */}
      <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
        1
      </div>
    </button>
  )
}
