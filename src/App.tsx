import { useState, useEffect, useCallback } from 'react';
import './App.scss';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const moviesListPromise = await fetch('https://swapi.dev/api/films');
      if (!moviesListPromise.ok) {
        throw new Error('Something Went Wrong')
      }
      const moviesList = await moviesListPromise.json();
      console.log(moviesList);
      setMovies(moviesList.results)
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      // setError(err);
      console.log('error :-> ' + err);
    }
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  return (
    <div className="App">
      <h1>App Page</h1>
      {!error && isLoading && <p>Loading Data</p>}
      {error && <p>{error}</p>}
      <button onClick={fetchMoviesHandler}>Click Me</button>
      { (!error && movies && movies.length > 0) && <ul>
        { movies.map(m => {
          return (
            <li key={m['title']}>{m['title']}</li>
          )
        })}
      </ul> }
    </div>
  );
}

export default App;
