import React from 'react'
import { Route, Switch } from 'react-router-dom'
import {fetchStorageUnits} from '../actions/fetchStorageUnits'
import {connect} from 'react-redux'

import RentalForm from '../components/RentalForm'
import RentalUnits from '../components/RentalUnits'
import NewRentalUnit from '../components/NewRentalUnit'

class StorageUnitsContainer extends React.Component{

    componentDidMount(){
        this.props.fetchStorageUnits()
    }

    render(){
        return(
            <div>
                storage units container
                <Switch>
                <Route path='/rentalunits' component={RentalUnits} />
                <Route path='/addrentalunit' component={NewRentalUnit} />
                <Route path='/rentalform' component={RentalForm} />                    
                </Switch>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return{
        storageUnits: state.units
    }
}

export default connect(mapStateToProps, {fetchStorageUnits}) (StorageUnitsContainer)