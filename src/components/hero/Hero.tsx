import NavBar from "./nav-bar";
import HeroSection from "./hero-section";
import PartnersSection from "./partners-section";

const Hero = () => {
  return (
    <main className="min-h-screen">
      <NavBar />
      <HeroSection />
      <PartnersSection />
    </main>
  );
};

export default Hero;
