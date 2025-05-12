import React from 'react';
import './Footer.css';
import logo from '../assets/logo2.png';
import copyIcon from '../assets/copy.png';
import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const fullAddress = 'SENDdRQtYMWaQrBroBrJ2Q53fgVuq95CV9UPGEvpCxa';
  
  const handleCopy = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setShowTooltip(true);
    
    // Hide tooltip after copying
    setTimeout(() => {
      setCopied(false);
      setShowTooltip(false);
    }, 1500);
  };
  
  return (
    <div className='footer-background'>
      <footer className="footer">
        <div className="footer-left">
          <div className="footer-heading">
            <p>Solana Apps, <br /> Built in Minutes.</p>
          </div>
          <button className="footer-download-btn">Download the App</button>
          <div className="footer-wallet"
            onClick={handleCopy}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <span>$SEND...pCxa</span>
            <div className="copy-wrapper">
              {copied ? (
                <FaCheck className="copy-icon copied" />
              ) : (
                <img
                  src={copyIcon}
                  alt="Copy"
                  className="copy-icon"
                />
              )}
            </div>
            {showTooltip && (
              <div className="tooltip">
                {copied ? 'Copied!' : 'Click to copy'}
              </div>
            )}
          </div>
          <div className="footer-logo">
            <img src={logo} alt="Solana App Kit Logo" />
          </div>
        </div>
        
        <div className="footer-right">
          <div className="footer-columns">
            <div>
              <p className="footer-title">Company</p>
              <p className='btn'><a href='https://www.sendai.fun/' target='_blank'>SendAI</a></p>
              <p className='btn'><a href='https://sendarcade.fun/' target='_blank'>SendArcade</a></p>
              <p className='btn'><a href='https://www.thesendcoin.com/' target='_blank'>Send Coin</a></p>
            </div>
            <div>
              <p className="footer-title">Resources</p>
              <p className='btn'><a href='https://github.com/SendArcade/solana-app-kit' target='_blank'>Github</a></p>
              <p className='btn'><a href='https://docs.1doma.in/docs/introduction' target='_blank'>Docs</a></p>
            </div>
            <div>
              <p className="footer-title">X (Twitter)</p>
              <p className='btn'><a href='https://x.com/sendarcadefun' target='_blank'>Send Arcade</a></p>
              <p className='btn'><a href='https://x.com/sendaifun' target='_blank'>Send AI</a></p>
            </div>
          </div>
          
          {/* Mobile logo - appears between columns and footer text */}
          <div className="mobile-footer-logo">
            <img src={logo} alt="Solana App Kit Logo" />
          </div>
          
          <p className="footer-bottom-text">
            © Twenty'25, Built and Maintained By SendAI and Send Arcade
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;