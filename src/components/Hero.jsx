import React from 'react';
import styles from './Hero.module.css';
import { FaGithub } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <a
        href="https://create.solana.app/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.pillLink}
      >
        https://create.solana.app/
      </a>

      <h1 className={styles.title}>Build Solana Apps Faster</h1>
      <p className={styles.subtitle}>
        In under 15 minutes and less than 50 lines of code.
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
    </section>
  );
};

export default Hero;
