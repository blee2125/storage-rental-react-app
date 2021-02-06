import React from 'react'

class NewRentalUnit extends React.Component{

    state= {
        unit_number: '',
        
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
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

export default (NewRentalUnit)