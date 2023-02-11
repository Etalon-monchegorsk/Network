import React from 'react';
import { Link } from 'react-router-dom';
import NavModuleStyle from './Nav.module.css';


function Nav() {
  return (
    <div className={NavModuleStyle.container}>
        <Link className={NavModuleStyle.item} to='/profile'>Profile</Link>
        <Link className={NavModuleStyle.item} to='/messages'>Message</Link>

    </div>
  )  
}

export default Nav;


