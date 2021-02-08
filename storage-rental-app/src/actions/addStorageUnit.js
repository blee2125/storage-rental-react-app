export const addStorageUnit = () => {

    return(dispatch) => {
        fetch('http://localhost:3000/units',
        {method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(unit)})
        .then(resp => resp.json())
        .then(unit => dispatch({type: 'ADD_UNIT', payload: unit}))
    }
}