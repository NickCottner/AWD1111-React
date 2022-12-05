import React 		from 'react';
import axios 		from 'axios';
import MovieDetails	from './components/MovieDetails';
import MovieList 	from './components/MovieList'

class App extends React.Component {
    state = {movieInfo: null}

	onSearchSubmit = async (imdbId) => {
        const response = await axios.get(`http://www.omdbapi.com/?s=${imdbId}&apikey=d6a3685b`)
        this.setState({movieInfo: response.data})
     }

    render() {
        return(
            <div className="container text-center container my-5">
                <h1>List Of Movies:</h1>
                 <MovieList onSearchSubmit = {this.onSearchSubmit} />
                 {this.state.movieInfo ?  <MovieDetails movieInfo = {this.state.movieInfo} /> : <div></div>}
            </div>
        )
    }

}

export default App;