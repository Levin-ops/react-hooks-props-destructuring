import React from "react";
import MovieCard from "./MovieCard";

function App(){
  const title ="Mad Max"
  const posterSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn1OTYGz2GDC1XjA9tirh_1Rd571yE5UFIYsmZp4nACMd7CCHM"
  const genres = ["Action", "Adventure", "Scienc Fiction", "Thriller"]

  return(
    <div className="App">
      <MovieCard title = {title} posterSrc = {posterSrc} genres = {genres} />
    </div>
  )
}

export default App;