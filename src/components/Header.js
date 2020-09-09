import React from 'react';
import Navbar from './Navbar';
import Landscape from './Landscape';
import './Header.css';

function Header() {
  return (
    <header>
      <Navbar/>
      <Landscape/>
    </header>
  );
}

export default Header;