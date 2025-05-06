import React from 'react';
import styles from './FeatureSection.module.css';
import FeatureCard from './FeatureCard';
import cardBlue from '../assets/Frame 1000002869.png';
import cardGreen from '../assets/card-bg-green.png';
import cardYellow from '../assets/card-bg-yellow.png';
import cardGrey from '../assets/card-bg-grey.png';
import cardLightBlue from '../assets/card-bg-lightblue.png';
import cardIcon1 from '../assets/card-icon-1.png';
import cardIcon2 from '../assets/card-icon-2.png';
import cardIcon3 from '../assets/card-icon-3.png';
import cardIcon4 from '../assets/card-icon-4.png';
import cardIcon5 from '../assets/card-icon-5.png';

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
            <FeatureCard bgImage={cardBlue} text="Profiles, chats, Interactive <br/> and Tradeable Feed" overlayImage={cardIcon1} overlayClass="icon1"/>
            <FeatureCard bgImage={cardGreen} text="Swap and <br/> Copy Trade" overlayImage={cardIcon2} overlayClass="icon2"/>
            <FeatureCard bgImage={cardYellow} text="Configurable <br/> Bonding Curves" overlayImage={cardIcon3} overlayClass="icon3"/>
            <FeatureCard bgImage={cardGrey} text="Mint and <br/> Trade NFTs" overlayImage={cardIcon4} overlayClass="icon4"/>
            <FeatureCard bgImage={cardLightBlue} text="Publish to Solana <br/> Mobile dApp store" overlayImage={cardIcon5} overlayClass="icon5"/>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;