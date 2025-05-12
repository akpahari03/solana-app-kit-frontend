import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import Navbar from './Navbar';
import styles from './LandingPage.module.css';
import topOverlay from '../assets/top-overlay.png';
import { FaRegCopy, FaCheck, FaGithub } from 'react-icons/fa';
import starLeft from '../assets/star-left.png';
import starRight from '../assets/star-right.png';
import elementLeft from '../assets/element-left.png';
import elementRight from '../assets/element-right.png';
import plusIcon from '../assets/Plus.png';
// Mobile-specific decorative elements
import circleLeft from '../assets/circle_left.png';
import elementGreen from '../assets/element_green_right.png';
import element2Left from '../assets/element2_left.png';
import element2Right from '../assets/element2_right.png';
import ellipse from '../assets/ellipse_right.png';
import rectangleLeft from '../assets/rectangle_left.png';
import rectangleRight from '../assets/rectangle_right.png';
import smallRectangle from '../assets/small_rectangle_right.png';
import AnimatedElement from './AnimatedElement';

const LandingPage = () => {
  const [copied, setCopied] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef(null);

  // Handle copy function
  const handleCopy = () => {
    navigator.clipboard.writeText('npx create-solana-app');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Handle parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate parallax positions
  const getParallaxStyle = (speed) => {
    return {
      transform: `translateY(${scrollY * speed}px)`,
    };
  };

  return (
    <>
      <div className={styles.container} ref={containerRef}>
        <Navbar />
        {/* Regular desktop decorative elements with parallax */}
        <img 
          src={starLeft} 
          alt="Star Left" 
          className={styles.starLeft} 
          style={getParallaxStyle(-0.2)}
        />
        <img 
          src={starRight} 
          alt="Star Right" 
          className={styles.starRight} 
          style={getParallaxStyle(-0.1)}
        />
        <img 
          src={elementLeft} 
          alt="Element Left" 
          className={styles.elementLeft} 
          style={getParallaxStyle(0.05)}
        />
        <img 
          src={plusIcon} 
          alt="Plus Left" 
          className={styles.plusleft} 
          style={getParallaxStyle(-0.15)}
        />
        <img 
          src={elementRight} 
          alt="Element Right" 
          className={styles.elementRight} 
          style={getParallaxStyle(0.1)}
        />
        <img src={topOverlay} alt="Top Overlay" className={styles.topOverlay} />
        
        {/* Mobile-specific decorative elements with parallax */}
        <img 
          src={circleLeft} 
          alt="Circle Left" 
          className={styles.circleLeft} 
          style={getParallaxStyle(-0.1)}
        />
        <img 
          src={elementGreen} 
          alt="Element Green" 
          className={styles.elementGreen} 
          style={getParallaxStyle(0.05)}
        />
        <img 
          src={element2Left} 
          alt="Element 2 Left" 
          className={styles.element2Left} 
          style={getParallaxStyle(-0.15)}
        />
        <img 
          src={element2Right} 
          alt="Element 2 Right" 
          className={styles.element2Right} 
          style={getParallaxStyle(0.1)}
        />
        <img 
          src={ellipse} 
          alt="Ellipse" 
          className={styles.ellipse} 
          style={getParallaxStyle(0.08)}
        />
        <img 
          src={rectangleLeft} 
          alt="Rectangle Left" 
          className={styles.rectangleLeft} 
          style={getParallaxStyle(-0.12)}
        />
        <img 
          src={rectangleRight} 
          alt="Rectangle Right" 
          className={styles.rectangleRight} 
          style={getParallaxStyle(0.07)}
        />
        <img 
          src={smallRectangle} 
          alt="Small Rectangle" 
          className={styles.smallRectangle} 
          style={getParallaxStyle(-0.09)}
        />

        <div className={styles.content}>
          <AnimatedElement animation="fade-in" className={styles.commandBox} onClick={handleCopy}>
            <code className={styles.command}>npx start-solana-app</code>
            {copied ? (
              <FaCheck className={styles.copyIcon} title="Copied!" />
            ) : (
              <FaRegCopy className={styles.copyIcon} title="Copy to clipboard" />
            )}
          </AnimatedElement>

          <AnimatedElement animation="slide-up" delay={100}>
            <h1 className={styles.title}>Build Solana Apps Faster</h1>
          </AnimatedElement>
          
          <AnimatedElement animation="slide-up" delay={200}>
            <p className={styles.subtitle}>
              In under 15 minutes and less than 50 <br /> lines of code.
            </p>
          </AnimatedElement>

          <AnimatedElement animation="fade-in" delay={300} className={styles.buttons}>
            <a
              href="https://github.com/SendArcade/solana-app-kit"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ghostButton}
            >
              <FaGithub size={18} style={{ marginRight: 8 }} />
              GitHub
            </a>
            <button className={styles.primaryButton}>Build on SAK</button>
          </AnimatedElement>
        </div>
      </div>
    </>
  );
};

export default LandingPage;