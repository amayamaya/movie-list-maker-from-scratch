import React from 'react';
import Movie from './Movie';

export default function MovieList({ movies, handleDeleteMovie }) {
  return (
    <div className="movie-list quarter">
      {movies.map((movie, i) => (
        <Movie key={movie + i} movie={movie} handleDeleteMovie />
      ))}
    </div>
  );
}
