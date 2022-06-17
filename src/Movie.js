import React from 'react';

export default function Movie({ handleDeleteMovie, movie }) {
  return (
    <div
      className={movie.vibe}
      onClick={(movie) => handleDeleteMovie && handleDeleteMovie(movie.title)}
    >
      <h3 className='font-link'>{movie.title}</h3>
      <h4>{movie.director}</h4>
      <h1>🍿</h1>
      <h4>{movie.year}</h4>
    </div>
  );
}
