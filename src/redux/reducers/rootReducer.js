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

const initialSelect = {
    selected: "All"
}

const selectReducer = (state=initialSelect, action) => {
    switch(action.type){
        case "SELECTED_CARS": {
            return {...state, selected: action.payload}
        }
        default: return state 
    }
}

//COMBINE REDUCER
export default combineReducers({
   userReducer,
   carReducer,
   selectReducer
  });

