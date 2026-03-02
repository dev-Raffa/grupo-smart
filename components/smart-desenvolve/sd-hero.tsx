import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function SDHero() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-muted pt-16">
      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Ecossistema SmartConsig
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-foreground text-balance md:text-5xl lg:text-[3.5rem]">
            Smart Desenvolve: O Acelerador de Resultados do Ecossistema Smart.
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Transformando e potencializando as operacoes Corban com metodologias
            de vendas, acompanhamento estrategico e acesso exclusivo a tecnologia
            Smart Tech.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#programa"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Conheca o Programa
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
