import React, { useState, useRef, useEffect } from 'react';
import styles from './PhonesSection.module.css';
import phoneBg from '../assets/phone-section-bg.png';
import iosIcon from '../assets/ios-icon.png';
import playIcon from '../assets/play-icon.png';
import phone1 from '../assets/phone1.png';
import phone2 from '../assets/phone2.png';
import phone3 from '../assets/phone3.png';
import AnimatedElement from './AnimatedElement'; // Import the animation wrapper

const PhoneSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const phones = [
    { id: 1, src: phone1, alt: "Phone 1" },
    { id: 2, src: phone2, alt: "Phone 2" },
    { id: 3, src: phone3, alt: "Phone 3" }
  ];

  // Touch handlers (existing code)
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentSlide < phones.length - 1) {
        setCurrentSlide(prev => prev + 1);
      } else if (diff < 0 && currentSlide > 0) {
        setCurrentSlide(prev => prev - 1);
      }
    }
  };

  // Other existing methods
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft' && currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    } else if (e.key === 'ArrowRight' && currentSlide < phones.length - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % phones.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className={styles.sectionWrapper}>
      <section className={styles.section}>
        <div className={styles.phoneContainer}>
          {/* Background image - only visible on desktop */}
          <img src={phoneBg} alt="Phones" className={styles.phoneImage} />

          {/* Content overlay with animations */}
          <div className={styles.overlay}>
            <AnimatedElement animation="slide-left" className={styles.topLeft}>
              <h2>Try a Social Trading App and feel the magic!</h2>
            </AnimatedElement>

            <AnimatedElement animation="slide-right" className={styles.topRight}>
              <p>A fully open-source application for users and developers.</p>
              <div className={styles.storeButtons}>
                <AnimatedElement animation="scale-in" delay={200} tag="a" href="#" className={styles.storeBtn}>
                  <img src={iosIcon} alt="Apple logo" />
                  Download on iOS
                </AnimatedElement>
                <AnimatedElement animation="scale-in" delay={300} tag="a" href="https://play.google.com/store/games?hl=en&pli=1" className={styles.storeBtn}>
                  <img src={playIcon} alt="Google Play logo" />
                  Get it on Google Play
                </AnimatedElement>
              </div>
            </AnimatedElement>
          </div>

          {/* Desktop phone images with animations */}
          <div className={styles.phoneMockups}>
            <AnimatedElement animation="slide-up" delay={100} className={styles.phoneLeft}>
              <img src={phone1} alt="Phone 1" />
            </AnimatedElement>
            <AnimatedElement animation="slide-up" className={styles.phoneCenter}>
              <img src={phone2} alt="Phone 2" />
            </AnimatedElement>
            <AnimatedElement animation="slide-up" delay={200} className={styles.phoneRight}>
              <img src={phone3} alt="Phone 3" />
            </AnimatedElement>
          </div>

          {/* Mobile carousel with animations */}
          <AnimatedElement animation="fade-in" className={styles.carouselContainer}>
            <div 
              className={styles.carouselTrack}
              ref={carouselRef}
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {phones.map((phone, index) => (
                <div 
                  key={phone.id}
                  className={`${styles.carouselSlide} ${index === currentSlide ? styles.active : ''}`}
                >
                  <img src={phone.src} alt={phone.alt} />
                </div>
              ))}
            </div>

            {/* Carousel dots */}
            <div className={styles.carouselDots}>
              {phones.map((_, index) => (
                <div
                  key={index}
                  className={`${styles.dot} ${index === currentSlide ? styles.active : ''}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </AnimatedElement>
        </div>
      </section>
    </div>
  );
};

export default PhoneSection;