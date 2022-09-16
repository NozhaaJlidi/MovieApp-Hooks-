import './App.css';
import MovieList from './components/MovieList';
import NavBar from './components/NavBar';
import { useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import Description from './components/Description';

function App() {
  
  


  const[text,setText]= useState("")
  return (
    <div className="App">
  
      <NavBar setText={setText}/>
      <hr></hr>
      <Routes>
         <Route path="/" element={<MovieList text={text}/>} />
         <Route path="/description/:title" element={<Description/>} />
      </Routes>
      
    </div>
  );
}

export default App;
