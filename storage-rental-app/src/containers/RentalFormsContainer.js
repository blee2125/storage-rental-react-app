import React from 'react'
import DisplayRentalForm from '../components/DisplayRentalForm'
import RentalForm from '../components/RentalForm'

class RentalFormsContainer extends React.Component{

    renderDisplayRentalForm = (forms) => forms.map((form, id) => <DisplayRentalForm key={id} text={form} />)

    render(){
        return(
            <div>
                
                <RentalForm data={this.props} /><br></br>
Past rentals
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