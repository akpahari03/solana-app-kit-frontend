import React, { useEffect, useState } from 'react';
import LandingPage from './components/LandingPage';
import PhonesSection from './components/PhonesSection';
import FeatureSection from './components/FeatureSection';
import SignUpSection from './components/SignUpSection';
import Footer from './components/Footer';
import './styles/animations.css';

// Smooth scroll button component
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000,
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
        border: 'none',
        cursor: 'pointer',
        display: isVisible ? 'flex' : 'none',
        justifyContent: 'center',
        alignItems: 'center',
        backdropFilter: 'blur(5px)',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
        transition: 'all 0.3s ease'
      }}
      aria-label="Scroll to top"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 3L15 10L13.6 11.4L8 5.8L2.4 11.4L1 10L8 3Z"
          fill="white"
        />
      </svg>
    </button>
  );
};

const App = () => {
  // Add section refs for potential navigation enhancements
  
  return (
    <>
      <LandingPage />
      <PhonesSection />
      <FeatureSection />
      <SignUpSection />
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default App;