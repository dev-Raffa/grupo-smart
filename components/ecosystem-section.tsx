import { Cpu, Lightbulb, Code } from "lucide-react"

const ecosystem = [
  {
    name: "SmartConsig",
    description:
      "Plataforma principal de originacao e gestao de credito consignado com integracao completa aos orgaos publicos.",
    icon: Cpu,
  },
  {
    name: "Smart Tech",
    description:
      "Braco tecnologico do grupo, responsavel por infraestrutura, APIs e inteligencia de dados para o ecossistema financeiro.",
    icon: Lightbulb,
  },
  {
    name: "Smart Desenvolve",
    description:
      "Divisao dedicada a inovacao, pesquisa e desenvolvimento de novas solucoes para o mercado de credito.",
    icon: Code,
  },
]

export default function EcosystemSection() {
  return (
    <section id="ecossistema" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Ecossistema
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl">
            Tres pilares. Uma visao integrada.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Nosso ecossistema conecta tecnologia, credito e inovacao para oferecer
            solucoes completas ao mercado financeiro.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {ecosystem.map((item) => (
            <div
              key={item.name}
              className="group relative rounded-xl border border-border bg-background p-8 transition-all hover:border-primary/20 hover:shadow-lg"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-border transition-colors group-hover:border-primary/30">
                <item.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-foreground">{item.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
              <div className="mt-6 h-px w-12 bg-primary/20 transition-all group-hover:w-full group-hover:bg-primary/40" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
