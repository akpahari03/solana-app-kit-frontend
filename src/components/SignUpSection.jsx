import React from 'react';
import './SignUpSection.css';
import bg from '../assets/bg.png';
import welcomeBack from '../assets/Frame 1000002907.png';
import socialLogin from '../assets/Frame 1000002895.png';
import privy from '../assets/icons/privy.png';
import dynamic from '../assets/icons/dynamic.png';
import turnkey from '../assets/icons/turnkey.png';

const SignUpSection = () => {
  return (
    <div className="signup-section">
      <div className="signup-background">
        <img src={bg} alt="Background" className="signup-bg-image" />

        <div className="signup-content">
          {/* Top-left heading - hidden on mobile */}
          <div className="signup-left-top">
            <h3 className="signup-heading">
              Sign-up and Login <br /> with any account
            </h3>
          </div>

          {/* Social login buttons - now first on mobile */}
          <div className="signup-right">
            <img src={socialLogin} alt="Social Login Buttons" />
          </div>

          {/* Bottom-left logos and powered by - repositioned on mobile */}
          <div className="signup-left-bottom">
            <h3 className="signup-heading mobile-only">
              Sign-up and Login<br />with any account
            </h3>
            <p className="signup-powered">Powered by</p>
            <div className="signup-logos">
              <img src={privy} alt="Privy" />
              <img src={dynamic} alt="Dynamic" />
              <img src={turnkey} alt="Turnkey" />
            </div>
          </div>

          {/* Bottom-center welcome back image - hidden on mobile */}
          <div className="signup-center">
            <img src={welcomeBack} alt="Welcome Back Form" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpSection;