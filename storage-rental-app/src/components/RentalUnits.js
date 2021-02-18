import React from 'react'
import StorageUnit from '../components/StorageUnit'

class RentalUnits extends React.Component{
    
    renderStorageUnits = (something) => something.map((unit, id) => <StorageUnit key={id} text={unit} />)

    render(){
        return(
            <div>
                rental unit index
                {this.renderStorageUnits(this.props.data.storageUnits)}

            </div>
        )
    }
}

export default (RentalUnits)