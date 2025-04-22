
import { useEffect } from 'react';

export function useScrollAnimation() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(
      '.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-rotate, .scroll-rotate-in, .scroll-blur-in'
    );

    const checkScroll = () => {
      const windowHeight = window.innerHeight;
      const revealPoint = 100;

      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - revealPoint) {
          element.classList.add('active');
        } else if (element.classList.contains('active') && !element.classList.contains('once')) {
          element.classList.remove('active');
        }
      });
    };

    // Handle parallax effects
    const parallaxElements = document.querySelectorAll('.parallax-3d-layer');
    
    const handleParallax = () => {
      parallaxElements.forEach((element) => {
        const scrolled = window.scrollY;
        const speed = parseFloat(element.getAttribute('data-speed') || '0.1');
        const yPos = -(scrolled * speed);
        const el = element as HTMLElement;
        el.style.transform = `translateZ(${yPos}px)`;
      });
    };

    // Handle mouse move parallax
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      
      parallaxElements.forEach((element) => {
        const speed = parseFloat(element.getAttribute('data-speed') || '0.1');
        const xPos = (mouseX - windowWidth / 2) * speed;
        const yPos = (mouseY - windowHeight / 2) * speed;
        const el = element as HTMLElement;
        el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
      });
    };

    // Initial check
    checkScroll();
    
    // Add event listeners
    window.addEventListener('scroll', checkScroll);
    window.addEventListener('scroll', handleParallax);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', checkScroll);
      window.removeEventListener('scroll', handleParallax);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
}
