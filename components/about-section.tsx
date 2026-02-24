import { Target, Eye, Award } from "lucide-react"

const pillars = [
  {
    icon: Target,
    title: "Missao",
    description:
      "Democratizar o acesso ao credito por meio de tecnologia, oferecendo solucoes eficientes e seguras para instituicoes financeiras e seus clientes.",
  },
  {
    icon: Eye,
    title: "Visao",
    description:
      "Ser referencia nacional em tecnologia para o mercado de credito, reconhecidos pela excelencia operacional e compromisso com a inovacao.",
  },
  {
    icon: Award,
    title: "Valores",
    description:
      "Etica, transparencia, inovacao continua, foco no cliente e compromisso com o desenvolvimento sustentavel do mercado financeiro.",
  },
]

export default function AboutSection() {
  return (
    <section id="o-grupo" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              O Grupo
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-secondary-foreground text-balance md:text-4xl">
              Mais de uma decada transformando o mercado de credito
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              O Grupo SmartConsig nasceu da uniao entre expertise financeira e
              inovacao tecnologica. Desde 2012, construimos uma infraestrutura
              robusta que conecta bancos, correspondentes e tomadores de credito
              em uma plataforma unica e eficiente.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Nossa trajetoria e marcada pelo compromisso com a governanca, a
              conformidade regulatoria e o desenvolvimento de solucoes que
              simplificam processos e ampliam oportunidades.
            </p>
          </div>

          {/* Right - Pillars */}
          <div className="flex flex-col gap-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="flex items-start gap-5 rounded-xl border border-border bg-background p-6"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border">
                  <pillar.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
