import React from 'react';
import styles from './PhonesSection.module.css';
import phoneBg from '../assets/phone-section-bg.png';
import iosIcon from '../assets/ios-icon.png';
import playIcon from '../assets/play-icon.png';
import phone1 from '../assets/phone1.png';
import phone2 from '../assets/phone2.png';
import phone3 from '../assets/phone3.png';

const PhoneSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.phoneContainer}>
        {/* Background image */}
        <img src={phoneBg} alt="Phones" className={styles.phoneImage} />

        {/* Overlayed content */}
        <div className={styles.overlay}>
          <div className={styles.topLeft}>
            <h2>Try a Social Trading App<br />and feel the magic!</h2>
          </div>

          <div className={styles.topRight}>
            <p>A fully open-source application<br />for users and developers.</p>
            <div className={styles.storeButtons}>
              <a href="#" className={styles.storeBtn}>
                <img src={iosIcon} alt="Download on iOS" />
                Download on iOS
              </a>
              <a href="https://play.google.com/store/games?hl=en&pli=1" className={styles.storeBtn}>
                <img src={playIcon} alt="Get it on Google Play" />
                Get it on Google Play
              </a>
            </div>
          </div>
        </div>
        {/* Phone images at bottom */}
        <div className={styles.phoneMockups}>
          <div className={styles.phoneLeft}>
            <img src={phone1} alt="Phone 1" />
          </div>
          <div className={styles.phoneCenter}>
            <img src={phone2} alt="Phone 2" />
          </div>
          <div className={styles.phoneRight}>
            <img src={phone3} alt="Phone 3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhoneSection;