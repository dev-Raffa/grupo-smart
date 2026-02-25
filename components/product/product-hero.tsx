import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface ProductHeroProps {
  title: string
  subtitle: string
}

export default function ProductHero({ title, subtitle }: ProductHeroProps) {
  return (
    <section className="relative bg-[#940b10] pt-16">
      {/* Geometric pattern */}
      <div className="absolute inset-0 opacity-[0.06]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="product-grid"
              width="48"
              height="48"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 48 0 L 0 0 0 48"
                fill="none"
                stroke="#ffffff"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#product-grid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-white/60">
            <li>
              <Link href="/" className="transition-colors hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <ChevronRight className="h-3.5 w-3.5" />
            </li>
            <li>
              <Link href="/#solucoes" className="transition-colors hover:text-white">
                Produtos
              </Link>
            </li>
            <li>
              <ChevronRight className="h-3.5 w-3.5" />
            </li>
            <li className="text-white font-medium">{title}</li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold leading-tight tracking-tight text-white text-balance md:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-white/75 leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  )
}
