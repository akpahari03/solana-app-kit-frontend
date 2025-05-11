import React, { useState } from 'react';
import styles from './Navbar.module.css';
import logo from '../assets/logo.svg';
import burgerMenu from '../assets/burger-menu.png';
import closeIcon from '../assets/close.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.left}>
          <img src={logo} alt="App Kit Logo" className={styles.logo} />
          <div className={styles.links}>
            <a href="https://www.sendai.fun/" target='_blank' className={styles.link}>SendAI</a>
            <a href="https://sendarcade.fun/" target='_blank' className={styles.link}>Send Arcade</a>
          </div>
        </div>

        <div className={styles.right}>
          {/* Desktop-only button */}
          <button className={`${styles.cta} ${styles.desktopOnly}`}
            onClick={() => window.open('https://play.google.com/store/games?hl=en&pli=1', '_blank')}>
            Download the App
          </button>

          {/* Burger Menu */}
          <img
            src={burgerMenu}
            alt="Menu"
            className={styles.menuIcon}
            onClick={() => setMenuOpen(true)}
          />
        </div>
      </nav>

      {/* Full-screen menu for mobile */}
      {menuOpen && (
        <div className={styles.fullScreenMenu}>
          {/* Close Icon */}
          <img
            src={closeIcon}
            alt="Close"
            className={styles.closeIcon}
            onClick={() => setMenuOpen(false)}
          />

          <a href="https://www.sendai.fun/" target='_blank'>SendAI</a>
          <a href="https://sendarcade.fun/" target='_blank'>Send Arcade</a>

          <button
            className={styles.githubButton}
            onClick={() => window.open('https://github.com', '_blank')}
          >
            Github
          </button>

          <button
            className={styles.buildButton}
            onClick={() => window.open('https://buildonSAK.com', '_blank')}
          >
            Build on SAK
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
