import React from 'react'

import StorageUnit from '../components/StorageUnit'
//import {fetchStorageUnits} from '../actions/fetchStorageUnits'

class RentalUnits extends React.Component{
    
    renderStorageUnits = (something) => something.map((unit, id) => <StorageUnit key={id} text={unit} />)

    render(){
        if (!!this.props.units) {
            return(
                <div>
                rental units
                {console.log(this.props.units.storageUnits)}
                {this.renderStorageUnits(this.props.units.storageUnits)}
                {/* {this.renderStorageUnits(this.props.units.storageUnits)} */}

                {/* <StorageUnit  /> */}
            </div>
            )
        } else {
            return(
                <div>
                    no units
                </div>
            )
        }
    }
}

    //renderStorageUnits = () => this.props.units.map((unit, id) => <StorageUnit key={id} text={unit} />)


export default (RentalUnits)