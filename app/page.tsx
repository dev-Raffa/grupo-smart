import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import EcosystemSection from "@/components/ecosystem-section"
import SolutionsSection from "@/components/solutions-section"
import StatsBar from "@/components/stats-bar"
import CareersSection from "@/components/careers-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StatsBar />
        <AboutSection />
        <EcosystemSection />
        <SolutionsSection />
        <CareersSection />
      </main>
      <Footer />
    </>
  )
}
