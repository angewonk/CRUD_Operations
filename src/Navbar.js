import React from 'react';
import { useLocation } from 'react-router-dom';
import './Navbar.css'; // Ensure this points to your CSS file

function Navbar() {
  const location = useLocation(); // Get the current location

  return (
    <nav className="custom-navbar">
      
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/profile">Profile</a></li>
        <li><a href="/admin">Admin</a></li>
        {(location.pathname === '/profile' || location.pathname === '/admin') && (
          <li><a href="/">Log Out</a></li>
        )}
        {(location.pathname === '/account' || location.pathname === '/admin') && (
          <li><a href="/">Log Out</a></li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
