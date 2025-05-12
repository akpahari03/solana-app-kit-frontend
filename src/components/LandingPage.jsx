import React, { useState, useEffect } from 'react';
import styles from './LandingPage.module.css';
import topOverlay from '../assets/top-overlay.png';
import { FaRegCopy, FaCheck, FaGithub } from 'react-icons/fa';
import starLeft from '../assets/star-left.png';
import starRight from '../assets/star-right.png';
import elementLeft from '../assets/element-left.png';
import elementRight from '../assets/element-right.png';
import plusIcon from '../assets/Plus.png';

const LandingPage = () => {
  const [copied, setCopied] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 631);
  
  // Detect mobile screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 631);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText('npx create-solana-app');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div className={styles.container}>
        <img src={starLeft} alt="Star Left" className={styles.starLeft} />
        <img src={starRight} alt="Star Right" className={styles.starRight} />
        <img src={elementLeft} alt="Element Left" className={styles.elementLeft} />
        <img src={plusIcon} alt="Plus Left" className={styles.plusleft} />
        <img src={elementRight} alt="Element Right" className={styles.elementRight} />
        <img src={topOverlay} alt="Top Overlay" className={styles.topOverlay} />
        
        <div className={styles.content}>
          <div className={styles.commandBox} onClick={handleCopy}>
            <code className={styles.command}>npx create-solana-app</code>
            {copied ? (
              <FaCheck className={styles.copyIcon} title="Copied!" />
            ) : (
              <FaRegCopy className={styles.copyIcon} title="Copy to clipboard" />
            )}
          </div>

          <h1 className={styles.title}>
            <span className={styles.mobileBreak}>Build Solana<br /> Apps Faster</span>
            <span className={styles.desktopText}>Build Solana Apps Faster</span>
          </h1>
          <p className={styles.subtitle}>
            In under 15 minutes and less than 50 <br/> lines of code.
          </p>

          <div className={styles.buttons}>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;