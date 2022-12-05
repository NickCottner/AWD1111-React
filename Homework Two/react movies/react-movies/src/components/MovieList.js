import { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom'

function MovieList()
{
    //State Variables
    const [searchTerm, setSearchTerm] = useState('') 
    const [movies, setMovies] = useState([])
    const [movieNotFound, setMovieNotFound] = useState(false)

    useEffect(() => 
    {
        let term = localStorage.getItem("searchTerm")
        if(term)
        {
            fetchMovies(term)
        }
    }, [])


    const fetchMovies = (movieName) =>
    {
        const listurl = `http://www.omdbapi.com/?s=${movieName}&apikey=d6a3685b`

        localStorage.setItem("searchTerm", movieName)

        fetch(listurl)
        .then(response => response.json())
        .then(result =>
            {
                if(result.Error)
                {
                    setMovies([])
                    setMovieNotFound(true)
                }
                else
                {
                    setMovies(result.Search)
                    setMovieNotFound(false)
                }
            })
    }
    const clearAll = () =>
    {
        setMovies([])
        setSearchTerm('')
        localStorage.removeItem('searchTerm')
        //setMovieNotFound(false)
    }
    const handleSearchTermChange = (evt) =>
    {
        setSearchTerm(evt.target.value)
    }
    const movieItems = movies.map(movie =>
        {
            return (
                <div key={movie.imdbId}>
                    <img src = {movie.Poster} alt = 'Movie Poster'/>
                    <h2>{movie.title}</h2>
                    <NavLink to = {`/items?movieID=${movie.imdbID}`}><button>Details</button>
                    </NavLink>    
                </div>
            )
        })

        return(
            <div className="mainPart">
                <h1>Movie List</h1>
                Search: <input type="text" onChange={handleSearchTermChange}/>

                <button onClick = {() => fetchMovies(searchTerm)}>Search</button>
                <button onClick = {clearAll}>Clear</button>

                {movieItems}

                {movieNotFound} ? <h1>Movie Not Found</h1> : null
            </div>
        )
}

export default MovieList