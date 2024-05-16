import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <h1>Agricultural Website</h1>
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/shop">Shop</Link>
      </nav>
    </header>
  );
};

export default Header;
