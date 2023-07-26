import React from 'react';
import { Navbar, Hero } from '../../components/exports';
import './header.css';

const Header = () => {
  return (
    <header id='header'>
      <Navbar />
      <Hero />
    </header>
  );
};

export default Header;
