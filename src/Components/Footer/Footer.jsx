import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
import logo from '../Assets/logo.png';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={logo} alt="" />
            <p>Alecto</p>
        </div>
        <ul className='footer-links'>
            <li>Product</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icon-container">
                <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div className="footer-icon-container">
                <FontAwesomeIcon icon={faTiktok} />
            </div>
            <div className="footer-icon-container">
                <FontAwesomeIcon icon={faWhatsapp} />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer;
