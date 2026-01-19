import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Maria Silva",
      location: "Copacabana, RJ",
      rating: 5,
      text: "Excelente serviço! A equipe da Casa Limpa é muito profissional e atenciosa. Minha casa ficou impecável. Recomendo muito!",
      date: "Há 2 semanas",
    },
    {
      name: "João Santos",
      location: "Barra da Tijuca, RJ",
      rating: 5,
      text: "Contratei o serviço de limpeza de caixa d'água e fiquei muito satisfeito. Pontualidade e qualidade excelentes. Com certeza voltarei a contratar!",
      date: "Há 1 mês",
    },
    {
      name: "Ana Costa",
      location: "Ipanema, RJ",
      rating: 5,
      text: "A babá que contratei através da Casa Limpa é maravilhosa! Muito carinhosa e profissional com meus filhos. Estou muito tranquila.",
      date: "Há 3 semanas",
    },
    {
      name: "Carlos Oliveira",
      location: "Tijuca, RJ",
      rating: 5,
      text: "O serviço de marido de aluguel resolveu vários pequenos reparos na minha casa. Profissional competente e preço justo. Muito bom!",
      date: "Há 1 semana",
    },
    {
      name: "Fernanda Lima",
      location: "Botafogo, RJ",
      rating: 5,
      text: "Contratei o pacote mensal e estou adorando! Minha casa sempre limpa e organizada. A equipe é de confiança e muito cuidadosa.",
      date: "Há 2 meses",
    },
    {
      name: "Roberto Alves",
      location: "Leblon, RJ",
      rating: 5,
      text: "Atendimento impecável desde o primeiro contato. A cuidadora de idosos que indicaram para minha mãe é excepcional. Muito obrigado!",
      date: "Há 1 mês",
    },
  ]

  return (
    <section id="depoimentos" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#022f52] mb-4">O Que Nossos Clientes Dizem</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A satisfação dos nossos clientes é nossa maior conquista
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 relative"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-[#85e0ff] opacity-50" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#0090c5] text-[#0090c5]" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>

              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-[#022f52]">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.location}</p>
                <p className="text-xs text-gray-500 mt-1">{testimonial.date}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-gray-600">
            Mais de <span className="font-bold text-[#0090c5]">500 clientes satisfeitos</span> no Rio de Janeiro
          </p>
        </div>
      </div>
    </section>
  )
}
