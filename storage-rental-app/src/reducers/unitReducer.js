export default function unitReducer(state = {units: []}, action){

    switch (action.type){
        case 'FETCH_UNITS':
            return {units: action.payload}
        case 'ADD_UNIT':
            return {units: action.payload}
        default:
            return state
    }

}