import React 		from 'react';
import axios 		from 'axios';
import Location 	from './components/Location';
import WeatherInfo 	from './components/WeatherInfo'

class App extends React.Component {
    state = {forecastDetails: null}

	onSearchSubmit = async (inputValue) => {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=imperial&appid=7262fb4a0ed32b58938363ff4098e281`)
        this.setState({forecastDetails: response.data})
     }

    render() {
        return(
            <div className="container text-center container my-5">
                <h1>Weather Details For:</h1>
                 <Location onSearchSubmit = {this.onSearchSubmit} />
                 {this.state.forecastDetails ?  <WeatherInfo forecastDetails = {this.state.forecastDetails} /> : <div></div>}
            </div>
        )
    }

}

export default App;
