
import { useEffect } from 'react';

export function useScrollAnimation() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

    const checkScroll = () => {
      const windowHeight = window.innerHeight;
      const revealPoint = 150;

      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - revealPoint) {
          element.classList.add('active');
        } else if (element.classList.contains('active') && !element.classList.contains('once')) {
          element.classList.remove('active');
        }
      });
    };

    // Initial check
    checkScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', checkScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);
}
