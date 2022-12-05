import axios from 'axios';
import React, {useState} from 'react';
import './App.css';
import './bootstrap.min.css'

function App() {
  const [data, setData] = useState([])
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=b55b22712f60c9cff195ea068abe36ca`

  //const icon = 'https:openweathermap.org/img/w' + icon + '.png'

  const locationSearch = (e) => 
  {
    if (e.key === "Enter")
    {
      axios.get(url).then((response) =>
      {
        setData(response.data)
        console.log(response.data)
      })
      setLocation("")
    }
  }
  return (
    <div className="app">
      <div className='wrapper'>
        <div className='searchBox'>Location:
          <input value={location} type='text' placeholder="Enter Location Here"
          onKeyPress = {locationSearch} onChange = 
          {(e) => setLocation(e.target.value)}/>
        </div>
        <div className='weatherInfo'>
          <div className='location'>
            {data.weather ? <p>Location: {data.name}</p> : null}
          </div>
          <div className='temperature'>
            {data.main ? (<p>Temperature: {data.main.temp.toFixed(2)} degrees</p>) : null}
          </div>
          <div className='description'>
            {data.weather ? <p>Currently: {data.weather[0].main}</p> : null}
          </div>
          <div className='wind'>
          {data.wind ? <p>Wind: {data.wind.speed.toFixed()} mph</p> : null}
          </div>
          <div className='humidity'>
          {data.main ? <p>Humidity: {data.main.humidity}%</p> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
