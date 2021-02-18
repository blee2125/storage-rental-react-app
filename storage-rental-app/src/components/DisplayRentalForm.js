import React from 'react'

const DisplayRentalForm = (props) => {
    
    //console.log(props)

    return(

                <tr>
                    <td>{props.text.unit_number}</td>
                    <td>{props.text.customer}</td>
                    <td>{props.text.comments}</td>
                    <td>{props.text.created_at}</td>
                </tr>
        
    )
}

export default DisplayRentalForm