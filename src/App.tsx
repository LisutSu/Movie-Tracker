import { useState } from "react"
import AddMovie from "./Components/AddMovie";
import ListMovie from "./Components/ListMovie";


function App() {
  const [movies, setMovies] = useState([
    { id: 1, text: "Learn React", complete: false },
    { id: 2, text: "Build Task Tracker", complete: false }
  ]);
  return (
    <div>
      <h1>Movie Tracker</h1>
      <AddMovie movies={movies} setMyTask={setMovies}/>
      <ListMovie movies={movies} />
    </div>
  )
}

export default App