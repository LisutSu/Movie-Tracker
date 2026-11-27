
const ListMovie = ({ movies, toggleWatched, removeMovie }) => {
  return (
    <div>
      <h2>My Movies</h2>

      {movies.length === 0 && <p>No movies yet</p>}

      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            {movie.watched
              ? <del>{movie.title}</del>
              : movie.title}

            <button onClick={() => toggleWatched(movie.id)}>
              {movie.watched ? "Unwatch" : "Watched"}
            </button>

            <button onClick={() => removeMovie(movie.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListMovie;
