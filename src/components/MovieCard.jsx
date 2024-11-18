import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <h2>{movie.movie}</h2>
      <img src={movie.image} alt={movie.movie} className="movie-image" />
      <p><strong>ID:</strong> {movie.id}</p>
      <a href={movie.imdb_url} target="_blank" rel="noopener noreferrer">View on IMDb</a>
    </div>
  );
};

export default MovieCard;
