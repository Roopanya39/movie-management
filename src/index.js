import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css'; 
import { MovieProvider } from './context/MovieContext'; 
import App from './App'; 
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <MovieProvider>
    <App />
  </MovieProvider>
);
