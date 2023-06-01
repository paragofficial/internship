import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Aesop
        </Link>
        <button
          className={`navbar-toggler ${isMenuOpen ? 'collapsed' : ''}`}
          type="button"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/skin" onClick={closeMenu}>
                Skin
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/body" onClick={closeMenu}>
                Body
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/hair" onClick={closeMenu}>
                Hair
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/fragnance" onClick={closeMenu}>
                Fragnance
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/travel" onClick={closeMenu}>
                Travel
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gifts" onClick={closeMenu}>
                Gifts
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/read" onClick={closeMenu}>
                Read
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login" onClick={closeMenu}>
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register" onClick={closeMenu}>
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
