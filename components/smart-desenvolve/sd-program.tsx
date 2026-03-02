import { GraduationCap, TrendingUp, Zap } from "lucide-react"

const pillars = [
  {
    icon: GraduationCap,
    title: "Capacitacao",
    subtitle: "Metodologias de Vendas",
    description:
      "Treinamentos especializados em tecnicas de vendas consultivas, construcao de pipeline e estrategias de conversao adaptadas ao mercado de consignado.",
    bullets: [
      "Treinamentos presenciais e online",
      "Metodologias comprovadas",
      "Material de apoio exclusivo",
    ],
  },
  {
    icon: TrendingUp,
    title: "Acompanhamento",
    subtitle: "Monitoramento e Ajuste Estrategico",
    description:
      "Analise continua dos resultados com dashboards personalizados, sessoes de mentoria e ajustes estrategicos para otimizar a performance.",
    bullets: [
      "Dashboards em tempo real",
      "Sessoes de mentoria individual",
      "Relatorios de performance",
    ],
  },
  {
    icon: Zap,
    title: "Acesso Privilegiado",
    subtitle: "Ferramentas e Processos Smart Tech",
    description:
      "Integracao completa com as ferramentas Smart Tech, incluindo processos estruturados, automacoes e acesso prioritario a novas funcionalidades.",
    bullets: [
      "Integracao Smart Tech",
      "Processos estruturados",
      "Automacoes exclusivas",
    ],
  },
]

export default function SDProgram() {
  return (
    <section id="programa" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#E0123B]">
            A Solucao
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-foreground text-balance md:text-4xl">
            Programa de Aceleracao
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Tres pilares que, combinados, criam o ambiente ideal para escalar os
            resultados da sua operacao Corban.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="flex flex-col rounded-xl border border-border bg-background p-8 transition-shadow hover:shadow-md"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E0123B]/10">
                <pillar.icon
                  className="h-5 w-5 text-[#E0123B]"
                  strokeWidth={1.5}
                />
              </div>

              <h3 className="text-lg font-bold text-foreground">
                {pillar.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-[#E0123B]">
                {pillar.subtitle}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {pillar.description}
              </p>

              <ul className="mt-6 flex flex-col gap-3 border-t border-border pt-6">
                {pillar.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-center gap-2.5 text-sm font-medium text-foreground"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#E0123B]" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
