import React from "react";
import { movies } from "../data";


function Movies() {

  const movieItem = 
  movies.map((movie) => {
    const movieG = movie.genres.map((genre) => 
      <li key={genre}>{genre}</li>
    )
    return ( 
      <div key={movie.title}>
        <h2>Name: {movie.title}</h2>
        <p>Time: {movie.time}</p>
        <p>genres:</p>
        <ul>
          {movieG}
        </ul>
      </div>
    )
  })



  return (
    <div>
    <h1>Movies Page</h1>
    {movieItem}
    </div>
    );
}

export default Movies;
