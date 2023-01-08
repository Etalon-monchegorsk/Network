import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'



function Nav() {
  return (
    <div className='Nav'>
        <Link to='/profile'>Profile</Link>
        <Link to='/messages'><FontAwesomeIcon icon={solid('user-secret')} />Message</Link>

    </div>
  )  
}

export default Nav;


