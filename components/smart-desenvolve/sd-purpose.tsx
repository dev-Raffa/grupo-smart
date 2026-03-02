import { Target, Eye, Award } from "lucide-react"

const pillars = [
  {
    icon: Target,
    title: "Missao",
    description:
      "Capacitar e acelerar operacoes Corban por meio de metodologias de vendas, acompanhamento estrategico e acesso a tecnologia de ponta, gerando crescimento sustentavel para todo o ecossistema.",
  },
  {
    icon: Eye,
    title: "Visao",
    description:
      "Ser a principal referencia em aceleracao de resultados no mercado de credito consignado, reconhecida pela excelencia na capacitacao e pelo modelo de valor compartilhado.",
  },
  {
    icon: Award,
    title: "Valores",
    description:
      "Parceria genuina, transparencia total, meritocracia, inovacao continua e compromisso com o desenvolvimento sustentavel de cada operacao do ecossistema.",
  },
]

export default function SDPurpose() {
  return (
    <section className=" py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          {/* Left: text intro */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#E0123B]">
              A Smart Desenvolve
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
              O elo entre tecnologia e resultado comercial
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              A Smart Desenvolve e o braco de capacitacao e desenvolvimento
              estrategico do Grupo SmartConsig. Nascemos da conviccao de que a
              melhor tecnologia so gera resultado quando acompanhada de
              metodologia, treinamento e suporte continuo.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Nossa atuacao vai alem do treinamento convencional: construimos uma
              jornada de aceleracao completa, desde a capacitacao tecnica ate o
              acompanhamento individualizado de resultados, garantindo que cada
              parceiro alcance seu potencial maximo.
            </p>
          </div>

          {/* Right: mission/vision/values */}
          <div className="flex flex-col gap-4">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-xl border border-border bg-background p-6 transition-shadow hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#E0123B]/10">
                    <pillar.icon
                      className="h-5 w-5 text-[#E0123B]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
