import './App.css';
import MovieForm from './MovieForm';

function App() {


  return (
    <div className="App">
      <div className="current-movie quarter">
        <p>CURRENT MOVIES APPEAR HERE</p>
      </div>
      <div className="movie-filter quarter">
        <p>WATCHED MOVIES HERE</p>
      </div>
      <MovieForm 
      />
    </div>
  );
}

export default App;
