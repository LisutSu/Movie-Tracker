
import { useState } from "react";

const AddMovie = ({ movies, setMovies }) => {
  const [title, setTitle] = useState("");

  const addMovie = (e) => {
    e.preventDefault();

    if (title === "") {
      alert("Enter a movie title");
      return;
    }

    const newMovie = {
      id: Date.now(),
      title: title,
      watched: false
    };

    setMovies([...movies, newMovie]);
    setTitle("");
  };

  return (
    <form onSubmit={addMovie}>
      <input
        type="text"
        placeholder="Movie name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
};

export default AddMovie;
