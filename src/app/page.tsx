import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import AboutSection from "@/components/sections/AboutSection";
import DifferentiationSection from "@/components/sections/DifferentiationSection";
import PartnersSection from "@/components/sections/PartnersSection";
import CasesSection from "@/components/sections/CasesSection";
import BlogSection from "@/components/sections/BlogSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <TestimonialSection />
        <AboutSection />
        <DifferentiationSection />
        <PartnersSection />
        <CasesSection />
        <BlogSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
