import React, { useState, useRef, useEffect } from 'react';
import styles from './PhonesSection.module.css';
import phoneBg from '../assets/phone-section-bg.png';
import iosIcon from '../assets/ios-icon.png';
import playIcon from '../assets/play-icon.png';
import phone1 from '../assets/phone1.png';
import phone2 from '../assets/phone2.png';
import phone3 from '../assets/phone3.png';

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

  // Handle touch start
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  // Handle touch move
  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  // Handle touch end
  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    
    if (Math.abs(diff) > 50) { // Minimum swipe distance
      if (diff > 0 && currentSlide < phones.length - 1) {
        // Swipe left - next slide
        setCurrentSlide(prev => prev + 1);
      } else if (diff < 0 && currentSlide > 0) {
        // Swipe right - previous slide
        setCurrentSlide(prev => prev - 1);
      }
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft' && currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    } else if (e.key === 'ArrowRight' && currentSlide < phones.length - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  // Auto-advance slides (optional)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % phones.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  // Add keyboard event listener
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  // Go to specific slide
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className={styles.section}>
      <div className={styles.phoneContainer}>
        {/* Background image - only visible on desktop */}
        <img src={phoneBg} alt="Phones" className={styles.phoneImage} />

        {/* Content overlay */}
        <div className={styles.overlay}>
          <div className={styles.topLeft}>
            <h2>Try a Social Trading App and feel the magic!</h2>
          </div>

          <div className={styles.topRight}>
            <p>A fully open-source application for users and developers.</p>
            <div className={styles.storeButtons}>
              <a href="#" className={styles.storeBtn}>
                <img src={iosIcon} alt="Apple logo" />
                Download on iOS
              </a>
              <a href="https://play.google.com/store/games?hl=en&pli=1" className={styles.storeBtn}>
                <img src={playIcon} alt="Google Play logo" />
                Get it on Google Play
              </a>
            </div>
          </div>
        </div>

        {/* Desktop phone images */}
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

        {/* Mobile carousel */}
        <div className={styles.carouselContainer}>
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
        </div>
      </div>
    </section>
  );
};

export default PhoneSection;