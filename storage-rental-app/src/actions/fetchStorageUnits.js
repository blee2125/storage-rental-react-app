export function fetchStorageUnits(){
    return (dispatch) => {
        fetch('https://storage-unit-manager-api.herokuapp.com/units')
        .then(resp => resp.json())
        .then(data => dispatch({
            type: 'FETCH_UNITS',
            payload: data
        }))
    }
}