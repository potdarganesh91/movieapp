// @ts-nocheck

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import MovieCard from './MovieCard';

const MovieList = ({ year, selectedGenre, searchTerm }) => {
  const [movies, setMovies] = useState([]);
  const [currentYear, setCurrentYear] = useState(year || 2012);
  const [hasMore, setHasMore] = useState(true);

  const apiKey = '805f5e680b4f9c5640f779d6d8aa117b'; // Replace with your TMDb API key

  const fetchMovies = async (year, genre, search) => {
    const genreQuery = genre ? `&with_genres=${genre}` : '';
    const searchQuery = search ? `&query=${search}` : '';
    const url = `https://api.themoviedb.org/3/discover/movie?${searchQuery}&api_key=${apiKey}&sort_by=popularity.desc&primary_release_year=${year}&vote_count.gte=100${genreQuery}`;
    try {
      const response = await axios.get(url);
      return response.data.results;
    } catch (error) {
      console.error('Error fetching movies:', error);
      return [];
    }
  };

  useEffect(() => {
    const loadMovies = async () => {
      const initialMovies = await fetchMovies(currentYear, selectedGenre, searchTerm);
      setMovies(initialMovies);
      setHasMore(true); // Assuming there are more movies to load initially
    };
    loadMovies();
  }, [currentYear, selectedGenre, searchTerm]);

  const fetchNextYearMovies = async () => {
    const nextYearMovies = await fetchMovies(currentYear + 1, selectedGenre, searchTerm);
    if (nextYearMovies.length === 0) {
      setHasMore(false); // Stop fetching if no more movies are available
    }
    setMovies((prevMovies) => [...prevMovies, ...nextYearMovies]);
    setCurrentYear((prevYear) => prevYear + 1);
  };

  return (
    <Container fluid>
      <InfiniteScroll
        dataLength={movies.length}
        next={fetchNextYearMovies}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        <Row className="g-4">
          {movies.map((movie) => (
            <Col key={movie.id} xs={12} sm={6} md={4} lg={3}>
              <MovieCard
                title={movie.title}
                image={movie.poster_path}
                genre={movie.genre_ids.join(', ')}
                cast="Cast info..."
                director="Director info..."
                description={movie.overview}
              />
            </Col>
          ))}
        </Row>
      </InfiniteScroll>
    </Container>
  );
};

export default MovieList;
