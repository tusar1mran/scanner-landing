import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoCloud from "@/components/LogoCloud";
import EdgeDetectionShowcase from "@/components/EdgeDetectionShowcase";
import PlatformFeatures from "@/components/PlatformFeatures";
import DarkPricingComparison from "@/components/DarkPricingComparison";
import TestimonialSection from "@/components/TestimonialSection";
import MobileSpotlight from "@/components/MobileSpotlight";
import BottomCTA from "@/components/BottomCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <LogoCloud />
        <EdgeDetectionShowcase />
        <PlatformFeatures />
        <DarkPricingComparison />
        <TestimonialSection />
        <MobileSpotlight />
        <BottomCTA />
      </main>
      <Footer />
    </div>
  );
}
