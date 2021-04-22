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

export const selectedCars = (cars) => {
    return {
        type: "SELECTED_CARS",
        payload: cars
    }
}

export const deleteBookMark = (bookmark) => {
    return {
        type: 'DELETE_BOOKMARK',
        payload: bookmark
    }
}

