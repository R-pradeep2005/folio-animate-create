
/**
 * Utility functions for animations and scroll effects
 */

// Initialize parallax effects based on mouse movement
export function initMouseParallax() {
  const handleMouseMove = (e: MouseEvent) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    const parallaxElements = document.querySelectorAll('.parallax-mouse');
    
    parallaxElements.forEach((el) => {
      const element = el as HTMLElement;
      const speed = parseFloat(element.getAttribute('data-speed') || '0.05');
      
      const x = (window.innerWidth / 2 - mouseX) * speed;
      const y = (window.innerHeight / 2 - mouseY) * speed;
      
      element.style.transform = `translate(${x}px, ${y}px)`;
    });
  };
  
  document.addEventListener('mousemove', handleMouseMove);
  
  return () => {
    document.removeEventListener('mousemove', handleMouseMove);
  };
}

// Initialize scroll animation observers
export function initScrollObservers() {
  const fadeUpElements = document.querySelectorAll('.fade-up-element');
  const fadeInElements = document.querySelectorAll('.fade-in-element');
  
  const fadeUpObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeUpObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  
  const fadeInObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeInObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  
  fadeUpElements.forEach((el) => fadeUpObserver.observe(el));
  fadeInElements.forEach((el) => fadeInObserver.observe(el));
  
  return () => {
    fadeUpElements.forEach((el) => fadeUpObserver.unobserve(el));
    fadeInElements.forEach((el) => fadeInObserver.unobserve(el));
  };
}
