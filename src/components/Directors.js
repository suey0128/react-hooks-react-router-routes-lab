import React from "react";
import { directors } from "../data";

function Directors() {

  const directorDiv = directors.map((director) => {

    const movie = director.movies.map((movieName) => <li key={movieName}>{movieName}</li>)

    return (
      <div key={director.name}>
        <h2>Name:{director.name} </h2>
        <p>Movies:</p>
        <ul>{movie}</ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Directors Page</h1>
      {directorDiv}
    </div>
  );
}

export default Directors;
