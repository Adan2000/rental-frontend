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
//the action.payload is going to be our user data that we passed into the action. 

//what is the combineReducers for?