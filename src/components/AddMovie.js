import React, { useState } from "react";
import '../styles/addmovie.css'
import Button from "react-bootstrap/Button";

const AddMovie = ({setShowModal, setlistToMap,listToMap}) => {
  const [newMovie, setNewMovie] = useState({});
  
  const handlechange = (e) => {
     setNewMovie({...newMovie,[e.target.name] :e.target.value})
  }
  return(
  <div className="modal-container">
    <h1  onClick={()=>setShowModal(false)} id="close-btn">X</h1>
    
     <div className="formulaire">
      <h3> Add Movie</h3>
    <input onChange={(e)=>handlechange(e)} text="" name="title" placeholder="Movie Title"></input>
    <input onChange={(e)=>handlechange(e)}text="" name="description"placeholder="Movie Description"></input>
    <input onChange={(e)=>handlechange(e)} text="" name="img"placeholder="Movie Image"></input>
    <input onChange={(e)=>handlechange(e)} text=""name="rate"placeholder="Movie Rate"></input>
    <Button onClick={() => {setlistToMap([...listToMap,newMovie]);setShowModal(false)}  }variant="outline-secondary">
        Save{" "}
      </Button>{" "}
    </div>
  </div>)
   
};

export default AddMovie;
