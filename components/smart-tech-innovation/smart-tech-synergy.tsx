import { ArrowRight, Code2, CreditCard, GraduationCap } from "lucide-react"

const steps = [
  {
    icon: Code2,
    label: "Smart Tech",
    role: "Desenvolvimento",
    color: "#E0123B",
  },
  {
    icon: CreditCard,
    label: "SmartConsig",
    role: "Operacao de Credito",
    color: "#E0123B",
  },
  {
    icon: GraduationCap,
    label: "Smart Desenvolve",
    role: "Estrategia e Treinamento",
    color: "#E0123B",
  },
]

export default function SmartTechSynergy() {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#E0123B]">
            Ecossistema Integrado
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Sinergia no Ecossistema
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Tres pilares interconectados que formam uma cadeia de valor unica no
            mercado financeiro.
          </p>
        </div>

        {/* Flow diagram */}
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-0">
          {steps.map((step, index) => (
            <div key={step.label} className="flex items-center">
              {/* Step card */}
              <div className="flex w-64 flex-col items-center rounded-xl border border-border bg-card p-8 text-center transition-all duration-300 hover:border-[#E0123B]/30 hover:shadow-lg">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#E0123B]/5">
                  <step.icon className="h-6 w-6 text-[#E0123B]" />
                </div>
                <h3 className="text-base font-bold text-foreground">
                  {step.label}
                </h3>
                <p className="mt-1 text-sm font-medium text-[#E0123B]">
                  {step.role}
                </p>
              </div>

              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <>
                  {/* Desktop arrow */}
                  <div className="hidden items-center px-4 md:flex">
                    <div className="h-px w-8 bg-[#E0123B]/30" />
                    <ArrowRight className="h-5 w-5 text-[#E0123B]/50" />
                  </div>
                  {/* Mobile arrow */}
                  <div className="flex rotate-90 items-center py-2 md:hidden">
                    <div className="h-px w-6 bg-[#E0123B]/30" />
                    <ArrowRight className="h-4 w-4 text-[#E0123B]/50" />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Caption */}
        <p className="mt-12 text-center text-sm font-medium text-muted-foreground">
          A tecnologia como alicerce para o crescimento seguro do grupo.
        </p>
      </div>
    </section>
  )
}
