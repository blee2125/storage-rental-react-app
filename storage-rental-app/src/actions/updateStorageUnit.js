export const updateStorageUnit = (data) => {

    return(dispatch) => {
        fetch(`https://storage-unit-manager-api.herokuapp.com/units/${data.id}`,
        {method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(unit => dispatch({type: 'UPDATE_UNIT', payload: unit}))
    }
}