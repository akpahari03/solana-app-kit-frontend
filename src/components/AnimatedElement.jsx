import React from 'react';
import useScrollAnimation from './useScrollAnimation';

const AnimatedElement = ({ 
  children, 
  animation = 'fade-in', 
  delay = 0,
  threshold = 0.1,
  className = '',
  tag = 'div',
  ...props 
}) => {
  const [ref, isVisible] = useScrollAnimation({ 
    threshold: threshold,
    once: true
  });
  
  const animationClass = `animate animate-${animation}${isVisible ? ' is-visible' : ''}`;
  const delayClass = delay > 0 ? ` delay-${delay}` : '';
  const combinedClassName = `${animationClass}${delayClass} ${className}`;
  
  const Tag = tag;
  
  return (
    <Tag ref={ref} className={combinedClassName} {...props}>
      {children}
    </Tag>
  );
};

export default AnimatedElement;