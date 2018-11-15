import React from "react";
import logo from "../../logo.svg";
import "./Header.css";

const Header = props => {
  return (
    <header className="App-header">
      <div className="logo">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <form
        action=" "
        style={{
          width: "350px",
          textAlign: "center"
        }}
      >
        <div className="form-item">
          <label htmlFor="keywords">Search:</label>
          <input
            type="text"
            name="keywords"
            id="keywords"
            onChange={props.keywords}
            style={{
              width: "100%"
            }}
          />
        </div>
      </form>
    </header>
  );
};

export default Header;
