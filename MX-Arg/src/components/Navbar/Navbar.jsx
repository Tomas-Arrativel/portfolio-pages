import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import './navbar.css';

const Navbar = () => {
  // Change nav color when scrolling
  const [colorBG, setColorBG] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColorBG(true);
    } else {
      setColorBG(false);
    }
  };

  window.addEventListener('scroll', changeColor);

  // Responsive menu
  const [click, setClick] = useState('header__navbar-links');
  const clickToggler = () => {
    click === 'header__navbar-links'
      ? setClick('header__navbar-links rmenu__active')
      : setClick('header__navbar-links');
  };

  return (
    <nav
      className={
        colorBG ? 'header__navbar header__navbar-bg' : 'header__navbar'
      }
    >
      <a href='#' className='header__navbar-logo'>
        <img src='./img/logo.png' alt='Mx arg logo' />
        <h2>MX ARG</h2>
      </a>

      <ul className={click}>
        <li>
          <a href='#'>Tracks</a>
        </li>
        <li>
          <a href='#'>Bikes</a>
        </li>
        <li>
          <a href='#'>Rent a bike</a>
        </li>
        <li>
          <a href='#'>Contact</a>
        </li>
      </ul>

      <div className='header__navbar-rmenu'>
        <AiOutlineMenu
          color='#fff'
          size={25}
          className='rmenu-btn'
          onClick={clickToggler}
        />
      </div>
    </nav>
  );
};

export default Navbar;
