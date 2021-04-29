export const rentStorageUnit = (data) => {

    return(dispatch) => {
        fetch('https://storage-unit-manager-api.herokuapp.com/rental_forms',
        {method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(unit => dispatch({type: 'RENT_UNIT', payload: unit}))
    }
}