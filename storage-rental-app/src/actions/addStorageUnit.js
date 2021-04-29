export const addStorageUnit = (data) => {

    return(dispatch) => {
        fetch('https://storage-unit-manager-api.herokuapp.com/units',
        {method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(unit => dispatch({type: 'ADD_UNIT', payload: unit}))
    }
}