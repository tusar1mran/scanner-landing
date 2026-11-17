import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ToolMarquee from "@/components/ToolMarquee";
import ScanFlow from "@/components/ScanFlow";
import ToolsGrid from "@/components/ToolsGrid";
import Privacy from "@/components/Privacy";
import ScreensGallery from "@/components/ScreensGallery";
import FAQ from "@/components/FAQ";
import BottomCTA from "@/components/BottomCTA";
import Footer from "@/components/Footer";
import SmoothAnchors from "@/components/SmoothAnchors";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SmoothAnchors />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ToolMarquee />
        <ScanFlow />
        <ToolsGrid />
        <Privacy />
        <ScreensGallery />
        <FAQ />
        <BottomCTA />
      </main>
      <Footer />
    </div>
  );
}
