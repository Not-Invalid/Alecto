import React from 'react'
import './Footer.css'
import logo from '../Assets/logo.png'
import wa_icon from '../Assets/wa_icon.png'
import ig_icon from '../Assets/ig_icon.png'
import tiktok_icon from '../Assets/tiktok_icon.png'


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
                <img src={ig_icon} alt="" />
            </div>
            <div className="footer-icon-container">
                <img src={tiktok_icon} alt="" />
            </div>
            <div className="footer-icon-container">
                <img src={wa_icon} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer