import { ShieldCheck, Layers, Lock } from "lucide-react"

const pillars = [
  {
    icon: ShieldCheck,
    title: "Circuito Fechado",
    description:
      "Dados trafegam exclusivamente no ambiente Smart, sem riscos externos.",
  },
  {
    icon: Layers,
    title: "Integridade de Dados",
    description:
      "Validacao em multiplas camadas para auditoria e seguranca total.",
  },
  {
    icon: Lock,
    title: "Criptografia Nativa",
    description:
      "Protecao de ponta a ponta em todos os processos.",
  },
]

export default function SmartTechSecurity() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#E0123B]">
            Infraestrutura
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Seguranca e Integridade
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Protecao em cada camada para que o ecossistema Smart opere com
            confiabilidade e conformidade total.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="flex flex-col items-center rounded-xl border border-border bg-card p-8 text-center transition-all duration-300 hover:border-[#E0123B]/30 hover:shadow-lg"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#E0123B]/5">
                <pillar.icon className="h-6 w-6 text-[#E0123B]" />
              </div>
              <h3 className="text-lg font-bold text-foreground">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
