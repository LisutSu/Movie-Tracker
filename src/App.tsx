
import { useState } from "react";
import AddMovie from "./Components/AddMovie";
import ListMovie from "./Components/ListMovie";

function App() {
  const [movies, setMovies] = useState([
    { id: 1, title: "Avengers", watched: false },
    { id: 2, title: "Spider-Man", watched: false }
  ]);

  // Mark as watched
  const toggleWatched = (id) => {
    setMovies(
      movies.map(movie =>
        movie.id === id
          ? { ...movie, watched: !movie.watched }
          : movie
      )
    );
  };

  // Remove movie
  const removeMovie = (id) => {
    setMovies(movies.filter(movie => movie.id !== id));
  };

  return (
    <div>
      <h1>Movie Tracker</h1>

      <AddMovie movies={movies} setMovies={setMovies} />

      <ListMovie
        movies={movies}
        toggleWatched={toggleWatched}
        removeMovie={removeMovie}
      />
    </div>
  );
}

export default App;
