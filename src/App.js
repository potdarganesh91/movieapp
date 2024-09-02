// @ts-nocheck
// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import GenreFilter from './components/GenreFilter';
import MovieList from './components/MovieList';
import Container from 'react-bootstrap/Container';
import './styles.css';

function App() {
  const [selectedGenre, setSelectedGenre] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const genres = [
    { id: 28, name: 'Action' },
    { id: 35, name: 'Comedy' },
    { id: 18, name: 'Drama' },
    // Add more genres as needed
  ];

  return (
    <div className="App">
      <Header />
      <Container className="mt-4">
        <GenreFilter
          genres={genres}
          selectedGenre={selectedGenre}
          searchTerm={searchTerm}
          onSelectGenre={setSelectedGenre}
          onSearch={setSearchTerm}
        />
        <MovieList year={2012} selectedGenre={selectedGenre} searchTerm={searchTerm} />
      </Container>
    </div>
  );
}

export default App;
