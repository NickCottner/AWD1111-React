import React from "react";

class Location extends React.Component
{
    constructor(props) 
    {
        //Calls Parent Constructor
        super(props)

        this.state = { inputValue : "" }
    }

    onFormSubmit = (e) => 
    {
        e.preventDefualt()
        this.props.onSearchSubmit(this.state.inputValue)
    }

    render()
    {
        return(
            <form className="" onSubmit={this.onFormSubmit} >
                <input type="text" name="city" placeholder="Enter City Name" 
                onChange={(e) =>
                this.setState({inputValue: e.target.value})} />
            </form>
        )
    }
}

export default Location