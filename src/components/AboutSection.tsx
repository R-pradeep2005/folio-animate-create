
import { ScrollReveal } from "./ScrollReveal";
import { Badge } from "./Badge";
import { Button } from "@/components/ui/button";
import { ParallaxWrapper } from "./ParallaxWrapper";

export function AboutSection() {
  return (
    <section id="about" className="section bg-gradient-to-b from-background to-background/95 relative overflow-hidden">
      {/* Background elements */}
      <ParallaxWrapper speed={0.15} direction="up" className="absolute top-20 left-[10%]">
        <div className="w-32 h-32 rounded-full bg-designer-accent1/10 blur-3xl"></div>
      </ParallaxWrapper>
      
      <ParallaxWrapper speed={0.1} direction="down" className="absolute bottom-20 right-[15%]">
        <div className="w-64 h-64 rounded-full bg-designer-primary/5 blur-3xl"></div>
      </ParallaxWrapper>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-designer-primary/20 to-designer-secondary/20 rounded-3xl blur-xl opacity-60"></div>
              <div className="relative aspect-square max-w-md mx-auto overflow-hidden rounded-2xl">
                <img 
                  src="https://placehold.co/600x600/1A1F2C/FFFFFF?text=Designer+Portrait" 
                  alt="Designer Portrait" 
                  className="w-full h-full object-cover"
                />
                
                {/* Animated border decoration */}
                <div className="absolute inset-0 border-2 border-designer-primary/20 rounded-2xl">
                  <div className="absolute top-0 left-0 w-12 h-12">
                    <div className="absolute top-0 left-0 w-4 h-[2px] bg-designer-primary"></div>
                    <div className="absolute top-0 left-0 h-4 w-[2px] bg-designer-primary"></div>
                  </div>
                  <div className="absolute top-0 right-0 w-12 h-12">
                    <div className="absolute top-0 right-0 w-4 h-[2px] bg-designer-primary"></div>
                    <div className="absolute top-0 right-0 h-4 w-[2px] bg-designer-primary"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-12 h-12">
                    <div className="absolute bottom-0 left-0 w-4 h-[2px] bg-designer-primary"></div>
                    <div className="absolute bottom-0 left-0 h-4 w-[2px] bg-designer-primary"></div>
                  </div>
                  <div className="absolute bottom-0 right-0 w-12 h-12">
                    <div className="absolute bottom-0 right-0 w-4 h-[2px] bg-designer-primary"></div>
                    <div className="absolute bottom-0 right-0 h-4 w-[2px] bg-designer-primary"></div>
                  </div>
                </div>
                
                {/* Floating decorative elements */}
                <div className="glass-card absolute bottom-4 right-4 px-3 py-2 flex items-center gap-2 backdrop-blur-md bg-white/10">
                  <span className="h-2 w-2 rounded-full bg-green-500"></span>
                  <span className="text-sm font-medium">Available for projects</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal direction="right" delay={100}>
              <Badge variant="default" size="md" className="mb-4">About Me</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">A Designer with a Technical Background</h2>
            </ScrollReveal>
            
            <ScrollReveal direction="right" delay={200}>
              <p className="text-lg text-foreground/80 mb-4">
                I'm a UI/UX Designer who bridges the gap between design and development. With a background in both visual design and front-end programming, I create interfaces that are not only beautiful but also technically feasible and user-friendly.
              </p>
            </ScrollReveal>
            
            <ScrollReveal direction="right" delay={300}>
              <p className="text-lg text-foreground/80 mb-6">
                My philosophy revolves around creating purpose-driven designs that solve real problems while delivering delightful experiences. I'm particularly interested in the intersection of technology and human behavior, and how thoughtful design can create positive impact.
              </p>
            </ScrollReveal>
            
            <ScrollReveal direction="right" delay={400}>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex flex-col">
                  <span className="text-lg font-medium">Based in</span>
                  <span className="text-foreground/80">San Francisco, CA</span>
                </div>
                
                <div className="flex flex-col">
                  <span className="text-lg font-medium">Experience</span>
                  <span className="text-foreground/80">5+ Years</span>
                </div>
                
                <div className="flex flex-col">
                  <span className="text-lg font-medium">Education</span>
                  <span className="text-foreground/80">BFA in Design</span>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="right" delay={500}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-designer-primary hover:bg-designer-primary/90 button-glow">
                  Download Resume
                </Button>
                <Button variant="outline" className="border-designer-primary/30 text-designer-primary hover:bg-designer-primary/5">
                  My Process
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
