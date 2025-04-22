
import { useRef, ReactNode, useEffect } from 'react';

interface ParallaxWrapperProps {
  children: ReactNode;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export function ParallaxWrapper({
  children,
  speed = 0.15,
  direction = 'up',
  className = '',
}: ParallaxWrapperProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const initialPositionSet = useRef(false);
  
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let translateProperty: string;
    let scrollDirection: number;
    
    switch (direction) {
      case 'down':
        translateProperty = 'translateY';
        scrollDirection = 1;
        break;
      case 'left':
        translateProperty = 'translateX';
        scrollDirection = -1;
        break;
      case 'right':
        translateProperty = 'translateX';
        scrollDirection = 1;
        break;
      case 'up':
      default:
        translateProperty = 'translateY';
        scrollDirection = -1;
    }

    const handleScroll = () => {
      if (!element) return;
      
      const elementRect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Check if the element is in view
      if (elementRect.bottom > 0 && elementRect.top < windowHeight) {
        // Calculate how far the element is from the middle of the viewport
        const elementCenter = elementRect.top + elementRect.height / 2;
        const viewportCenter = windowHeight / 2;
        const distanceFromCenter = elementCenter - viewportCenter;
        
        // Apply parallax effect
        const translateValue = distanceFromCenter * speed * scrollDirection;
        element.style.transform = `${translateProperty}(${translateValue}px)`;
      }
    };
    
    if (!initialPositionSet.current) {
      handleScroll();
      initialPositionSet.current = true;
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed, direction]);
  
  return (
    <div ref={elementRef} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}
