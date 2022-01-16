import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { ReactComponent as CloseMenu } from "../assets/x.svg";
import { ReactComponent as MenuIcon } from "../assets/menu.svg";
import Logo from "../Images/logo.png";
import "../Stylings/NavBar.css";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className='NavBar'>
      <div className='logo-nav'>
        <div className='logo-container'>
          <a className='atag' href='/'>
            <img src={Logo} height='40' width='40' alt='' loading='lazy' />
          </a>
        </div>
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className='option' onClick={closeMobileMenu}>
            <a className='atag' href="#aboutMe" >ABOUT</a>
          </li>
          <li className='option' onClick={closeMobileMenu}>
            <a className='atag' href='#projects'>PROJECTS</a>
          </li>
          <li className='option' onClick={closeMobileMenu}>
            <a className='atag' href='#skills'>SKILLS</a>
          </li>
          <li className='option' onClick={closeMobileMenu}>
            <a className='atag' href='#contact'>CONTACT</a>
          </li>
        </ul>
      </div>

      <div className='mobile-menu' onClick={handleClick}>
        {click ? (
          <CloseMenu className='menu-icon' />
        ) : (
          <MenuIcon className='menu-icon' />
        )}
      </div>
    </div>
  );
};

export default NavBar;
