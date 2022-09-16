import React from "react";
import {Link} from "react-router-dom";




const MovieCard = ({x})=> {
  return (
    <div className="MovieCard">
     <img src={x.img} alt="placeholder" />
      <h3> {x.title}</h3>
      <p>{x.description}</p>
      <Link  to={`/description/${x.title}`} state={{ x }}>

      <h6 id="SeeMore">  See More</h6></Link>

    </div>
  );
};

export default MovieCard;
