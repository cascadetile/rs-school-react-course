import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

export class NavMenu extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="nav-menu">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about-us">About Us</NavLink>
      </div>
    );
  }
}

export default NavMenu;