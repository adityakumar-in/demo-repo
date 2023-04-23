import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/about/">About</NavLink></li>
      </ul>
    </nav>
  )
}
