import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import SupportedPlatforms from "@/components/SupportedPlatforms";
import Installation from "@/components/Installation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <SupportedPlatforms />
      <Installation />
      <Footer />
    </div>
  );
};

export default Index;
