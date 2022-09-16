import React from "react";
import { useLocation } from "react-router-dom";

const Description = () => {
  const location = useLocation();
  const { x } = location.state;
  return (
    <div className="description">
      <h1>{x.title}</h1>
      <p>{x.description}</p>

      <iframe 
      className="video-frame"
        width="560"
        height="315"
        src={x.trailer}
        title="YouTube video player"
        position="relative"
        display="initial"
      ></iframe>
    </div>
  );
};

export default Description;
