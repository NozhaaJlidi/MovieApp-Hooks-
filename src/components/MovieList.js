import React, { useState } from "react";
import AddMovie from "./AddMovie";
import MovieCard from "./MovieCard";
import Button from "react-bootstrap/Button";
import {useSelector} from "react-redux"

const MovieList = ({ text }) => {
  const datalist= useSelector(state=>state.movie);
  // const [listToMap, setlistToMap] = useState(datalist);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container">
      {datalist
        .filter((el) => el?.title?.toUpperCase().includes(text.toUpperCase()))
        .map((el, i) => (
          <MovieCard key={i} x={el} />
        ))}
      <Button onClick={() => setShowModal(true)} variant="outline-secondary">
        Add{" "}
      </Button>{" "}
      {showModal && <AddMovie setShowModal={setShowModal} />}
    </div>
  );
};

export default MovieList;
