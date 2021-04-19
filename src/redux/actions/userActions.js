export const createUser = (user) => {
    return {
        type: "SET_USER",
        payload: user
    }
}

export const getCars = (car) => {
    return {
        type: "LOAD_CARS",
        payload: car
    }
} 

//we create a action. Start with export const (name of action) = (the data that it is going to take in) => {}
//we specify a name for the action, we say type: 'ANY_NAME_FOR_THIS_ACTION'
//we then give it the payload, the payload is what holds the actual data that is passed into the action.
//this doesnt have to be named payload. 
//we set that payload to the data name, (in our case user).
//ALl that is needed for an action. type and payload(data).
