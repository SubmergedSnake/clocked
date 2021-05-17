import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';


export const Navbar = props => {

  return (
    <nav>
      <Link to="/tasklist" className="navlink"  >Tasks</Link>
      <Link to="/about" className="navlink">About</Link>
      <button id="addBtn" title="Add new task...">+</button>
    </nav>
  )

}