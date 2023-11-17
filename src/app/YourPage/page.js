"use client"
import React, { useEffect, useState } from 'react';

export default function YourPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint
    fetch('/api/your-endpoint')
      .then(response => response.json())
      .then(data => {
        // Check for success and update state with the movie data
        if (data.success) {
          setMovies(data.movies);
        } else {
          console.error('Error fetching data:', data.message);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <div>
      <h1>Your Page</h1>
      <div>
        <h2>Movies</h2>
        <ul>
          {movies.map((movie, index) => (
            <li key={index}>
              <strong>Title:</strong> {movie.title}, <strong>Director:</strong> {movie.director}
              {/* Add other movie properties as needed */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
