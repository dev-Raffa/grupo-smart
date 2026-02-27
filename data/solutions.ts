import { Handshake, Laptop, LucideIcon } from "lucide-react"

export interface SolutionFeature {
  icon: LucideIcon
  title: string
  description: string
  hreef: string
}

export const businessSolutions: SolutionFeature[] = [
  {
    title: "Smart Tech Innovation",
    description: "Sistema exclusivo e tecnologia de ponta para dar escala à sua operação e acelerar suas vendas.",
    icon: Laptop,
    hreef: "/smart-tech-innovation"
  },
  {
    title: "Smart Desenvolve",
    description: "Um ecossistema de parceria focado no seu crescimento. Tenha acesso a treinamentos, acompanhamento estratégico e às melhores bases e processos do mercado. Sem custos de adesão.",
    icon: Handshake,
    hreef: "/#"
  },
]