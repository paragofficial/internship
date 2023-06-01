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
        <Link className="navbar-brand" to="/internship">
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
              <Link className="nav-link" to="/internship/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/internship/skin" onClick={closeMenu}>
                Skin
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/internship/body" onClick={closeMenu}>
                Body
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/internship/hair" onClick={closeMenu}>
                Hair
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/internship/fragnance" onClick={closeMenu}>
                Fragnance
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/internship/travel" onClick={closeMenu}>
                Travel
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/internship/gifts" onClick={closeMenu}>
                Gifts
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/internship/read" onClick={closeMenu}>
                Read
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/internship/login" onClick={closeMenu}>
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/internship/register" onClick={closeMenu}>
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
