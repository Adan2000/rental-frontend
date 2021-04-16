const initialState = {
    user: null
}



const rootReducer = (state=initialState, action) => {
    switch(action.type) {
        case "SET_USER": {
            return {...state, user: action.payload}
        }
        default: return state 
    }
}

export default rootReducer;

//takes in two arguments, current state && action(end goal to change state)
//our initial state can be imported from another file with data


//what is the combineReducers for?