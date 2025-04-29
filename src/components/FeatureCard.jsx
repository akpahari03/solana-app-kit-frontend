import React from 'react';
import styles from './FeatureCard.module.css';

const FeatureCard = ({ bgImage, text }) => {
  return (
    <div
      className={styles.card}
      style={{ backgroundImage: `url(${bgImage})`,
     }}
    >
      <p
        className={styles.text}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
};

export default FeatureCard;