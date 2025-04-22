
import { useEffect, useRef } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { Badge } from "./Badge";
import { ParallaxWrapper } from "./ParallaxWrapper";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface Skill {
  name: string;
  level: number;
  category: string;
  color: string;
}

const skills: Skill[] = [
  { name: "UI Design", level: 95, category: "design", color: "#8B5CF6" },
  { name: "Interaction Design", level: 90, category: "design", color: "#7E69AB" },
  { name: "User Research", level: 85, category: "ux", color: "#6E59A5" },
  { name: "React", level: 88, category: "development", color: "#61DAFB" },
  { name: "Figma", level: 92, category: "tools", color: "#A259FF" },
  { name: "Design Systems", level: 90, category: "design", color: "#D6BCFA" },
  { name: "CSS/SCSS", level: 87, category: "development", color: "#1572B6" },
  { name: "Motion Design", level: 83, category: "design", color: "#FDE1D3" },
];

export function SkillsSection() {
  const skillRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt((entry.target as HTMLElement).dataset.index || "0", 10);
            const skillLevel = skills[index].level;
            
            setTimeout(() => {
              // Animate progress bar with a delay
              const progressElement = entry.target.querySelector("[data-progress]") as HTMLDivElement;
              if (progressElement) {
                progressElement.style.width = `${skillLevel}%`;
              }
            }, 400);
          }
        });
      },
      { threshold: 0.2 }
    );

    skillRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      skillRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="skills" className="section bg-gradient-to-b from-background/95 to-background relative overflow-hidden">
      {/* Decorative background elements */}
      <ParallaxWrapper speed={0.2} direction="up" className="absolute top-40 right-20">
        <div className="w-64 h-64 rounded-full bg-designer-primary/5 blur-3xl"></div>
      </ParallaxWrapper>
      
      <ParallaxWrapper speed={0.15} direction="down" className="absolute bottom-20 left-20">
        <div className="w-48 h-48 rounded-full bg-designer-secondary/5 blur-2xl"></div>
      </ParallaxWrapper>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <ScrollReveal direction="left">
              <Badge variant="default" size="md" className="mb-4">My Skills</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Technical Proficiencies</h2>
              <p className="text-lg text-foreground/80 mb-10">
                With experience across various design disciplines and front-end technologies, I create holistic solutions that balance aesthetics with functionality.
              </p>
            </ScrollReveal>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <ScrollReveal 
                  key={skill.name} 
                  direction="left" 
                  delay={index * 100} 
                  className="space-y-2"
                >
                  <div 
                    className="skill-container" 
                    ref={el => {
                      if (el) skillRefs.current[index] = el;
                    }}
                    data-index={index}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">{skill.name}</h3>
                      <span className="text-sm text-foreground/80">{skill.level}%</span>
                    </div>
                    
                    <div className="h-2 bg-designer-primary/10 rounded-full overflow-hidden">
                      <div 
                        data-progress
                        className="h-full transition-all duration-1000 ease-out"
                        style={{
                          width: "0%",
                          backgroundColor: skill.color,
                        }}
                      ></div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
          
          <ScrollReveal direction="right" className="relative">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-designer-primary/30 to-designer-secondary/30 rounded-2xl blur-xl opacity-40"></div>
              <div className="glass-card p-6 md:p-8 relative z-10">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/5 backdrop-blur-md rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                    <div className="text-4xl font-bold gradient-text mb-2">5+</div>
                    <p className="text-foreground/80">Years of Experience</p>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-md rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                    <div className="text-4xl font-bold gradient-text mb-2">50+</div>
                    <p className="text-foreground/80">Projects Completed</p>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-md rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                    <div className="text-4xl font-bold gradient-text mb-2">20+</div>
                    <p className="text-foreground/80">Happy Clients</p>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-md rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                    <div className="text-4xl font-bold gradient-text mb-2">10+</div>
                    <p className="text-foreground/80">Design Awards</p>
                  </div>
                </div>
                
                <div className="mt-8 grid grid-cols-4 gap-4">
                  {["Figma", "Sketch", "Adobe XD", "Webflow"].map((tool) => (
                    <div 
                      key={tool} 
                      className="aspect-square flex items-center justify-center rounded-md bg-white/5 hover:bg-white/10 transition-all duration-300"
                    >
                      <span className="text-xs font-medium">{tool}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
