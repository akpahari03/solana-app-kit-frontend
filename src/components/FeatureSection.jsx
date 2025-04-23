import React from 'react';
import styles from './FeatureSection.module.css';
import FeatureCard from './FeatureCard';
import cardBlue from '../assets/card-bg-blue.png';
import cardGreen from '../assets/card-bg-green.png';
import cardYellow from '../assets/card-bg-yellow.png';
import cardGrey from '../assets/card-bg-grey.png';
import cardLightBlue from '../assets/card-bg-lightblue.png';

const FeatureSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.contentWrapper}>
        <div className={styles.textRow}>
          <div className={styles.leftText}>
            <h2>The Open-Source React<br />Native Scaffold</h2>
          </div>
          <div className={styles.rightText}>
            <p>Plug-and-play app modules<br />on top of Solana Protocols</p>
          </div>
        </div>

        <div className={styles.grid}>
            <FeatureCard bgImage={cardBlue} text="Profiles, chats, Interactive <br/> and Tradeable Feed" />
            <FeatureCard bgImage={cardGreen} text="Swap and <br/> Copy Trade" />
            <FeatureCard bgImage={cardYellow} text="Configurable <br/> Bonding Curves" />
            <FeatureCard bgImage={cardGrey} text="Mint and <br/> Trade NFTs" />
            <FeatureCard bgImage={cardLightBlue} text="Publish to Solana <br/> Mobile dApp store" />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
