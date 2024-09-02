// src/components/MovieCard.js
import React from "react";
import { Card, Button } from "react-bootstrap";

const MovieCard = ({ title, image, genre, cast, director, description }) => {
  return (
    <Card className="mb-4 h-100">
      <Card.Img
        variant="top"
        src={`https://image.tmdb.org/t/p/w500/${image}`}
        alt={title}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <strong>Genre:</strong> {genre} <br />
          <strong>Director:</strong> {director} <br />
          <strong>Cast:</strong> {cast} <br />
          {description.length > 100
            ? description.substring(0, 100) + "..."
            : description}
        </Card.Text>
        <Button variant="primary">More Info</Button>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
