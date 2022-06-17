import { useEffect, useState } from 'react';
import './App.css';
import MovieForm from './MovieForm';
import MovieList from './MovieList';
import Movie from './Movie';

function App() {
  const [movieFormTitle, setMovieFormTitle] = useState('✨ T i t l e ✨');
  const [movieFormDirector, setMovieFormDirector] = useState('🎬 D i r e c t o r 🎬');
  const [movieFormYear, setMovieFormYear] = useState(2022);
  const [movieFormVibe, setMovieFormVibe] = useState('joyous');
  const [filterString, setFilterString] = useState('');
  const [visibleMovies, setVisibleMovies] = useState([]);
  //dummy data below//
  const [allMovies, setAllMovies] = useState([
    { title: 'Eagle vs. Shark', director: 'Taika Waititi', year: '2007', vibe: 'nerdy' },
  ]);

  useEffect(() => {
    setVisibleMovies(allMovies);
    setFilterString('');
  }, [allMovies]);

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

  function handleDeleteMovie(title) {
    const indexDelete = allMovies.findIndex((movie) => movie.title === title);
    allMovies.splice(indexDelete, 1);
    setAllMovies([...allMovies]);
  }

  function handleFilterMovies(filterString) {
    setFilterString(filterString);
    const updateMovies = allMovies.filter((movie) =>
      movie.title.toLocaleLowerCase().includes(filterString.toLocaleLowerCase())
    );
    filterString ? setVisibleMovies(updateMovies) : setVisibleMovies(allMovies);
  }

  return (
    <div className="App">
      <div className="current-movie quarter">
        <Movie
          movie={{
            title: movieFormTitle,
            director: movieFormDirector,
            year: movieFormYear,
            vibe: movieFormVibe,
          }}
        />
      </div>
      <div className="movie-filter quarter">
        filter:
        <input value={filterString} onChange={(e) => handleFilterMovies(e.target.value)} />
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
      <MovieList movies={visibleMovies} handleDeleteMovie={handleDeleteMovie} />
    </div>
  );
}

export default App;
