import React from 'react';
import './footer.scss';

const Footer: React.FC = () => {
  return ( 
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__contact">
          Contact Information:
          <br />
          <a href="tel: +123456789" className='footer__link'>Phone: +123456789</a>
          <br />
          Email: info@yourvegetablecompany.com
        </div>  

        <div className="footer__social">
          Join us on social media:
          <br />

          <a
            href="https://www.instagram.com"
            className='footer__link'
            target='_blank'
            rel="noreferrer"
          >
            Instagram
          </a>

          <br />
          
          <a 
            href="https://uk-ua.facebook.com"
            className='footer__link'
            target='_blank'
            rel="noreferrer"
          >
            Facebook
          </a>
        </div>

        <div className="footer__copyright">
          Copyright:
          © Year of establishment of your company. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer;
