import React from "react";

const NavBar = (props) => {
  return (
    <div className="NavigationBar">
      <img id="ImageLogo" src="./logo1.png" alt=""></img>
      <div className="NavigationBar__content">
        <img id="HomeLogo" src="./house-door.svg" alt=""></img>
        <h3>HOME</h3>
        <img id="HomeLogo" src="./film.svg" alt=""></img>
        <h3>MOVIES</h3>
        <img id="HomeLogo" src="./tv.svg" alt=""></img>
        <h3>SERIES</h3>
      </div>

      <input onChange={(e) =>props.setText(e.target.value) } 
        type="text"
        
        placeholder="Rechercher"
      ></input>
    </div>
  );
};

export default NavBar;
