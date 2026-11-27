
const ListMovie = ({ movies, toggleWatched, removeMovie }) => {
  return (
    <div className="mt-6">

      <h2 className="text-xl font-bold mb-4">
        My Movies
      </h2>

      {movies.length === 0 && (
        <p className="text-gray-500 text-center p-4">
          No movies yet T-T
        </p>
      )}

      <ul className="space-y-3">
        {movies.map(movie => (
          <li
            key={movie.id}
            className="flex justify-between items-center border border-gray-300 p-3 rounded-lg"
          >
            {movie.watched
              ? <del className="text-gray-400">{movie.title}</del>
              : <span className="text-gray-800">{movie.title}</span>}

            <div className="flex gap-2">

              <button
                onClick={() => toggleWatched(movie.id)}
                className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg"
              >
                {movie.watched ? "Unwatch" : "Watched"}
              </button>

              <button
                onClick={() => removeMovie(movie.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg"
              >
                Remove
              </button>

            </div>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default ListMovie;
