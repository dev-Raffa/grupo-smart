"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ChevronDown,
  Menu,
  X,
  CreditCard,
  Briefcase,
  Landmark,
  ShoppingBag,
  RefreshCw,
  Car,
} from "lucide-react"

const products = [
  {
    title: "Crédito do Trabalhador CLT",
    description: "Soluções de crédito exclusivas para profissionais do setor privado",
    icon: Briefcase,
  },
  {
    title: "Empréstimo Consignado",
    description: "As melhores taxas com desconto direto na folha de pagamento",
    icon: Landmark,
  },
  {
    title: "Cartão Consignado",
    description: "Cartão de crédito com taxas reduzidas para beneficiários e servidores",
    icon: CreditCard,
  },
  {
    title: "Cartão Benefício",
    description: "Vantagens e descontos exclusivos em farmácias e serviços",
    icon: ShoppingBag,
  },
  {
    title: "Portabilidade com Refinanciamento",
    description: "Traga sua dívida e saia com dinheiro extra no bolso",
    icon: RefreshCw,
  },
  {
    title: "Empréstimo com Garantia do Veículo",
    description: "Use seu carro para conseguir as menores taxas do mercado",
    icon: Car,
  },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-primary">
            <span className="text-sm font-bold text-primary-foreground">S</span>
          </div>
          <span className="text-lg font-bold tracking-tight text-foreground">
            Smart<span className="text-primary">Consig</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <Link
            href="#o-grupo"
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            O Grupo
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-primary">
              Produtos
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`}
              />
            </button>

            {productsOpen && (
              <div className="absolute left-[92%] top-full pt-4 -translate-x-1/2">
                <div className="w-[calc(100dvw-14px)] rounded-lg flex justify-center border border-border bg-background/95 p-6 shadow-xl backdrop-blur-xl">
                  <div className="max-w-7xl px-6 lg:px-8">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Nossos Produtos
                    </p>
                    <div className="grid grid-cols-4 min-h-96 gap-3">
                      {products.map((product) => (
                        <Link
                          key={product.title}
                          href="#"
                          className="group flex items-start gap-3 rounded-md p-3 transition-colors hover:bg-muted"
                        >
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border transition-colors group-hover:border-primary/30">
                            <product.icon className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-foreground">
                              {product.title}
                            </p>
                            <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">
                              {product.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="#ecossistema"
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Ecossistema
          </Link>
          <Link
            href="#vagas"
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Vagas
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <button className=" hidden lg:flex rounded-md bg-primary cursor-pointer px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
            Fale Conosco
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md text-foreground lg:hidden"
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <div className="mx-auto max-w-7xl px-6 py-6">
            <nav className="flex flex-col gap-4">
              <Link
                href="#o-grupo"
                className="text-sm font-medium text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                O Grupo
              </Link>
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Produtos
                </p>
                <div className="grid grid-cols-1 gap-2">
                  {products.map((product) => (
                    <Link
                      key={product.title}
                      href="#"
                      className="flex items-center gap-3 rounded-md p-2 transition-colors hover:bg-muted"
                      onClick={() => setMobileOpen(false)}
                    >
                      <product.icon className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium text-foreground">
                        {product.title}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                href="#ecossistema"
                className="text-sm font-medium text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                Ecossistema
              </Link>
              <Link
                href="#vagas"
                className="text-sm font-medium text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                Vagas
              </Link>

            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
