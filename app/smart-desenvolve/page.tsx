import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import SDHero from "@/components/smart-desenvolve/sd-hero"
import SDStats from "@/components/smart-desenvolve/sd-stats"
import SDPurpose from "@/components/smart-desenvolve/sd-purpose"
import SDChallenges from "@/components/smart-desenvolve/sd-challenges"
import SDProgram from "@/components/smart-desenvolve/sd-program"
import SDGovernance from "@/components/smart-desenvolve/sd-governance"
import SDDifferentials from "@/components/smart-desenvolve/sd-differentials"

export const metadata: Metadata = {
  title: "Smart Desenvolve | O Acelerador de Resultados do Ecossistema Smart",
  description:
    "Transformando e potencializando as operacoes Corban com metodologias de vendas, acompanhamento estrategico e acesso exclusivo a tecnologia Smart Tech.",
}

export default function SmartDesenvolvePage() {
  return (
    <>
      <Header />
      <main>
        <SDHero />
        <SDStats />
        <SDPurpose />
        <SDChallenges />
        <SDProgram />
        <SDGovernance />
        <SDDifferentials />
      </main>
      <Footer />
    </>
  )
}
