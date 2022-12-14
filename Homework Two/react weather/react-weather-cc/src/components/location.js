import React from 'react'

class Location extends React.Component {
	constructor(props){
		super(props)
		this.state = {inputValue: ""}
	}

	onFormSubmit = (e) =>{
		e.preventDefault();
		this.props.onSearchSubmit(this.state.inputValue)   
	}

	render() {
		return(
			<form className="" onSubmit={this.onFormSubmit}>
				<input	type="text" name="city"
						placeholder="City To Search" 
						onChange={(e) => 
							this.setState({inputValue: e.target.value})} />
			</form>
		)
	}
}

export default Location;