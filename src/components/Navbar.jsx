import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <h2 className="logo">Matt Food Bar & Deluxe Grills</h2>
    <ul className="nav-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/menu">Menu</Link></li>
      <li><Link to="/recipes">Recipes</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
);

export default Navbar;
