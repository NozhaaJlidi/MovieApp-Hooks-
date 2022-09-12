import React,{ useState} from "react";
import AddMovie from "./AddMovie";
import MovieCard from "./MovieCard";

const MovieList = ({text,list}) => {
  const [listToMap, setlistToMap] = useState(list)
const addMovie=(newMovie)=> {
  setlistToMap([...listToMap, newMovie]);
}
   return (
    <div className="container">
      {listToMap.filter(el => el.title.toLowerCase().includes(text.toLowerCase())).map((el) => (
        <MovieCard x={el} />

      ))}
      <AddMovie   addMovie={addMovie}></AddMovie>
    </div>
  );
};

export default MovieList;
