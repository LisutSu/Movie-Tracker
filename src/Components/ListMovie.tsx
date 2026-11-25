

const ListTask = ({movies, })=> {
    return (
        <div>
    <ul>
        {movies.map(movies => (
            <li key={movies.id}> {movies.text} </li>
        ))}
    </ul>
        </div>
    )
}

export default ListTask