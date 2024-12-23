import React, { createContext, useState } from 'react';

// Create MovieContext
export const MovieContext = createContext();

// MovieProvider component
export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  // Function to add a new movie
  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  return (
    <MovieContext.Provider value={{ movies, addMovie }}>
      {children}
    </MovieContext.Provider>
  );
};
