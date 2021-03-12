import React from 'react'
import DisplayRentalForm from '../components/DisplayRentalForm'
import RentalForm from '../components/RentalForm'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

class RentalFormsContainer extends React.Component{

    state={
        rentalFormArray: this.props.data.rentalForms
    }

    componentDidMount(){
        this.setState({rentalFormArray: this.props.data.rentalForms})
    }

    sortByUnit = () => {
        const stateArray = this.state.rentalFormArray
        let sortUnits = stateArray.sort(function(a,b){
            return a.unit_number.localeCompare(b.unit_number);
        })
        this.setState({rentalFormArray: sortUnits})
    }

    sortByDate = () => {
        const stateDateArray = this.state.rentalFormArray
        let sortDate = stateDateArray.sort(function(a,b){
            return a.created_at.localeCompare(b.created_at);
        })
        this.setState({rentalFormArray: sortDate})
    }

    sortByCustomer = () => {
        const stateCustomerArray = this.state.rentalFormArray
        let sortCustomer = stateCustomerArray.sort(function(a,b){
            return a.customer.localeCompare(b.customer);
        })
        this.setState({rentalFormArray: sortCustomer})
    }

    renderDisplayRentalForm = (forms) => forms.map((form, id) => <DisplayRentalForm key={id} text={form} />)

    render(){
        return(
            <div>
                <RentalForm data={this.props} /><br></br>
                Past rentals<br></br>
                <ButtonGroup >
                    <Button onClick={() => this.sortByUnit(this.state)}>Sort By Units</Button>
                    <Button onClick={() => this.sortByCustomer(this.state)}>Sort By Customer</Button>
                    <Button onClick={() => this.sortByDate(this.state)}>Sort By Date</Button>
                </ButtonGroup>
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