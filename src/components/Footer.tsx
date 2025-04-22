
import { ScrollReveal } from "./ScrollReveal";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background py-12 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="border-t border-border pt-12 pb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
            <ScrollReveal direction="up" delay={0}>
              <div>
                <a href="#" className="text-2xl font-bold gradient-text">
                  designfolio
                </a>
                <p className="mt-4 text-foreground/70">
                  Creating meaningful digital experiences through thoughtful design and clean code.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={100}>
              <div>
                <h3 className="font-medium mb-4">Quick Links</h3>
                <div className="grid grid-cols-2 gap-2">
                  <a href="#home" className="text-foreground/70 hover:text-primary transition-colors">Home</a>
                  <a href="#projects" className="text-foreground/70 hover:text-primary transition-colors">Projects</a>
                  <a href="#skills" className="text-foreground/70 hover:text-primary transition-colors">Skills</a>
                  <a href="#about" className="text-foreground/70 hover:text-primary transition-colors">About</a>
                  <a href="#contact" className="text-foreground/70 hover:text-primary transition-colors">Contact</a>
                  <a href="#" className="text-foreground/70 hover:text-primary transition-colors">Resume</a>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={200}>
              <div>
                <h3 className="font-medium mb-4">Contact</h3>
                <p className="text-foreground/70 mb-2">contact@example.com</p>
                <p className="text-foreground/70">San Francisco, California</p>
                <div className="flex space-x-4 mt-4">
                  <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                    <span>Instagram</span>
                  </a>
                  <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                    <span>LinkedIn</span>
                  </a>
                  <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                    <span>Dribbble</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="text-center text-foreground/60 text-sm pt-6 border-t border-border">
          <p>&copy; {currentYear} DesignFolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
