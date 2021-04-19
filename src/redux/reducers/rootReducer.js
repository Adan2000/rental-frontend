import { combineReducers } from 'redux'


//USER REDUCER
const initialUserState = {
    user: null
}
const userReducer = (state=initialUserState, action) => {
    switch(action.type) {
        case "SET_USER": {
            return {...state, user: action.payload}
        }
        default: return state 
    }
}

//CAR REDUCER
const initialCarState = {
    cars: [] 
}
const carReducer = (state=initialCarState, action) => {
    switch(action.type) {
        case "LOAD_CARS": {
            return {...state, cars: action.payload}
        }
        default: return state
    }
}

//COMBINE REDUCER
export default combineReducers({
   userReducer,
   carReducer,
  });


//takes in two arguments, current state && action(end goal to change state)
//our initial state can be imported from another file with data
//the action.payload is going to be our user data that we passed into the action. 

//what is the combineReducers for?