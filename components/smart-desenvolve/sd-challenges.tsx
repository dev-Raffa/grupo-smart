import { TrendingDown, Users, AlertCircle } from "lucide-react"

const challenges = [
  {
    icon: TrendingDown,
    title: "Escalabilidade Limitada",
    description:
      "A maioria dos Corbans enfrenta dificuldade em crescer alem de um certo patamar por falta de processos estruturados e metricas de acompanhamento.",
  },
  {
    icon: Users,
    title: "Equipes Despreparadas",
    description:
      "Sem metodologias de vendas adequadas, as equipes comerciais operam abaixo do seu potencial, resultando em conversoes baixas e ciclos de venda longos.",
  },
  {
    icon: AlertCircle,
    title: "Falta de Ferramentas",
    description:
      "A ausencia de tecnologia integrada e processos bem definidos impede a visao estrategica e a tomada de decisoes baseada em dados.",
  },
]

export default function SDChallenges() {
  return (
    <section className="bg-muted/50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#E0123B]">
            O Desafio do Mercado
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-foreground text-balance md:text-4xl">
            As barreiras para escalar uma operacao de vendas
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Identificamos os principais obstaculos que impedem os Corbans de
            alcancar o proximo nivel de resultados.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {challenges.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-border bg-background p-8 transition-shadow hover:shadow-md"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E0123B]/10">
                <item.icon className="h-5 w-5 text-[#E0123B]" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
