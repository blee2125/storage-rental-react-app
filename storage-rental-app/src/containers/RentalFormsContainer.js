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
                
                <RentalForm data={this.props} />

                <table>
                <thead>
                <tr>
                    <th>unit_number</th>
                    <th>customer</th>
                    <th>comment</th>
                    <th>created_at</th>
                </tr>
                </thead>
                <tbody>
                {this.renderDisplayRentalForm(this.props.data.rentalForms)}
                </tbody>
            </table>

            </div>
        )
    }
}

export default RentalFormsContainer