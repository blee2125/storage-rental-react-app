import React from 'react'

//import {rentStorageUnit} from '../actions/rentStorageUnit'
//import {connect} from 'react-redux'

class RentalForm extends React.Component{

    state= {
        unit_number: '',
        customer: '',
        comments: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.rentStorageUnit(this.state)
        this.setState({unit_number: '', customer: '', comments: ''})
    }

    render(){
        return(
            <div>
                <form className='RentalForm' onSubmit={this.handleSubmit}>
                    Rental Form<br/>
                    <label> Unit Number: </label>
                    <input type='text' value={this.state.name} name='unit_number' onChange={this.handleChange} />
                    <label> Customer: </label>
                    <input type='text' value={this.state.name} name='customer' onChange={this.handleChange} />
                    <label> Comments: </label>
                    <input type='text' value={this.state.name} name='comments' onChange={this.handleChange} />
                    <input type='submit' />
                </form>
            </div>
        )
    }
}

export default (RentalForm)