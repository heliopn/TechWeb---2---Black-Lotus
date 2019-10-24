import React from "react";

const Header = props => {
  return (
      <nav>
        <img src="https://i.ibb.co/M2RzpmT/image-removebg-preview.png" className="App-logo" alt="logo" />
        <h2 className="App-title">{props.title}</h2>
      </nav>
  );
};

export default Header;
