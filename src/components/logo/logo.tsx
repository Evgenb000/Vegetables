import React from 'react';
import logo from '../../assets/images/logo.png';
import './logo.scss';

const Logo: React.FC = () =>  {
  return ( 
    <div className='logo'>
      <img src={logo} alt="Logo" />
    </div>
  )
}

export default Logo;
