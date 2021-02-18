export const updateStorageUnit = (data) => {

    return(dispatch) => {
        fetch(`http://localhost:3000/units/${id}`,
        {method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(unit => dispatch({type: 'UPDATE_UNIT', payload: unit}))
    }
}