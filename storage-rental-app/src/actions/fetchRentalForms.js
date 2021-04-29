export function fetchRentalForms(){
    return (dispatch) => {
        fetch('https://storage-unit-manager-api.herokuapp.com/rental_forms')
        .then(resp => resp.json())
        .then(data => dispatch({
            type: 'FETCH_FORMS',
            payload: data
        }))
    }
}