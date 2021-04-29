export const deleteStorageUnit = (unitId) => {

    return(dispatch) => {
        fetch(`https://storage-unit-manager-api.herokuapp.com/units/${unitId}`,
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