import React from 'react'
import { Route, Switch } from 'react-router-dom'
import {fetchStorageUnits} from '../actions/fetchStorageUnits'
import {connect} from 'react-redux'

import RentalForm from '../components/RentalForm'
import RentalUnits from '../components/RentalUnits'
import NewRentalUnit from '../components/NewRentalUnit'
import {fetchRentalForms} from '../actions/fetchRentalForms'
import RentalFormsContainer from './RentalFormsContainer'


class StorageUnitsContainer extends React.Component{

    componentDidMount(){
        this.props.fetchStorageUnits();
        this.props.fetchRentalForms();
    }

    render(){
        return(
            <div>
                <Switch>
                <Route path='/rentalunits' render={() => <RentalUnits data={this.props} />} />
                <Route path='/addrentalunit' component={NewRentalUnit} />
                <Route path='/rentalform' render={() => <RentalFormsContainer data={this.props} />}/>                    
                </Switch>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return{
        storageUnits: state.units,
        rentalForms: state.forms
    }
}

export default connect(mapStateToProps, {fetchRentalForms, fetchStorageUnits}) (StorageUnitsContainer)