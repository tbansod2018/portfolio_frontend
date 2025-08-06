// src/components/Header.js

import React from 'react';
import { NavLink } from 'react-router-dom'; // Correctly used NavLink
import './Header.css'; // Assuming this file exists

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="site-name">Asset Hub</h1>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/profile" className={({ isActive }) => (isActive ? 'active' : '')}>
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/stocks" className={({ isActive }) => (isActive ? 'active' : '')}>
              Stocks
            </NavLink>
          </li>
          <li>
            <NavLink to="/realestate" className={({ isActive }) => (isActive ? 'active' : '')}>
              Real Estate
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
