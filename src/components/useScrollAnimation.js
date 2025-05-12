import { useEffect, useRef, useState } from 'react';

// Custom hook for scroll animations
const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Update state when intersection status changes
      if (entry.isIntersecting) {
        setIsVisible(true);
        
        // If once is true, unobserve after animation is triggered
        if (options.once !== false) {
          observer.unobserve(entry.target);
        }
      } else if (!options.once) {
        setIsVisible(false);
      }
    }, {
      root: null, // viewport
      threshold: options.threshold || 0.1, // 10% visibility by default
      rootMargin: options.rootMargin || '0px' // margin around root
    });
    
    const currentRef = ref.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options.threshold, options.rootMargin, options.once]);
  
  // Return ref to attach to element and visibility state
  return [ref, isVisible];
};

export default useScrollAnimation;