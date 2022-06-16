import { useState } from 'react';
import './App.css';
import MovieForm from './MovieForm';

function App() {
  const [movieFormTitle, setMovieFormTitle] = useState('');
  const [movieFormDirector, setMovieFormDirector] = useState('');
  const [movieFormYear, setMovieFormYear] = useState('');
  const [movieFormVibe, setMovieFormVibe] = useState('');

  const [allMovies, setAllMovies] = useState([
    { title: 'Eagle vs. Shark', director: 'Taika Waititi', year: '2007', vibe: 'nerdy' },
  ]);

  // console.log(allMovies);

  function submitMovie(e) {
    e.preventDefault();
    const newMovie = {
      title: movieFormTitle,
      director: movieFormDirector,
      year: movieFormYear,
      vibe: movieFormVibe,
    };
    setAllMovies([...allMovies, newMovie]);
  }

  return (
    <div className="App">
      <div className="current-movie quarter">
        <p>CURRENT MOVIES APPEAR HERE</p>
      </div>
      <div className="movie-filter quarter">
        filter:
        <input />
      </div>
      <MovieForm
        submitMovie={submitMovie}
        movieFormTitle={movieFormTitle}
        setMovieFormTitle={setMovieFormTitle}
        movieFormDirector={movieFormDirector}
        setMovieFormDirector={setMovieFormDirector}
        movieFormYear={movieFormYear}
        setMovieFormYear={setMovieFormYear}
        movieFormVibe={movieFormVibe}
        setMovieFormVibe={setMovieFormVibe}
      />
    </div>
  );
}

export default App;
