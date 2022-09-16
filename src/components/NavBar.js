import React from "react";
import { Link } from 'react-router-dom';

const NavBar = ({ setText }) => {
  return (
    <div className="NavigationBar">
      <img id="ImageLogo" src="./logo1.png" alt=""></img>
      <div className="NavigationBar__content">
        <img id="HomeLogo" src="./house-door.svg" alt=""></img>
        <h3> <Link to="/">HOME</Link></h3>
        <img id="HomeLogo" src="./film.svg" alt=""></img>
        <h3>   <Link to="/Movies">MOVIES</Link></h3>
        <img id="HomeLogo" src="./tv.svg" alt=""></img>
        <h3><Link to="/Movies">SERIES</Link></h3>
      </div>

      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        placeholder="Search"
      ></input>
    </div>
  );
};

export default NavBar;
