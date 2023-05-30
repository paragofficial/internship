import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup" style={{ position: "relative" }}>
          <div className="navbar-nav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/skin">Skin</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/body">Body</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/hair">Hair</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/fragnance">Fragnance</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/travel">Travel</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/gifts">Gifts</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/read">Read</Link>
              </li>
              
            </ul>
          </div>
          <div className="d-flex align-items-center" style={{ right: "30px", position: "absolute" }}>
            
           
            <div>
              <li className="nav-item" style={{ listStyleType: "none" }}>
                <Link className="nav-link" to="/login" style={{ margin: "10px" }}>
                  Login
                </Link>
              </li>
            </div>
            <div>
              <li className="nav-item" style={{ listStyleType: "none" }}>
                <Link className="nav-link" to="/register" style={{ margin: "10px" }}>
                  Register
                </Link>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
