import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className='header__navbar'>
      <a href='#' className='header__navbar-logo'>
        <img src='./img/logo.png' alt='Mx arg logo' />
        <h2>MX ARG</h2>
      </a>

      <ul className='header__navbar-links'>
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
    </nav>
  );
};

export default Navbar;
