import React from 'react';

export default function MovieForm({
  movieFormTitle,
  setMovieFormTitle,
  movieFormDirector,
  setMovieFormDirector,
  movieFormYear,
  setMovieFormYear,
  movieFormVibe,
  setMovieFormVibe,
  submitMovie,
}) {
  //   console.log(movieFormTitle);

  return (
    <div className="movie-form-container quarter">
      <form onSubmit={(e) => submitMovie(e)} className="movie-form">
        <label>
          Title:
          <input
            required
            value={movieFormTitle}
            onChange={(e) => setMovieFormTitle(e.target.value)}
          />
        </label>
        <label>
          Director:
          <input
            required
            value={movieFormDirector}
            onChange={(e) => setMovieFormDirector(e.target.value)}
          />
        </label>
        <label>
          Year:
          <input
            required
            type="number"
            value={movieFormYear}
            onChange={(e) => setMovieFormYear(e.target.value)}
          />
        </label>
        <label>
          Vibe:
          <select required value={movieFormVibe} onChange={(e) => setMovieFormVibe(e.target.value)}>
            <option value="joyous">Joyous</option>
            <option value="mellow">Mellow</option>
            <option value="optimistic">Optimistic</option>
            <option value="nerdy">Nerdy</option>
            <option value="excited">Excited</option>
          </select>
        </label>
        <button>Add Movie to Watch List</button>
      </form>
    </div>
  );
}
