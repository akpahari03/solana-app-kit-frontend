import React from 'react';
import styles from './Navbar.module.css';
import logo from '../assets/logo.png'; // Replace with actual logo

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="App Kit Logo" className={styles.logo} />
        </div>
        <div className={styles.links}>
          <a href="#" className={styles.link}>SendAI</a>
          <a href="#" className={styles.link}>Send Arcade</a>
        </div>
      </div>

      <div className={styles.right}>
        <button className={styles.cta}>Download the App</button>
      </div>
    </nav>
  );
};

export default Navbar;
