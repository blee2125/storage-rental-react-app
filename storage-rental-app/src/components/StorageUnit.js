import React from 'react'

const StorageUnit = (props) => {
    
    // console.log(props.text.unit_number)

    return(
        <div>
            <ul>Unit Number: {props.text.unit_number}</ul>
        </div>
    )
}

export default StorageUnit