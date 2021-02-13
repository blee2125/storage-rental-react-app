import React from 'react'
import { connect } from 'react-redux'
import {addStorageUnit} from '../actions/addStorageUnit'

class NewRentalUnit extends React.Component{

    constructor(){
        super()
        this.state= {
            unit_number: '',
            available: true
        }
    }


    handleChange = (event) => {
        this.setState({
            unit_number: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addStorageUnit(this.state)
        this.setState({unit_number: ''})
    }

    render(){
        return(
            <div>
                <form className='NewStorageUnit' onSubmit={this.handleSubmit}>
                    Add New Storage Unit<br/>
                    <label> Unit Number: </label>
                    <input type='text' value={this.state.name} name='unit_number' onChange={this.handleChange} />
                    <input type='submit' />
                </form>
            </div>
        )
    }
}

export default connect(null, {addStorageUnit})(NewRentalUnit)