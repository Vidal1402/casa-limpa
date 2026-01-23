import { Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer id="contato" className="bg-[#022f52] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#85e0ff]">Casa Limpa</h3>
            <p className="text-white/80 leading-relaxed">
              Serviços profissionais de limpeza e cuidados domésticos no Rio de Janeiro. Qualidade, confiança e
              dedicação em cada atendimento.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#85e0ff]">Contato</h4>
            <div className="space-y-3 text-white/80">
              <a
                href="https://api.whatsapp.com/send?phone=5521979750896"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#85e0ff] transition-colors"
              >
                <Phone className="w-4 h-4" />
                {"(21) 97975-0896"}
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Rio de Janeiro, RJ
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#85e0ff]">Serviços</h4>
            <ul className="space-y-2 text-white/80">
              <li>Faxina Completa</li>
              <li>Limpeza de Caixa d{"'"}Água</li>
              <li>Marido de Aluguel</li>
              <li>Serralheiro</li>
              <li>Babá</li>
              <li>Cuidador de Idoso</li>
              <li>Jardinagem</li>
              <li>Acompanhante de Hospital</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/60">
          <p>© {new Date().getFullYear()} Casa Limpa. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
