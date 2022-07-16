import React from 'react';
import './Footer.css';
import FooterIMG from '../img/FooterIMG.svg'
function Footer() {
  return (
      <footer>
          <div className="footer">
                  <div className="footer__row">
                      <div className="footer__IMG"><img src={FooterIMG} alt=""/></div>
                      <div className="footer__text">2021 Hello All right reserved.</div>
                  </div>
          </div>
      </footer>
  );
}

export default Footer;
