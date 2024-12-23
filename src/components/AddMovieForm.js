import React, { useState, useContext } from 'react';
import { MovieContext } from '../context/MovieContext';

const AddMovieForm = () => {
  const { addMovie } = useContext(MovieContext);
  const [title, setTitle] = useState('');
  const [genres, setGenres] = useState([]);
  const [year, setYear] = useState('');

  const handleGenreChange = (e) => {
    const selectedGenres = Array.from(e.target.selectedOptions, (option) => option.value);
    setGenres(selectedGenres);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && genres.length > 0 && year) {
      addMovie({ title, genres, year });
      setTitle('');
      setGenres([]);
      setYear('');
    }
  };

  // Inline styles for the background and form container
  const formStyle = {
    background: 'linear-gradient(to right, #ff7e5f, #feb47b)', // Gradient background
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    margin: '20px auto',
    color: '#fff',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '4px',
    border: 'none',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#ff7e5f',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <h2>Add a New Movie</h2>
      <input
        type="text"
        placeholder="Movie Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={inputStyle}
      />
      <select
        multiple
        value={genres}
        onChange={handleGenreChange}
        style={{ ...inputStyle, height: '80px' }}
      >
        <option value="Action">Action</option>
        <option value="Comedy">Comedy</option>
        <option value="Drama">Drama</option>
        <option value="Horror">Horror</option>
        <option value="Romance">Romance</option>
        <option value="Sci-Fi">Sci-Fi</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Documentary">Documentary</option>
        <option value="Thriller">Thriller</option>
      </select>
      <input
        type="number"
        placeholder="Release Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        style={inputStyle}
      />
      <button type="submit" style={buttonStyle}>Add Movie</button>
    </form>
  );
};

export default AddMovieForm;
