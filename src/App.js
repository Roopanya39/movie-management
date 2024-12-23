import React from 'react';
import { MovieProvider } from './context/MovieContext';
import AddMovieForm from './components/AddMovieForm';
import MovieList from './components/MovieList';
import './styles.css';

const App = () => {
  return (
    <MovieProvider>
      <div className="App">
        <h1>Movie Management</h1>
        <AddMovieForm />
        <MovieList />
      </div>
    </MovieProvider>
  );
};

export default App;
