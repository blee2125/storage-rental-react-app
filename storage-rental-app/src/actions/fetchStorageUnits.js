export function fetchStorageUnits(){
    return (dispatch) => {
        fetch('http://localhost:3000/units')
        .then(resp => resp.json())
        .then(data => dispatch({
            type: 'FETCH_UNITS',
            payload: data
        }))
    }
}