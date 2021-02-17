import React from 'react'
import DisplayRentalForm from '../components/DisplayRentalForm'

import {fetchRentalForms} from '../actions/fetchRentalForms'
import {connect} from 'react-redux'
import RentalForm from '../components/RentalForm'


class RentalFormsContainer extends React.Component{


    renderDisplayRentalForm = (something) => something.map((form, id) => <DisplayRentalForm key={id} text={form} />)


    render(){
        return(
            <div>
                rental form container
                {console.log(this.props)}
                <RentalForm data={this.props} />
                {this.renderDisplayRentalForm(this.props.data.rentalForms)}
            </div>
        )
    }
}

export default RentalFormsContainer