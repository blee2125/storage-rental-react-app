import React from 'react'
import { connect } from 'react-redux'

import {deleteStorageUnit} from '../actions/deleteStorageUnit'

const StorageUnit = (props) => {
    
    const handleDelete = (storageUnit) => {
        //console.log(storageUnit.text.unit_number)
        props.deleteStorageUnit(storageUnit.text.id)
    }

    const renderAvailable = () => {
        if (props.text.available == true) {
            return "yes"
        } else {
            return "no"
        }
    }

    return(
        <div>
            <p>Unit Number: {props.text.unit_number} - Available: {renderAvailable()}</p>
            <button onClick={()=> handleDelete(props)}>delete</button>
        </div>
    )
}

export default connect(null, {deleteStorageUnit})(StorageUnit)