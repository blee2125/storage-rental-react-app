export const deleteStorageUnit = (unitId) => {

    return(dispatch) => {
        fetch('http://localhost:3000/units/${unitId}',
        {method: 'DELETE'
        })
        .then(resp => resp.json())
        .then(unit => dispatch({type: 'DELETE_UNIT', payload: unit}))
    }
}