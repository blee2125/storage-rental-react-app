export function fetchRentalForms(){
    return (dispatch) => {
        fetch('http://localhost:3000/rental_forms')
        .then(resp => resp.json())
        .then(data => dispatch({
            type: 'FETCH_FORMS',
            payload: data
        }))
    }
}