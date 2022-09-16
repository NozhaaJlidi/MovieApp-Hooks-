import React, { useState } from "react";
import AddMovie from "./AddMovie";
import MovieCard from "./MovieCard";
import { datalist } from "../data";
import Button from "react-bootstrap/Button";

const MovieList = ({ text }) => {
  const [listToMap, setlistToMap] = useState(datalist);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container">
      {listToMap
      
        .filter((el) => el ?.title?.toUpperCase().includes(text.toUpperCase()))
        .map((el,i) => (
          <MovieCard key={i} x={el} />
        ))}
      <Button onClick={() => setShowModal(true)} variant="outline-secondary">
        Add{" "}
      </Button>{" "}
      {showModal && <AddMovie listToMap={listToMap} setlistToMap= {setlistToMap} setShowModal={setShowModal} /> }
    </div>
  );
};

export default MovieList;
