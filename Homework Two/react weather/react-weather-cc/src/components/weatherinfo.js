import React from 'react'

class WeatherInfo extends React.Component{
	constructor(props){
		super(props)
	}

	render() {
		return(
		<div>
            <div>
                <div>
                    <p>Location: {this.props.forecastDetails.name}</p>
                </div>
            </div>

            <div>
				<div>
					<div>
						<span>Temperature: {(this.props.forecastDetails.main.temp)}&deg;F</span>
					</div>
					<div>
						<p>Details: {this.props.forecastDetails.weather[0].description}</p>
					</div>
				</div>

				<div>
					<p>Humidity: {this.props.forecastDetails.main.humidity}%</p>
				</div>
			</div>
		</div>
        )
    }
}

export default WeatherInfo;