export const addStorageUnit = (data) => {

    return(dispatch) => {
        fetch('http://localhost:3000/units',
        {method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(unit => dispatch({type: 'ADD_UNIT', payload: unit}))
    }
}