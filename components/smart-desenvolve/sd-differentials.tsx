const differentials = [
  {
    title: "Cenarios reais",
    subtitle: "Cases baseados em operacoes reais do Grupo SmartConsig",
    description:
      "Cada treinamento e construido a partir de cenarios reais do mercado de credito brasileiro, garantindo que nossos profissionais estejam prontos para atuar desde o primeiro dia.",
  },
  {
    title: "Metodologia propria",
    subtitle: "Frameworks exclusivos desenvolvidos por especialistas do setor",
    description:
      "Desenvolvemos metodologias proprietarias validadas em mais de 500 operacoes reais, combinando as melhores praticas do mercado com a experiencia do ecossistema Smart.",
  },
  {
    title: "Acompanhamento continuo",
    subtitle: "Suporte pos-treinamento para garantir a aplicacao pratica",
    description:
      "Nao paramos na capacitacao. Cada parceiro recebe acompanhamento individualizado com mentorias, dashboards de performance e ajustes estrategicos constantes.",
  },
]

export default function SDDifferentials() {
  return (
    <section className="bg-muted py-24 lg:py-32">
      <div className="fkex flex-col items-center mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#E0123B]">
            Diferencial
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-foreground text-balance md:text-4xl">
            Experiencia de Campo
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Cada treinamento da Smart Desenvolve e construido a partir de cenarios reais
            do mercado de credito brasileiro.
          </p>
        </div>
      </div>

      {/* Full-width horizontal cards */}
      <div className="flex gap-4 max-w-7xl px-6 mt-16 mx-auto lg:px-8">
        {differentials.map((item) => (
          <div
            key={item.title}
            className="flex flex-col gap-2 rounded-xl border border-border bg-background p-8 transition-shadow hover:shadow-md"
          >
            <div className="shrink-0 md:w-64">
              <div className="flex items-center gap-2.5">
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#E0123B]" />
                <h3 className="text-base font-bold text-foreground">
                  {item.title}
                </h3>
              </div>
              <p className="mt-1 pl-[18px] text-xs text-muted-foreground italic">
                {item.subtitle}
              </p>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground md:flex-1">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
