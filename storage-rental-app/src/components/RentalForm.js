import React from 'react'

class RentalForm extends React.Component{

    state= {unit_number: '', customer: '', comments: ''}

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.rentUnit(this.state)
        this.setState({unit_number: '', customer: '', comments: ''})
    }

    render(){
        return(
            <div>
                <form className='RentalForm' onSubmit={this.handleSubmit}>
                    Rental Form
                    <label> Unit Number: </label>
                    <input type='text' value={this.state.name} name='unit_number' onChange={this.handleChange} />
                    <label> Customer: </label>
                    <input type='text' value={this.state.name} name='customer' onChange={this.handleChange} />
                    <label> Comments: </label>
                    <input type='text' value={this.state.name} name='comments' onChange={this.handleChange} />
                </form>
            </div>
        )
    }
}