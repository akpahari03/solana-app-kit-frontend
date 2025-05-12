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
import AnimatedElement from './AnimatedElement'; // Import the animation wrapper

const FeatureSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.contentWrapper}>
        <div className={styles.textRow}>
          <AnimatedElement animation="slide-up" className={styles.leftText}>
            <h2>The Open-Source React Native Scaffold</h2>
          </AnimatedElement>
          <AnimatedElement animation="slide-up" delay={200} className={styles.rightText}>
            <p>Plug-and-play app modules<br />on top of Solana Protocols</p>
          </AnimatedElement>
        </div>

        <div className={styles.grid}>
          <AnimatedElement animation="fade-in" delay={100}>
            <FeatureCard 
              bgImage={cardBlue} 
              text="Profiles, chats, Interactive<br />and Tradeable Feed" 
              overlayImage={cardIcon1} 
              overlayClass="icon1"
            />
          </AnimatedElement>
          <AnimatedElement animation="slide-left" delay={200}>
            <FeatureCard 
              bgImage={cardGreen} 
              text="Swap and<br />Copy Trade" 
              overlayImage={cardIcon2} 
              overlayClass="icon2"
            />
          </AnimatedElement>
          <AnimatedElement animation="slide-left" delay={300}>
            <FeatureCard 
              bgImage={cardYellow} 
              text="Configurable<br />Bonding Curves" 
              overlayImage={cardIcon3} 
              overlayClass="icon3"
            />
          </AnimatedElement>
          <AnimatedElement animation="slide-right" delay={400}>
            <FeatureCard 
              bgImage={cardGrey} 
              text="Mint and<br />Trade NFTs" 
              overlayImage={cardIcon4} 
              overlayClass="icon4"
            />
          </AnimatedElement>
          <AnimatedElement animation="slide-right" delay={500}>
            <FeatureCard 
              bgImage={cardLightBlue} 
              text="Publish to Solana<br />Mobile dApp store" 
              overlayImage={cardIcon5} 
              overlayClass="icon5"
            />
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;