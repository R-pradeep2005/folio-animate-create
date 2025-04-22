
import { useEffect, useRef, ReactNode, forwardRef, ForwardedRef } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  distance?: number;
  once?: boolean;
}

export const ScrollReveal = forwardRef(function ScrollReveal(
  {
    children,
    className = '',
    threshold = 0.1,
    direction = 'up',
    delay = 0,
    distance = 40,
    once = true
  }: ScrollRevealProps,
  forwardedRef: ForwardedRef<HTMLDivElement>
) {
  const localRef = useRef<HTMLDivElement>(null);
  const ref = (forwardedRef || localRef) as React.MutableRefObject<HTMLDivElement | null>;

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    // Set initial styles based on direction
    let initialTransform = '';
    switch (direction) {
      case 'up':
        initialTransform = `translateY(${distance}px)`;
        break;
      case 'down':
        initialTransform = `translateY(-${distance}px)`;
        break;
      case 'left':
        initialTransform = `translateX(${distance}px)`;
        break;
      case 'right':
        initialTransform = `translateX(-${distance}px)`;
        break;
      default:
        initialTransform = 'none';
    }

    element.style.opacity = '0';
    element.style.transform = initialTransform;
    element.style.transition = `opacity 0.8s ease-out ${delay}ms, transform 0.8s ease-out ${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            if (element) {
              element.style.opacity = '1';
              element.style.transform = 'none';
            }
          }, 100);
          
          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          element.style.opacity = '0';
          element.style.transform = initialTransform;
        }
      },
      {
        threshold,
        rootMargin: '0px',
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, direction, delay, distance, once, forwardedRef]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
});
