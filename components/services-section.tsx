"use client"

import { useEffect, useRef, useState } from "react"
import { Sparkles, Droplet, Wrench, Baby, Heart, PenTool as Tool, Flower2 } from "lucide-react"

const services = [
  {
    icon: Sparkles,
    title: "Faxina Completa",
    description: "Faxina geral, limpeza de geladeira, passar roupa e lavar louça. Deixe sua casa impecável!",
  },
  {
    icon: Droplet,
    title: "Limpeza de Caixa d'Água",
    description: "Limpeza profissional e higienização completa da sua caixa d'água com produtos certificados.",
  },
  {
    icon: Wrench,
    title: "Marido de Aluguel",
    description: "Pequenos reparos, instalações e manutenções domésticas com profissionais qualificados.",
  },
  {
    icon: Tool,
    title: "Serralheiro",
    description: "Serviços especializados em serralheria, fechaduras, portões e estruturas metálicas.",
  },
  {
    icon: Baby,
    title: "Babá",
    description: "Profissionais capacitadas para cuidar dos seus filhos com carinho, segurança e dedicação.",
  },
  {
    icon: Heart,
    title: "Cuidador de Idoso",
    description: "Cuidado especializado para idosos com atenção, respeito e toda assistência necessária.",
  },
  {
    icon: Flower2,
    title: "Jardinagem",
    description: "Cuidado e manutenção do seu jardim com podas, plantios e paisagismo profissional.",
  },
]

export function ServicesSection() {
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

  return (
    <section id="servicos" ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold text-[#022f52] mb-4 text-balance ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            Nossos{" "}
            <span className="bg-gradient-to-r from-[#0090c5] to-[#85e0ff] bg-clip-text text-transparent">
              Serviços Completos
            </span>
          </h2>
          <p
            className={`text-lg text-[#022f52]/70 leading-relaxed ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.1s" }}
          >
            Oferecemos uma ampla gama de serviços domésticos profissionais para facilitar sua vida e cuidar do que é
            mais importante para você.
          </p>
          <div
            className={`mt-4 inline-flex items-center gap-2 bg-[#0090c5]/10 border border-[#0090c5] rounded-full px-4 py-2 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.15s" }}
          >
            <span className="text-sm font-semibold text-[#022f52]">
              ✓ 7 tipos de serviços • ⚡ Atendimento imediato • 💯 Garantia total
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className={`text-center group cursor-pointer ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="flex justify-center mb-4">
                <service.icon
                  className="w-16 h-16 text-[#0090c5] group-hover:text-[#85e0ff] transition-colors duration-300"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-xl font-bold text-[#022f52] mb-2">{service.title}</h3>
              <p className="text-[#022f52]/70 leading-relaxed mb-4">{service.description}</p>
              <a
                href="https://wa.me/5521979750896?text=Olá! Gostaria de saber mais sobre os serviços da Casa Limpa."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-semibold text-[#0090c5] hover:text-[#022f52] transition-colors group-hover:underline"
              >
                Saber mais →
              </a>
            </div>
          ))}
        </div>

        {/* CTA adicional na seção de serviços */}
        <div
          className={`max-w-2xl mx-auto mt-12 text-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "0.9s" }}
        >
          <div className="bg-gradient-to-r from-[#0090c5] to-[#85e0ff] rounded-xl p-6 text-white shadow-lg">
            <p className="text-lg font-bold mb-2">Pronto para contratar nossos serviços?</p>
            <p className="text-sm text-white/90 mb-4">
              Entre em contato agora e garante seu agendamento para esta semana!
            </p>
            <a
              href="https://wa.me/5521979750896?text=Olá! Quero contratar os serviços da Casa Limpa."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#0090c5] font-bold px-6 py-3 rounded-full hover:bg-[#85e0ff] hover:text-[#022f52] transition-all duration-300 hover:scale-105 shadow-md"
            >
              Falar no WhatsApp Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
