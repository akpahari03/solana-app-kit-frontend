import React from 'react';
import styles from './FeatureCard.module.css';

const FeatureCard = ({ bgImage, text , overlayImage,overlayClass}) => {
  return (
    <div
      className={styles.card}
      style={{ backgroundImage: `url(${bgImage})`,
     }}
    >
      {overlayImage && (
        <img src={overlayImage} alt="Overlay" className={`${styles.overlayImage} ${styles[overlayClass]}`} />
      )}
      <p
        className={styles.text}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
};

export default FeatureCard;