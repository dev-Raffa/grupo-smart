import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-[#940b10] pt-16">
      {/* Geometric mesh background */}
      <div className="absolute inset-0 opacity-[0.08]">
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="#ffffff"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row lg:px-8">
        {/* Left Content */}
        <div className="flex max-w-2xl flex-1 flex-col">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            <span className="text-xs font-medium tracking-wide text-white/80">
              Grupo SmartConsig
            </span>
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white text-balance md:text-5xl lg:text-6xl">
            Tecnologia que impulsiona o credito.{" "}
            <span className="text-white/70">
              Solidez que constroi o futuro.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/80 md:text-lg">
            Ha mais de uma decada conectamos instituicoes financeiras, servidores
            publicos e empresas por meio de solucoes de credito com tecnologia de
            ponta.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#solucoes"
              className="inline-flex items-center justify-center rounded-md bg-white px-7 py-3 text-sm font-semibold text-[#940b10] transition-opacity hover:opacity-90"
            >
              Conheca nossas solucoes
            </a>
            <a
              href="#o-grupo"
              className="inline-flex items-center justify-center rounded-md border border-white/30 px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Sobre o grupo
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative hidden flex-1 lg:block">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/hero-corporate.jpg"
              alt="Sede corporativa SmartConsig"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0" />
          </div>
          {/* Floating stat card */}
          <div className="absolute -bottom-6 -left-6 rounded-xl border border-white/20 bg-white/95 p-5 shadow-lg backdrop-blur-sm">
            <p className="text-2xl font-bold text-[#940b10]">+1M</p>
            <p className="text-xs font-medium text-[#121212]/70">
              Clientes atendidos
            </p>
          </div>
        </div>
      </div>

    </section>
  )
}
