"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Check, Star, Phone } from "lucide-react"

const pricingPlans = [
  {
    name: "4h Básico",
    price: "R$ 125,00",
    description: "Sem passadeira",
    features: ["Faxina geral completa", "Limpeza de geladeira", "Lavar louça", "4 horas de serviço"],
    isPopular: false,
  },
  {
    name: "4h Completo",
    price: "R$ 144,00",
    description: "Com passadeira",
    features: ["Faxina geral completa", "Limpeza de geladeira", "Passar roupa", "Lavar louça", "4 horas de serviço"],
    isPopular: true,
  },
  {
    name: "8h",
    price: "Sob consulta",
    description: "Sem passadeira",
    features: [
      "Faxina geral completa",
      "Limpeza de geladeira",
      "Lavar louça",
      "8 horas de serviço",
      "Ideal para casas grandes",
    ],
    isPopular: false,
  },
]

export function PricingSection() {
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

  const handleWhatsAppClick = (planName: string) => {
    window.open(
      `https://api.whatsapp.com/send?phone=5521979750896&text=Olá! Gostaria de contratar o pacote ${planName}.`,
      "_blank",
    )
  }

  return (
    <section
      id="pacotes"
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-br from-[#85e0ff]/5 via-white to-[#0090c5]/5"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold text-[#022f52] mb-4 text-balance ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            Pacotes e Preços{" "}
            <span className="bg-gradient-to-r from-[#0090c5] to-[#85e0ff] bg-clip-text text-transparent">
              Transparentes
            </span>
          </h2>
          <p
            className={`text-lg text-[#022f52]/70 leading-relaxed ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.1s" }}
          >
            Escolha o pacote ideal para suas necessidades. Preços justos e transparentes, sem taxas ocultas ou surpresas.
          </p>
          <div
            className={`mt-4 inline-flex items-center gap-2 bg-[#20c997]/10 border border-[#20c997] rounded-full px-4 py-2 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.15s" }}
          >
            <span className="text-sm font-semibold text-[#022f52]">
              💰 Preços justos • ⚡ Sem compromisso • ✓ Garantia total
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative border-2 transition-all duration-300 hover:shadow-xl ${
                plan.isPopular
                  ? "border-[#0090c5] shadow-lg scale-105 lg:scale-110"
                  : "border-[#85e0ff]/30 hover:border-[#0090c5]"
              } ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#0090c5] to-[#85e0ff] text-white text-sm font-bold rounded-full flex items-center gap-1 shadow-lg">
                  <Star className="w-4 h-4 fill-white" />
                  Mais Popular
                </div>
              )}

              <CardHeader className="text-center pb-4 pt-8">
                <h3 className="text-2xl font-bold text-[#022f52] mb-2">{plan.name}</h3>
                <p className="text-sm text-[#022f52]/60 mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-[#0090c5]">{plan.price}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4 pb-8">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-[#022f52]/80">
                      <Check className="w-5 h-5 text-[#0090c5] flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => handleWhatsAppClick(plan.name)}
                  className={`w-full transition-all duration-300 hover:scale-105 font-bold ${
                    plan.isPopular
                      ? "bg-[#20c997] hover:bg-[#1baa80] text-white shadow-lg animate-pulse"
                      : "bg-[#022f52] hover:bg-[#0090c5] text-white"
                  }`}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  {plan.isPopular ? "CONTRATAR AGORA" : "Contratar Agora"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center mt-8 text-[#022f52]/70">
          <span className="font-semibold">Hora extra:</span> Entre em contato para consultar valores
        </p>
      </div>
    </section>
  )
}
