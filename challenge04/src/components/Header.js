import React from 'react';
import { MdAccountCircle } from 'react-icons/md';

import logo from '../assets/facebook.png';

function Header() {
  return (
    <header>
      <nav>
        <img src={logo}></img>
        <div>
          <span>Meu perfil</span>
          <MdAccountCircle />
        </div>
      </nav>
    </header>
  )
}

export default Header;