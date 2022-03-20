import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';

import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <a href="https://twitter.com/home">
        <FaHome size={24} />
      </a>
      <a href="https://twitter.com/home">
        <FaSignInAlt size={24} />
      </a>
      <a href="https://twitter.com/home">
        <FaUserAlt size={24} />
      </a>
    </Nav>
  );
}
