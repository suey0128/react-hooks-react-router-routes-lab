import React from "react";
import { actors } from "../data";

function Actors() {
  console.log(actors)

  const actorsDiv = actors.map((actor) => {

    const movie = actor.movies.map((movieName) => <li key={movieName}>{movieName}</li>)

    return (
      <div key={actor.name}>
        <h2>Name:{actor.name} </h2>
        <p>Movies:</p>
        <ul>{movie}</ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Actors Page</h1>
      {actorsDiv}
    </div>
  );
}

export default Actors;
