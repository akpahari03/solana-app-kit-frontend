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
    setTimeout(() => setCopied(false), 1500);
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
            <FaCheck
              className="copy-icon copied"
              // style={{ cursor: 'pointer', color: 'lime', fontSize: '18px' }}
            />
          ) : (
            <img
              src={copyIcon}
              alt="Copy"
              className={`copy-icon ${copied ? 'copied' : ''}`}
              style={{ cursor: 'pointer' }}
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
            <p className='btn'><a href='#' target='blank'>SendAI</a></p>
            <p className='btn'><a href='#' target='blank'>SendArcade</a></p>
            <p className='btn'><a href='#' target='blank'>Send Coin</a></p>
          </div>
          <div>
            <p className="footer-title">Resources</p>
            <p className='btn'><a href='https://github.com' target='blank'>Github</a></p>
            <p className='btn'><a href='#' target='blank'>Docs</a></p>
          </div>
          <div>
            <p className="footer-title">Connect</p>
            <p className='btn'><a href='#' target='blank'>X (Twitter)</a></p>
            <p className='btn'><a href='#' target='blank'>Telegram</a></p>
          </div>
        </div>
        <p className="footer-bottom-text">
          © Twenty’25, Built and Maintained By SendAI and Send Arcade • Crafted by <span className="juice">Juicebox</span>
        </p>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
