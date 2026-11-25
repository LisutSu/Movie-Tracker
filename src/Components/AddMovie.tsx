import { useState } from "react"

const AddTask = ({movies, setMyTask}) => {

    const[newMovie, setNewMovie]= useState("")
    const handleAddMovies = () => {
        if (!newMovie.trim()) return {
           
        }
        setMyTask([
            ...movies, 
            {id: crypto.randomUUID() , text: newMovie, completed: false}
        ])


    }
    return (
        <div className="flex flex-col justify-center">
            <input value={newMovie} onChange={(e) => setNewMovie(e.target.value)} className="border-2 rounded p-1 border-gray-300" type="text" placeholder="Add a Movie" />
            <button onClick={handleAddMovies} className="px-2 py-1 bg-gray-300 rounded cursor-pointer">Add new Movie</button>
        </div>
    )
}

export default AddTask