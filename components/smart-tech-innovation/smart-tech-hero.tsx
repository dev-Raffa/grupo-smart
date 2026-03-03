import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SmartTechHero() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-[#121212] pt-16">
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="smart-grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#ffffff"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#smart-grid)" />
        </svg>
      </div>

      {/* Accent glow */}
      <div className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-[#E0123B]/5 blur-[120px]" />

      <div className="relative mx-auto text-center max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="flex flex-col items-center text-center">
          <figure>
            <Image
              src="/images/logo_black-removebg-preview.png"
              alt="Sede corporativa SmartConsig"
              width={300}
              height={200}
              className="object-fill"
              priority
            />
          </figure>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white text-balance md:text-5xl lg:text-[3.5rem]">
            A Inteligencia que impulsiona o{" "}
            <span className="text-[#E0123B]">Ecossistema Smart.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-[#a1a1a1] md:text-lg">
            Conheca o braco de inovacao responsavel por desenvolver a
            infraestrutura tecnologica proprietaria que sustenta as operacoes do
            Grupo SmartConsig.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="#sistemas"
              className="inline-flex items-center gap-2 rounded-md bg-[#E0123B] px-7 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Conheca os sistemas
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
