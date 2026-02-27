import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import SmartTechHero from "@/components/smart-tech-innovation/smart-tech-hero"
import SmartTechManifesto from "@/components/smart-tech-innovation/smart-tech-manifesto"
import SmartTechSystems from "@/components/smart-tech-innovation/smart-tech-systems"
import SmartTechSecurity from "@/components/smart-tech-innovation/smart-tech-security"
import SmartTechSynergy from "@/components/smart-tech-innovation/smart-tech-synergy"
import CareersSection from "@/components/careers-section"

export const metadata: Metadata = {
  title: "Smart Tech Innovation | Grupo SmartConsig",
  description:
    "Conheça o braço de inovação responsável pela infraestrutura tecnológica proprietária que sustenta o Grupo SmartConsig.",
}

export default function SmartTechInnovationPage() {
  return (
    <>
      <Header />
      <main>
        <SmartTechHero />
        <SmartTechManifesto />
        <SmartTechSystems />
        <SmartTechSecurity />
        <SmartTechSynergy />
        <CareersSection />
      </main>
      <Footer />
    </>
  )
}
