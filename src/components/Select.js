import React from 'react'
import Select from 'react-select'

class SelectTopic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'Oscars 2022'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        <form onSubmit ={this.handleSubmit}>
            <label>
                Pick Topic 
            </label>
        </form>
    }
}