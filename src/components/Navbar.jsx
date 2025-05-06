import React, { useState } from 'react';
import styles from './Navbar.module.css';
import logo from '../assets/logo.svg';
import burgerMenu from '../assets/burger-menu.png'
import closeIcon from '../assets/close.png' 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <img src={logo} alt="App Kit Logo" className={styles.logo} />
        <div className={`${styles.links} ${menuOpen ? styles.showMenu : ''}`}>
          <a href="https://www.sendai.fun/" target='_blank' className={styles.link}>SendAI</a>
          <a href="https://sendarcade.fun/" target='_blank' className={styles.link}>Send Arcade</a>
        </div>
      </div>

      <div className={styles.right}>
        <button className={styles.cta}
          onClick={() => window.open('https://play.google.com/store/games?hl=en&pli=1', '_blank')}>
          Download the App
        </button>

        {/* Mobile menu icon */}
        <img src={menuOpen ? closeIcon : burgerMenu}
         alt="Menu" className={styles.menuIcon} 
         onClick={() => setMenuOpen(!menuOpen)} 
        />
      </div>
    </nav>
  );
};

export default Navbar;