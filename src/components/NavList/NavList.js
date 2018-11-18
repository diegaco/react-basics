import React from "react";
import { NavLink } from "react-router-dom";

const NavList = () => {
  return (
    <nav className="navbar">
      <NavLink exact activeClassName="nav-item-active" to="/">
        Home
      </NavLink>
      <NavLink activeClassName="nav-item-active" to="/about">
        About
      </NavLink>
      <NavLink activeClassName="nav-item-active" to="/news">
        News
      </NavLink>
    </nav>
  );
};

export default NavList;
