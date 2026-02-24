import {
  CreditCard,
  Building2,
  Users,
  Shield,
  BarChart3,
  ArrowRight,
} from "lucide-react"

const solutions = [
  {
    title: "Credito Consignado Publico",
    description:
      "Operacoes de credito consignado para servidores federais, estaduais e municipais com as melhores taxas do mercado.",
    icon: CreditCard,
  },
  {
    title: "Credito Consignado Privado",
    description:
      "Solucoes de credito consignado para colaboradores de empresas privadas com desconto em folha.",
    icon: Users,
  },
  {
    title: "Credito Empresarial",
    description:
      "Linhas de credito sob medida para empresas que buscam capital de giro ou investimento.",
    icon: Building2,
  },
  {
    title: "Gestao de Riscos",
    description:
      "Tecnologia proprietaria de analise e gestao de riscos para toda a cadeia de credito.",
    icon: Shield,
  },
  {
    title: "Inteligencia de Dados",
    description:
      "Plataforma de dados avancada para tomada de decisao e otimizacao de operacoes financeiras.",
    icon: BarChart3,
  },
  {
    title: "Plataforma White Label",
    description:
      "Infraestrutura completa de credito como servico para bancos e fintechs parceiras.",
    icon: CreditCard,
  },
]

export default function SolutionsSection() {
  return (
    <section id="solucoes" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Solucoes
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-secondary-foreground text-balance md:text-4xl">
            Solucoes de credito para cada necessidade
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Infraestrutura robusta e tecnologia proprietaria para atender
            instituicoes financeiras e tomadores de credito.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="group relative flex flex-col rounded-xl border border-border/60 bg-background p-7 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-md border border-border">
                <solution.icon
                  className="h-4.5 w-4.5 text-primary"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-base font-bold text-foreground">
                {solution.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {solution.description}
              </p>
              <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Saiba mais
                <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
