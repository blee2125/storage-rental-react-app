import React from 'react'
import { connect } from 'react-redux'

import {rentStorageUnit} from '../actions/rentStorageUnit'
import RentalFormsContainer from '../containers/RentalFormsContainer'

class RentalForm extends React.Component{
    
    constructor(){
        super()
        this.state= {
            unit_number: '',
            customer: '',
            comments: '',
            unit_id: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.state.unit_id = this.state.unit_number
        this.props.rentStorageUnit(this.state)
        this.setState({unit_number: '', customer: '', comments: ''})
    }

    render(){
        return(
            <div>
                <form className='RentalForm' onSubmit={this.handleSubmit}>
                    Rental Form<br/>
                    <label> Unit Number: </label>
                    <input type='text' value={this.state.unit_number} name='unit_number' onChange={this.handleChange} />
                    <label> Customer: </label>
                    <input type='text' value={this.state.customer} name='customer' onChange={this.handleChange} />
                    <label> Comments: </label>
                    <input type='text' value={this.state.comments} name='comments' onChange={this.handleChange} />
                    <input type='submit' />
                </form>
                <div>
                    <RentalFormsContainer />
                </div>
            </div>
        )
    }
}

export default connect(null, {rentStorageUnit})(RentalForm)