import React from "react";
import ReactDOM from "react-dom";


const MovieCard = (props)=> {
  return (
    <div className="MovieCard">
     <img src={props.x.img} alt="placeholder" />
      <h3> {props.x.title}</h3>
      <p>{props.x.description}</p>

    </div>
  );
};

export default MovieCard;
