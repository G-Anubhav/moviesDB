import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieList from './components/MovieList';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyapi.online/api/movies');
        setMovies(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching the movies', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Movie Database</h1>
      {loading ? <p>Loading...</p> : <MovieList movies={movies} />}
    </div>
  );
};

export default App;
