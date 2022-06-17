import React from 'react';

export default function Movie({ handleDeleteMovie, movie }) {
  return (
    <div className="movie" onClick={(movie) => handleDeleteMovie && handleDeleteMovie(movie.title)}>
      <h3>{movie.title}</h3>
      <h4>{movie.director}</h4>
      <p>🍿</p>
      <p>{movie.year}</p>
    </div>
  );
}
