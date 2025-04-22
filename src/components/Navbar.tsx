
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-background/80 backdrop-blur-md shadow-md' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold gradient-text">
          designfolio
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-foreground/90 hover:text-primary transition-colors link-underline"
            >
              {link.name}
            </a>
          ))}
          <Button className="bg-designer-primary hover:bg-designer-primary/90 button-glow">
            Hire Me
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground/90 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`
          md:hidden fixed inset-0 top-[60px] bg-background/95 backdrop-blur-sm z-40 transition-all duration-300 ease-in-out
          ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
      >
        <nav className="container mx-auto px-6 py-8 flex flex-col items-center space-y-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg font-medium text-foreground/90 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button className="w-full bg-designer-primary hover:bg-designer-primary/90">
            Hire Me
          </Button>
        </nav>
      </div>
    </header>
  );
}
