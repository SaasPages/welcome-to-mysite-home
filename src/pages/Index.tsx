import VideoBackground from "@/components/VideoBackground";
import Navigation from "@/components/Navigation";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import HeroSection from "@/components/HeroSection";
import FeaturedProperties from "@/components/FeaturedProperties";
import StatsSection from "@/components/StatsSection";
import TechStackSlider from "@/components/TechStackSlider";
import ComponentsSection from "@/components/ComponentsSection";
import VideoSection from "@/components/VideoSection";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <VideoBackground />
      <div className="relative" style={{ zIndex: 10 }}>
        <Navigation />
        <ThemeSwitcher />
        <main>
          <HeroSection />
          <TechStackSlider />
          <StatsSection />
          <FeaturedProperties />
          <ComponentsSection />
          <VideoSection />
        </main>
      </div>
    </div>
  );
};

export default Index;