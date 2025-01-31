import Hero from "@/components/hero/Hero";
import FeaturesSection from "../components/features/features-section";
import OfferSection from "@/components/offer/offer-section";
import StepsSection from "@/components/steps/steps-section";
import VideoSection from "@/components/video/video-section";
import TestimonialsSection from "@/components/testimonials/testimonials-section";
import FAQSection from "@/components/faq/faq-section";
import BlogSection from "@/components/blog/blog-section";
import DownloadApp from "@/components/download-app/download-app";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturesSection />
      <StepsSection />
      <OfferSection />
      <VideoSection />
      <TestimonialsSection />
      <FAQSection />
      <BlogSection />
      <DownloadApp />
      <Footer />
    </main>
  );
}
