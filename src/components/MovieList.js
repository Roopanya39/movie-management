import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';

const MovieList = () => {
  const { movies } = useContext(MovieContext);

  return (
    <div>
      <h2>Movie List</h2>
      {movies.length > 0 ? (
        <ul>
          {movies.map((movie, index) => (
            <li key={index}>
              <strong>{movie.title}</strong> ({movie.genre}, {movie.year})
            </li>
          ))}
        </ul>
      ) : (
        <p>No movies available</p>
      )}
    </div>
  );
};

export default MovieList;
