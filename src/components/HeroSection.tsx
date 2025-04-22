
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ParallaxWrapper } from "./ParallaxWrapper";
import { ScrollReveal } from "./ScrollReveal";
import { Badge } from "./Badge";

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height, left, top } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      // Update elements with the mouse position for subtle movement
      const elements = heroRef.current.querySelectorAll('.parallax-mouse');
      elements.forEach((el) => {
        const speed = parseFloat(el.getAttribute('data-speed') || '0.05');
        const element = el as HTMLElement;
        element.style.transform = `translate(${x * 50 * speed}px, ${y * 50 * speed}px)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-16 px-6 md:px-12 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        {/* Purple gradient background */}
        <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-designer-primary/5 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-designer-secondary/5 blur-3xl rounded-full"></div>
        
        {/* Decorative elements */}
        <ParallaxWrapper speed={0.2} direction="up" className="absolute top-20 left-[10%]">
          <div className="w-32 h-32 rounded-full bg-gradient-to-r from-designer-primary/10 to-designer-secondary/10 blur-xl"></div>
        </ParallaxWrapper>
        
        <ParallaxWrapper speed={0.15} direction="down" className="absolute top-32 right-[15%]">
          <div className="w-48 h-48 rounded-full bg-gradient-to-r from-designer-accent3/10 to-designer-accent2/10 blur-xl"></div>
        </ParallaxWrapper>
        
        <div className="parallax-mouse absolute top-[30%] right-[25%] w-12 h-12 rounded-full bg-gradient-to-r from-designer-primary/30 to-designer-secondary/30 blur-md" data-speed="0.08"></div>
        <div className="parallax-mouse absolute bottom-[30%] left-[20%] w-16 h-16 rounded-full bg-gradient-to-r from-designer-accent1/20 to-designer-primary/20 blur-md" data-speed="0.1"></div>
      </div>

      <div className="container max-w-7xl mx-auto z-10">
        <div className="flex flex-col items-center text-center">
          <ScrollReveal direction="up" delay={100}>
            <Badge variant="gradient" size="lg" className="mb-6">UI Designer & Developer</Badge>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={200}>
            <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold mb-6 tracking-tight">
              Crafting <span className="gradient-text">Digital Experiences</span> 
              <br />With Purpose & Precision
            </h1>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={300}>
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mb-8">
              I design and develop memorable digital experiences that connect brands with their audience through creative, functional and immersive interfaces.
            </p>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={400}>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button size="lg" className="bg-designer-primary hover:bg-designer-primary/90 button-glow text-white px-8">
                View My Work
              </Button>
              <Button size="lg" variant="outline" className="border-designer-primary/30 text-designer-primary hover:bg-designer-primary/5">
                Contact Me
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={600} className="mt-16 relative">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-designer-primary/50 to-designer-secondary/50 rounded-xl blur-xl opacity-50"></div>
              <div className="glass-card relative overflow-hidden rounded-xl border border-white/10 p-2 md:p-4">
                <div className="h-[300px] md:h-[400px] w-full md:w-[700px] rounded-lg bg-designer-dark overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-designer-dark to-designer-dark/80 flex items-center justify-center">
                    <span className="text-lg text-white/70">Hero Project Preview</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="parallax-mouse absolute -top-4 -right-4 w-24 h-24 bg-designer-primary/20 rounded-full blur-xl" data-speed="0.05"></div>
            <div className="parallax-mouse absolute -bottom-8 -left-8 w-32 h-32 bg-designer-accent2/10 rounded-full blur-xl" data-speed="0.07"></div>
          </ScrollReveal>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={1.5} 
          stroke="currentColor" 
          className="w-6 h-6 text-foreground/50"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
        </svg>
      </div>
    </section>
  );
}
