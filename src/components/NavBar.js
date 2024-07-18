
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ toggleDarkMode, darkMode }) => {
  return (
    <nav className={`navbar fixed-top navbar-expand-lg ${darkMode ? 'navbar-light bg-light' : 'navbar-dark bg-dark'}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          LocalNews
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/business">
                Business
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/entertainment">
                Entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/health">
                Health
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/science">
                Science
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sports">
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/technology">
                Technology
              </Link>
            </li>
          </ul>
          <div className="form-check form-switch ms-auto">
            <input 
              onClick={toggleDarkMode} 
              className="form-check-input" 
              type="checkbox" 
              role="switch" 
              id="flexSwitchCheckChecked" 
              checked={darkMode} 
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
              Enable DarkMode
            </label>
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
