
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

  // Count watched movies
  const watchedCount = movies.filter(movie => movie.watched).length;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-lg">

        <h1 className="text-3xl font-bold text-center text-zinc-700 mb-4">
          Movie Tracker
        </h1>

        <p className="text-center text-gray-500 mb-5">
          Watched: {watchedCount} / {movies.length}
        </p>

        <AddMovie movies={movies} setMovies={setMovies} />

        <ListMovie
          movies={movies}
          toggleWatched={toggleWatched}
          removeMovie={removeMovie}
        />

      </div>
    </div>
  );
}

export default App;
