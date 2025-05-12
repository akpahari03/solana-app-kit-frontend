import React from 'react';
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
// New mobile-specific decorative elements
import circleLeft from '../assets/circle_left.png';
import elementGreen from '../assets/element_green_right.png';
import element2Left from '../assets/element2_left.png';
import element2Right from '../assets/element2_right.png';
import ellipse from '../assets/ellipse_right.png';
import rectangleLeft from '../assets/rectangle_left.png';
import rectangleRight from '../assets/rectangle_right.png';
import smallRectangle from '../assets/small_rectangle_right.png';

const LandingPage = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('npx create-solana-app');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div className={styles.container}>
        <Navbar />
        {/* Regular desktop decorative elements */}
        <img src={starLeft} alt="Star Left" className={styles.starLeft} />
        <img src={starRight} alt="Star Right" className={styles.starRight} />
        <img src={elementLeft} alt="Element Left" className={styles.elementLeft} />
        <img src={plusIcon} alt="Plus Left" className={styles.plusleft} />
        <img src={elementRight} alt="Element Right" className={styles.elementRight} />
        <img src={topOverlay} alt="Top Overlay" className={styles.topOverlay} />
        
        {/* Mobile-specific decorative elements - hidden on desktop, visible on mobile */}
        <img src={circleLeft} alt="Circle Left" className={styles.circleLeft} />
        <img src={elementGreen} alt="Element Green" className={styles.elementGreen} />
        <img src={element2Left} alt="Element 2 Left" className={styles.element2Left} />
        <img src={element2Right} alt="Element 2 Right" className={styles.element2Right} />
        <img src={ellipse} alt="Ellipse" className={styles.ellipse} />
        <img src={rectangleLeft} alt="Rectangle Left" className={styles.rectangleLeft} />
        <img src={rectangleRight} alt="Rectangle Right" className={styles.rectangleRight} />
        <img src={smallRectangle} alt="Small Rectangle" className={styles.smallRectangle} />

        <div className={styles.content}>
          <div className={styles.commandBox} onClick={handleCopy}>
            <code className={styles.command}>npx create-solana-app</code>
            {copied ? (
              <FaCheck className={styles.copyIcon} title="Copied!" />
            ) : (
              <FaRegCopy className={styles.copyIcon} title="Copy to clipboard" />
            )}
          </div>

          <h1 className={styles.title}>Build Solana Apps Faster</h1>
          <p className={styles.subtitle}>
            In under 15 minutes and less than 50 <br /> lines of code.
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