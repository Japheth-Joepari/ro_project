import { 
    CHANGE_SEARCH_FEILD,
    REQUEST_ROBOT_PENDING,
    REQUEST_ROBOT_SUCCESS,
    REQUEST_ROBOT_FAILED, 
} from "./constants"


export const setSearchFeild = (text) => ({ //This takes in text as input     
    type : CHANGE_SEARCH_FEILD, //type of the text
    payload : text //This gets the text that will be used by the reducer  
})

export const requestRobots = (dispatch) => {
    dispatch({type: REQUEST_ROBOT_PENDING})
    fetch('https://jsonplaceholder.typicdode.com/users')
        .then(response => response.json())
        .then(data => dispatch({ type:  REQUEST_ROBOT_SUCCESS, payload: data}))
        .catch(error => dispatch({ type: REQUEST_ROBOT_FAILED, payload: error}))
}