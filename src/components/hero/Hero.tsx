import { NavBar } from "./nav-bar"
import { HeroSection } from "./hero-section"
import { PartnersSection } from "./partners-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <HeroSection />
      <PartnersSection />
    </main>
  )
}

