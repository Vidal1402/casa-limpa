"use client"

import { Shield, CheckCircle2, Clock, DollarSign, Award, Heart } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const guarantees = [
  {
    icon: Shield,
    title: "Garantia 100%",
    description: "Se não ficar satisfeito com o serviço, devolvemos 100% do seu dinheiro. Sem perguntas.",
  },
  {
    icon: Award,
    title: "Profissionais Certificados",
    description: "Toda nossa equipe passa por rigorosa seleção e treinamento contínuo.",
  },
  {
    icon: Clock,
    title: "Pontualidade Garantida",
    description: "Chegamos no horário combinado ou você não paga a taxa de deslocamento.",
  },
  {
    icon: DollarSign,
    title: "Preço Transparente",
    description: "Sem taxas ocultas ou surpresas. O valor combinado é o valor que você paga.",
  },
  {
    icon: Heart,
    title: "Seguro e Confiável",
    description: "Profissionais de confiança com seguro e todas as documentações em dia.",
  },
  {
    icon: CheckCircle2,
    title: "Satisfação Garantida",
    description: "Refazemos qualquer serviço que não atenda suas expectativas, sem custo adicional.",
  },
]

export function GuaranteeSection() {
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
    <section ref={sectionRef} className="py-16 md:py-24 bg-gradient-to-br from-white to-[#f8f9fa]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold text-[#022f52] mb-4 text-balance ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            Nossas{" "}
            <span className="bg-gradient-to-r from-[#0090c5] to-[#85e0ff] bg-clip-text text-transparent">
              Garantias
            </span>
          </h2>
          <p
            className={`text-lg text-[#022f52]/70 leading-relaxed ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.1s" }}
          >
            Sua tranquilidade e satisfação são nossa prioridade. Conheça nossas garantias exclusivas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {guarantees.map((guarantee, index) => (
            <div
              key={index}
              className={`bg-white border-2 border-[#85e0ff]/30 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-[#0090c5] group ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="flex justify-center mb-4">
                <div className="bg-gradient-to-br from-[#0090c5] to-[#85e0ff] p-3 rounded-full">
                  <guarantee.icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#022f52] mb-2 text-center">{guarantee.title}</h3>
              <p className="text-[#022f52]/70 leading-relaxed text-center">{guarantee.description}</p>
            </div>
          ))}
        </div>

        {/* Badge de garantia destacado */}
        <div
          className={`max-w-2xl mx-auto mt-12 bg-gradient-to-r from-[#0090c5] to-[#85e0ff] rounded-2xl p-6 md:p-8 text-white text-center shadow-xl ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.8s" }}
        >
          <Shield className="w-16 h-16 mx-auto mb-4" strokeWidth={2} />
          <h3 className="text-2xl md:text-3xl font-bold mb-2">Garantia Total de Satisfação</h3>
          <p className="text-lg md:text-xl mb-4">
            Se não ficar 100% satisfeito com nosso serviço,{" "}
            <strong>devolvemos seu dinheiro integralmente</strong>. Sem burocracia, sem perguntas.
          </p>
          <p className="text-sm opacity-90">✓ Aplicável na primeira limpeza contratada</p>
        </div>
      </div>
    </section>
  )
}
