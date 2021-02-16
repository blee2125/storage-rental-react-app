export const deleteStorageUnit = (unitId) => {

    return(dispatch) => {
        fetch(`http://localhost:3000/units/${unitId}`,
        {method: 'DELETE', headers: {'Content-Type': 'application/json'}})
        .then(resp => resp.json())
        .then(data => dispatch({type: 'DELETE_UNIT', payload: data}))
        .catch(error => {
            console.error({
              error
            });
          });
    }
}