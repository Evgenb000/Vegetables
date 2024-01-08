import { Link } from 'react-router-dom';
import './nav.scss';
import React from 'react';

const Nav: React.FC = () => {
  return ( 
    <nav className="nav">
      <ul className="nav__list">    
        <Link to='/Cart'>
          <li className="nav__item">Cart</li>
        </Link> 
        
        <Link to='/about-us'>
          <li className="nav__item">About Us</li>
        </Link>
      
        <Link to='/contact-us'>
          <li className="nav__item">Contact Us</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Nav;
