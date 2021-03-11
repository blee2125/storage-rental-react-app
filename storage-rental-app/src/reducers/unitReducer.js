export default function unitReducer(state = {units: [], forms: []}, action){
//console.log(action)
    switch (action.type){
        case 'FETCH_UNITS':
            //console.log('fetch units')
            return {...state, units: action.payload}

        case 'FETCH_FORMS':
            //console.log('fetch forms')
            return {...state, forms: action.payload}
            
        case 'ADD_UNIT':
            //console.log('add unit')
            return {...state, units: [...state.units, action.payload]}
            
        case 'DELETE_UNIT':
            //console.log('delete unit')
            return {...state, units: state.units.filter(unit => unit.id !== action.payload.id)}
        
        case 'RENT_UNIT':
            return {...state, forms: [...state.forms, action.payload]}

        case 'ADD_LIKE':
            console.log(action.payload)
            let likedUnitArray = state.units.map(unit=>{
                if(unit.id === action.payload.id) {
                    return action.payload
                } else {
                    return unit
                }
            })
            console.log(action.payload)
            return {...state, units: likedUnitArray}

        default:
            //console.log('default')
            return state
    }

}