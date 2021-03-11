export const likeStorageUnit = (data) => {
    return(dispatch) => {
        fetch(`http://localhost:3000/units/${data.id}`,
        {method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(unit => dispatch({type: 'ADD_LIKE', payload: unit}))
    }
}