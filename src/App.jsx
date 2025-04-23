import React from 'react';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import PhonesSection from './components/PhonesSection';
import FeatureSection from './components/FeatureSection';
import SignUpSection from './components/SignUpSection';
import Footer from './components/Footer';
const App = () => {
  return (
    <>
      <Navbar />
      <LandingPage />
      <PhonesSection/>
      <FeatureSection/>
      <SignUpSection/>
      <Footer/>

    </>
  )
};

export default App;
