// src/components/GenreFilter.js
import React from 'react';
import Form from 'react-bootstrap/Form';

const GenreFilter = ({ genres, selectedGenre, searchTerm, onSelectGenre, onSearch }) => {
  return (
<div className='row mb-3'>
    
    <Form.Group className="row">
    <div className='col-3'>
      <Form.Label className=''>Filter</Form.Label>
      <Form.Select
        value={selectedGenre}
        onChange={(e) => onSelectGenre(e.target.value)}
      >
        <option value="">All Genres</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </Form.Select>
        </div>
        <div className='col-3'>
      <Form.Label className="">Search Movies</Form.Label>
      <Form.Control
        type="text"
        placeholder="Search for movies..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
      />
      </div>
    </Form.Group>
    </div>
  );
};

export default GenreFilter;
