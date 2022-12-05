import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function MovieDetails(props)
{
    const [theMovieDetails, setTheMovieDetails] = useState({})

    const search = useLocation().search;
    const movieID = new URLSearchParams(search).get('movieID');

    const fetchMovieDetailsById = (imdbId) => 
    {
        const detailUrl = `http://www.omdbapi.com/?s=${imdbId}&apikey=d6a3685b`

        fetch(detailUrl)
        .then((response) => response.json)
        .then((result) => setTheMovieDetails(result))
    }

    useEffect(() =>
    {
        fetchMovieDetailsById(movieID)
    })

    return(
        <div>
            <img src={theMovieDetails.Poster} alt = 'Movie Poster'/>
            <p>Title: {theMovieDetails.Title}</p>
            <p>Plot: {theMovieDetails.Plot}</p>
            <p>Director: {theMovieDetails.Director}</p>
            <p>Released: {theMovieDetails.Released}</p>
            
        </div>
    )
}
export default MovieDetails