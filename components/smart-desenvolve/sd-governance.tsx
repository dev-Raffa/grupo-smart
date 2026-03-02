const principles = [
  {
    numeral: "I",
    title: "Alinhamento de Incentivos",
    description:
      "A remuneracao do ecossistema ocorre exclusivamente por producao efetiva, eliminando conflitos de interesse entre as partes envolvidas na operacao.",
  },
  {
    numeral: "II",
    title: "Investimento Sem Custo Inicial",
    description:
      "O parceiro recebe acesso a infraestrutura completa sem taxas de adesao, mensalidades ou custos fixos, reduzindo a barreira de entrada e o risco operacional.",
  },
  {
    numeral: "III",
    title: "Crescimento Proporcional",
    description:
      "O resultado do grupo e diretamente proporcional ao resultado do parceiro, assegurando dedicacao estrategica continua ao desenvolvimento de cada operacao.",
  },
  {
    numeral: "IV",
    title: "Transparencia Operacional",
    description:
      "Todos os indicadores de producao, comissionamento e performance sao disponibilizados em tempo real atraves da plataforma de gestao integrada.",
  },
]

export default function SDGovernance() {
  return (
    <section id="modelo" className="bg-primary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          {/* Left: intro text */}
          <div>
            <div className="flex items-center gap-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/80">
                Modelo de Governanca
              </p>
            </div>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">
              Valor Compartilhado como Politica Corporativa
            </h2>

            <div className="mt-8 flex flex-col gap-6">
              <p className="text-base leading-relaxed text-white/80">
                O modelo de governanca da Smart Desenvolve e estruturado sobre o
                principio de valor compartilhado. Diferente de relacoes comerciais
                tradicionais baseadas exclusivamente em metas e comissionamento, a
                politica corporativa do Grupo Smart estabelece que o crescimento do
                grupo esta diretamente vinculado a producao e ao sucesso de seus
                parceiros.
              </p>
              <p className="text-base leading-relaxed text-white/80">
                O alinhamento de incentivos e total: nao ha taxas de adesao,
                mensalidades ou custos fixos impostos ao parceiro. A remuneracao do
                grupo ocorre proporcionalmente ao volume de producao efetiva,
                garantindo que o interesse de ambas as partes esteja permanentemente
                alinhado em direcao ao mesmo objetivo.
              </p>
            </div>
          </div>

          {/* Right: principle cards */}
          <div className="flex flex-col pt-4 gap-6">
            {principles.map((p) => (
              <div
                key={p.numeral}
                className="border-l-2 border-white/30 pl-6"
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-white/50">
                    {p.numeral}
                  </span>
                  <h3 className="text-base font-bold text-white">
                    {p.title}
                  </h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
