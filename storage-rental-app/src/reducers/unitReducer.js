export default function unitReducer(state = {units: []}, action){

    switch (action.type){
        case 'FETCH_UNITS':
            return {units: action.payload}
        case 'ADD_UNIT':
            console.log(state)
            return {...state, units: [...state.units, action.payload]}
            
        case 'DELETE_UNIT':
            let unit = state.units.map(unit => {
                if(unit.id == action.payload.id){
                    return action.payload
                } else {
                    return unit
                }
            })
            return {...state, units: unit}
        default:
            return state
    }

}