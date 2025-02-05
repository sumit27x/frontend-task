import React,{ useState } from 'react';
import "./Navbar.css";
import Logo from "./../../Assets/logo.png"
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
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
    <div className=''>
        <div className='green-color'></div>
      <div className='container'>
        <div className='nav-top'>
            <div className='nav-search'>
            <CiSearch className='search-icon'/>
            <input type="text" placeholder='Search' />
            </div>
            <div className='nav-logo'>
                <img src={Logo} alt='Mindspace Insider'  />
            </div>
            <div className='nav-contact'>
                <button>Contact us</button>
            </div>
        </div>
        <div className='nav-bottom'>
            {/* <ul className='nav-menu'>
                <li className='nav-item'>Home</li>
                <li className='nav-item'>About us</li>
                <li className='nav-item'>Experiences at parks</li>
                <li className='nav-item'>Marketing Updates</li>
                <li className='nav-item'>ESG</li>
                <li className='nav-item'>New Launches</li>
                <li className='nav-item'>Technology update</li>
                <li className='nav-item'>Financial Stability</li>
                <li className='nav-item'>Business Updates</li>
            </ul> */}



<ul className='nav-menu'>
            {menuItems.map((item, index) => (
                <li
                    key={index}
                    className={`nav-item ${activeItem === item ? 'active' : ''}`}
                    onClick={() => setActiveItem(item)}
                >
                    {item}
                </li>
            ))}
        </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
