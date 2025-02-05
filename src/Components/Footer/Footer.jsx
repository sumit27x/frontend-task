import React,{useState} from 'react';
import "./Footer.css";

import Logo from "./../../Assets/logo.png"
import { CiLinkedin } from "react-icons/ci";
import { RiTwitterXLine } from "react-icons/ri";
import { PiYoutubeLogoLight } from "react-icons/pi";
import { PiInstagramLogoLight } from "react-icons/pi";


const Footer = () => {
      const [activeItem, setActiveItem] = useState("Home");
  
      const menuItems = [
          "Home",
          "About us",
          "Experiences at parks",
          "Marketing Updates",
          "ESG",
          "New Launches",
          "Technology update",
          "Financial Stability",
          "Business Updates"
      ];
  return (
    <div>
      <div className='container'>
        <div className='footer-top'>
          <img src={Logo} alt="Mindspace" srcset="" className='footer-logo'/>
          <ul className='footer-menu'>
            <li><CiLinkedin className='footer-icon'/></li>
            <li><RiTwitterXLine className='footer-icon'/></li>
            <li><PiYoutubeLogoLight className='footer-icon'/></li>
            <li><PiInstagramLogoLight className='footer-icon'/></li>
          </ul>
        </div>

        <div className='footer-middle'>
        <ul className='footer-menu'>
            {menuItems.map((item, index) => (
                <li
                    key={index}
                    className={`footer-item ${activeItem === item ? 'active' : ''}`}
                    onClick={() => setActiveItem(item)}
                >
                    {item}
                </li>
            ))}
        </ul>
        </div>

        <div className='footer-bottom'>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
      <div className='green-color'></div>
    </div>
  )
}

export default Footer
