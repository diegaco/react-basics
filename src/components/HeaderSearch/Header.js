import React from "react";
import logo from "../../logo.svg";
import "./Header.css";
import NavList from "../NavList";
import NewsContext from "../../context";

const { Consumer } = NewsContext;

const Header = () => {
  return (
    <header className="App-header">
      <div className="logo">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <NavList />
      <form
        action=" "
        style={{
          width: "350px",
          textAlign: "center"
        }}
      >
        <Consumer>
          {({ getKeywords }) => (
            <div className="form-item">
              <label htmlFor="keywords">Search:</label>
              <input
                type="text"
                name="keywords"
                id="keywords"
                onChange={getKeywords}
                style={{
                  width: "100%"
                }}
              />
            </div>
          )}
        </Consumer>
      </form>
    </header>
  );
};

export default Header;
