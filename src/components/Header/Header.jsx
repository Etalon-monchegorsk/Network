import React from 'react';
import HeaderModuleStyle from './Header.module.css';
import NetworkLogo from '../../img/NetworkLogo.svg';

function Header() {
  return (
    <div className={HeaderModuleStyle.main}>
      <div className={HeaderModuleStyle.container}>
        <img src={NetworkLogo} alt="#" />
      </div>
        
    </div>
  )
}

export default Header;