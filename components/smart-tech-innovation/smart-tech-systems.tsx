"use client"

import {
  BarChart3,
  Users,
  FileCheck,
  ShieldCheck,
  TrendingUp,
  Layers,
  BookOpen,
  Kanban,
  FileText,
  Upload,
  UserCog,
  Lock,
  type LucideIcon,
} from "lucide-react"

interface SystemFeature {
  icon: LucideIcon
  label: string
}

interface SystemCard {
  tag: string
  title: string
  focus: string
  description: string
  features: SystemFeature[]
  accent: string
}

const systems: SystemCard[] = [
  {
    tag: "Simulacoes",
    title: "SmartConsig Simulations",
    focus: "Vendas e Simulacao",
    description:
      "Motor de simulacao multi-produto com dashboard de performance em tempo real e gestao inteligente de regras bancarias.",
    features: [
      { icon: TrendingUp, label: "Dashboard de Performance em tempo real" },
      { icon: Layers, label: "Motor Multiprodutos (FGTS, Portabilidade, Cartoes)" },
      { icon: BookOpen, label: "Gestao de Regras Bancarias" },
    ],
    accent: "#E0123B",
  },
  {
    tag: "CRM",
    title: "SmartConsig CRM",
    focus: "Retencao e Leads",
    description:
      "Sistema completo de gestao de relacionamento com Kanban estrategico, relatorios avancados e importacao em lote.",
    features: [
      { icon: Kanban, label: "Pipeline Kanban (Drag-and-drop)" },
      { icon: BarChart3, label: "Base de Dados centralizada" },
      { icon: Upload, label: "Importacao em Lote de Leads" },
    ],
    accent: "#E0123B",
  },
  {
    tag: "Formalizacao",
    title: "SmartConsig Formalization",
    focus: "Pos-Venda e Processamento",
    description:
      "Ciclo de vida completo da proposta com rastreamento de status em tempo real e processamento automatizado.",
    features: [
      { icon: FileCheck, label: "Gestao do ciclo de vida de propostas" },
      { icon: FileText, label: "Status Badges para identificacao de pendencias" },
      { icon: Users, label: "Rastreamento em tempo real" },
    ],
    accent: "#E0123B",
  },
  {
    tag: "Admin",
    title: "SmartTechInnovate Admin",
    focus: "Governanca Master",
    description:
      "Painel master de governanca com gestao de operadores, permissoes granulares e controle de acesso centralizado.",
    features: [
      { icon: UserCog, label: "Governanca de Acessos" },
      { icon: Lock, label: "Gestao de Parceiros" },
      { icon: ShieldCheck, label: "Dashboard de visao global da Holding" },
    ],
    accent: "#E0123B",
  },
]

export default function SmartTechSystems() {
  return (
    <section id="sistemas" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#E0123B]">
            Plataformas Proprietarias
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Os sistemas que sustentam o ecossistema
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Cada plataforma foi projetada para resolver um pilar fundamental da
            operacao de credito — da simulacao a governanca.
          </p>
        </div>

        {/* Systems grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {systems.map((system) => (
            <div
              key={system.title}
              className="group relative rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:border-[#E0123B]/30 hover:shadow-lg"
            >
              {/* Tag */}
              <div className="mb-5 inline-flex items-center rounded-full border border-[#E0123B]/20 bg-[#E0123B]/5 px-3 py-1">
                <span className="text-xs font-semibold text-[#E0123B]">
                  {system.tag}
                </span>
              </div>

              {/* Title + focus */}
              <h3 className="text-xl font-bold text-foreground">
                {system.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-[#E0123B]">
                {system.focus}
              </p>

              {/* Description */}
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {system.description}
              </p>

              {/* Features */}
              <div className="mt-6 flex flex-col gap-3">
                {system.features.map((feature) => (
                  <div
                    key={feature.label}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border bg-secondary transition-colors group-hover:border-[#E0123B]/20">
                      <feature.icon className="h-4 w-4 text-[#E0123B]" />
                    </div>
                    <span className="text-sm font-medium text-foreground">
                      {feature.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Mini visual indicator */}
              <div className="absolute right-6 top-8 flex h-10 w-10 items-center justify-center rounded-lg bg-[#E0123B]/5">
                <div className="h-2 w-2 rounded-full bg-[#E0123B]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
