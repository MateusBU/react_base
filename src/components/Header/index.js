import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/Login">
        <FaSignInAlt size={24} />
      </Link>
      <Link to="/asd">
        <FaUserAlt size={24} />
      </Link>
    </Nav>
  );
}
/* para usar o Link, o HEADER deve estar envolvido pelo Router history={history} no App.js
 O 'to' é a mesma coisa que href */
