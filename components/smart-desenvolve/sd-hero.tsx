import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SDHero() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-foreground pt-16">
      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="flex flex-col items-center text-center">
          <figure className="h-52 overflow-hidden">
            <Image
              src="/images/Logo Smart Desenvolve.png"
              alt="Sede corporativa SmartConsig"
              width={300}
              height={200}
              className="object-fill"
              priority
            />
          </figure>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-muted text-balance md:text-5xl lg:text-[3.5rem]">
            O Acelerador de Resultados do{" "}
            <span className="text-[#E0123B]">Ecossistema Smart.</span>
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
