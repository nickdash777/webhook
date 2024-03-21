const express = require("express");
const app = express();
const PORT = 3000;

// Dummy movie data
const movies = [
  { id: 1, title: "The Shawshank Redemption" },
  { id: 2, title: "The Godfather" },
  { id: 3, title: "The Dark Knight" },
  { id: 4, title: "Pulp Fiction" },
  { id: 5, title: "Schindler's List" },
];

app.get("/movies", (req, res) => {
  // Map movies to desired format
  const moviesWithValues = movies.map((movie) => ({
    id: movie.id,
    value: movie.title,
  }));

  // Send response
  res.json({ movies: moviesWithValues });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
