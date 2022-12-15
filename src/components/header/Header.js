import React from 'react';
import './header.css';
import planet from '../../assets/planet.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="header-logo">
          <NavLink to="/profile"><img src={planet} className="logo" alt="planet" /></NavLink>
          <h1>Space Travelers Hub</h1>
        </div>
        <ul className="header-links">
          <li>
            <NavLink to="/rocket"
            style={({ isActive }) => ({
              color: 'rgb(37, 150, 190)',
              textDecoration: isActive ? 'underline' : 'none',
            })}
            >
              Rocket
            </NavLink>
          </li>
          <li>
            <NavLink to="/mission"
            style={({ isActive }) => ({
              color: 'rgb(37, 150, 190)',
              textDecoration: isActive ? 'underline' : 'none',
            })}
            >
              Mission
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile"
            style={({ isActive }) => ({
              color: 'rgb(37, 150, 190)',
              textDecoration: isActive ? 'underline' : 'none',
            })}
            >
              Profile
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header