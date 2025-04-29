import React from 'react';
import { useState } from 'react';
import Navbar from './Navbar';
import styles from './LandingPage.module.css';
import topOverlay from '../assets/top-overlay.png';
import { FaRegCopy, FaCheck , FaGithub} from 'react-icons/fa';

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
    <Navbar/>
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

        <h1 className={styles.title}>Build Solana Apps Faster</h1>
        <p className={styles.subtitle}>
          In under 15 minutes and less than 50 <br/> lines of code.
        </p>

        <div className={styles.buttons}>
          <a
            href="https://github.com"
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