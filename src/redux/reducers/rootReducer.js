import { combineReducers } from 'redux'


//USER REDUCER
const initialUserState = {
    user: {bookmarks: []}
}
const userReducer = (state=initialUserState, action) => {
    switch(action.type) {
        case "SET_USER": {
            return {...state, user: action.payload}
        }
        case 'DELETE_BOOKMARK': {
            return {...state, user:{...state.user, bookmarks: state.user.bookmarks.filter(bookmark => bookmark.id !== action.payload)}}
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

//SELECT REDUCER
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

