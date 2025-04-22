
import { useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { useTheme } from "next-themes";

const Index = () => {
  const { setTheme } = useTheme();
  
  // Initialize scroll animations
  useScrollAnimation();
  
  useEffect(() => {
    // Set dark mode by default
    setTheme("dark");
    
    // Smooth scroll to hash on page load
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [setTheme]);
  
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <div className="parallax-3d">
        <Navbar />
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
