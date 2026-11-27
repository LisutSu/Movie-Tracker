
import { useState } from "react";

const AddMovie = ({ movies, setMovies }) => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState(false);

  const addMovie = (e) => {
    e.preventDefault();

    if (title.trim() === "") {
      setError(true);
      return;
    }

    const newMovie = {
      id: Date.now(),
      title: title,
      watched: false
    };

    setMovies([...movies, newMovie]);
    setTitle("");
    setError(false);
  };

  return (
    <form onSubmit={addMovie} className="mb-5">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Movie name"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            setError(false);
          }}
          className={`border p-2 rounded-lg flex-1 outline-none
            ${error ? "border-red-500 border-2" : "border-gray-300"}`}
        />

        <button
          type="submit"
          className="bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      {error && (
        <p className="text-red-500 text-sm mt-1">
            Movie title is required! :P
        </p>
      )}
    </form>
  );
};

export default AddMovie;
