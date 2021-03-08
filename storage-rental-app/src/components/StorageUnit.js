import React from 'react'
import { connect } from 'react-redux'

import {deleteStorageUnit} from '../actions/deleteStorageUnit'

class StorageUnit extends React.Component {
    
    handleDelete = (storageUnit) => {
        //console.log(storageUnit.text.unit_number)
        this.props.deleteStorageUnit(storageUnit.text.id)
    }

    renderAvailable = () => {
        if (this.props.text.available == true) {
            return "yes"
        } else {
            return "no"
        }
    } // - Available: {renderAvailable()}

    state={
        currentCount: 0,
        something: 'yes'
    }

    addLike = (currentCount) =>{
        console.log(currentCount)
        currentCount ++
        this.setState({currentCount: currentCount})
    }

    render(){
        return(
        <div>
            <p>Unit Number: {this.props.text.unit_number} - <button onClick={()=> this.handleDelete(this.props)}>delete</button>
            <button onClick={()=> this.addLike(this.state.currentCount)}>like</button>{this.state.currentCount}</p>
            
        </div>
        )
    }
}

export default connect(null, {deleteStorageUnit})(StorageUnit)