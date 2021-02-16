import React from 'react'
import { connect } from 'react-redux'

import {deleteStorageUnit} from '../actions/deleteStorageUnit'

const StorageUnit = (props) => {
    
    const handleDelete = (storageUnit) => {
        //console.log(storageUnit.text.unit_number)
        props.deleteStorageUnit(storageUnit.text.id)
    }

    return(
        <div>
            <ul>Unit Number: {props.text.unit_number}</ul><button onClick={()=> handleDelete(props)}>delete</button>
        </div>
    )
}

export default connect(null, {deleteStorageUnit})(StorageUnit)