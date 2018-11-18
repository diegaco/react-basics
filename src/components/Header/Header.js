import React from "react";
import logo from "../../logo.svg";
import NavList from "../NavList";
import "./Header.css";

const Header = () => {
  return (
    <header className="App-header">
      <div className="logo">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <NavList />
    </header>
  );
};

export default Header;
