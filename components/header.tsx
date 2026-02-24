"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ChevronDown,
  Menu,
  X,
  CreditCard,
  Building2,
  Users,
  Shield,
  BarChart3,
  Wallet,
} from "lucide-react"

const products = [
  {
    title: "Credito Consignado",
    description: "Solucoes completas de credito consignado para servidores publicos",
    icon: CreditCard,
  },
  {
    title: "Credito Empresarial",
    description: "Linhas de credito para empresas de todos os portes",
    icon: Building2,
  },
  {
    title: "Consignado Privado",
    description: "Credito consignado para colaboradores do setor privado",
    icon: Users,
  },
  {
    title: "Seguros",
    description: "Protecao completa para voce e sua familia",
    icon: Shield,
  },
  {
    title: "Investimentos",
    description: "Opcoes de investimento com rentabilidade competitiva",
    icon: BarChart3,
  },
  {
    title: "Conta Digital",
    description: "Sua conta digital completa e sem tarifas escondidas",
    icon: Wallet,
  },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-primary">
            <span className="text-sm font-bold text-primary-foreground">S</span>
          </div>
          <span className="text-lg font-bold tracking-tight text-foreground">
            Smart<span className="text-primary">Consig</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          <Link
            href="#o-grupo"
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            O Grupo
          </Link>

          {/* Products Mega Menu */}
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
              <div className="absolute left-1/2 top-full pt-4 -translate-x-1/2">
                <div className="w-[600px] rounded-lg border border-border bg-background/95 p-6 shadow-xl backdrop-blur-xl">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Nossos Produtos
                  </p>
                  <div className="grid grid-cols-2 gap-3">
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

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-foreground lg:hidden"
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
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
