import { Link } from 'react-router-dom';
import Logo from '../logo/logo';
import './header.scss';
import Nav from './nav/nav';
import React from 'react';

const Header: React.FC = () => {
  return ( 
    <header className="header">
      <div className="header__container container">
        <div className="header__logo">
          <Link to='/Vegetables-main'>
            <Logo />
          </Link>
        </div>
        
        <Nav />
      </div>
    </header>
  )
}

export default Header;
