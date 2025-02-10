import React,{ useState } from 'react';

import "./Navbar.css";
import Logo from "./../../Assets/logo.png";
import { CiSearch } from "react-icons/ci";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { VscClose } from "react-icons/vsc";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    "Home",
    "About us",
    "Experiences at parks",
    "Marketing Updates",
    "ESG",
    "New Launches",
    "Technology update",
    "Financial Stability",
    "Business Updates",
  ];

  return (
    <div className="navbar-container">
      <div className="green-color"></div>
      <div className="container">
        <div className="nav-top">
          <div className="nav-search">
            <CiSearch className="search-icon" />
            <input type="text" placeholder="Search" />
          </div>
          <div className="nav-logo">
            <img src={Logo} alt="Mindspace Insider" />
          </div>
          <div className="nav-contact">
            <button className="contact-button">Contact us</button>
            <HiBars3BottomLeft
              className="menu-icon"
              onClick={() => setSidebarOpen(true)}
            />
          </div>
        </div>
        <div className="nav-bottom">
          <ul className="nav-menu">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`nav-item ${activeItem === item ? "active" : ""}`}
                onClick={() => setActiveItem(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Sidebar for mobile view */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <VscClose
          className="close-icon"
          onClick={() => setSidebarOpen(false)}
        />
        <ul className="sidebar-menu">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`sidebar-item ${activeItem === item ? "active" : ""}`}
              onClick={() => {
                setActiveItem(item);
                setSidebarOpen(false);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
        <button className="sidebar-contact-button">Contact us</button>
      </div>
      <div
        className={`sidebar-overlay ${sidebarOpen ? "show" : ""}`}
        onClick={() => setSidebarOpen(false)}
      ></div>
    </div>
  );
};

export default Navbar;
