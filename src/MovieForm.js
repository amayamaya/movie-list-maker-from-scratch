import React from 'react';

export default function MovieForm({
  movieFormName,
  movieFormDirector,
  movieFormYear,
  movieFormColor,
}) {
  return (
    <div className="movie-form-container quarter">
      <form className="movie-form">
        <label>
          Name:
          <input required value={movieFormName} />
        </label>
        <label>
          Director:
          <input required value={movieFormDirector} />
        </label>
        <label>
          Director:
          <input required value={movieFormYear} />
        </label>
        <label>
          Vibe:
          <select required value={movieFormColor}>
            <option value="happy">Happy</option>
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
