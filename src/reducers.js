import { 
    CHANGE_SEARCH_FEILD,
    REQUEST_ROBOT_PENDING,
    REQUEST_ROBOT_SUCCESS,
    REQUEST_ROBOT_FAILED, 
} from "./constants"

const initialStateSearch = {
    searchFeild : ''
}

export const searchRobots = (state = initialStateSearch , action = {} ) => {
    switch(action.type) {
        case  CHANGE_SEARCH_FEILD:
            return Object.assign({}, state, { searchFeild: action.payload })
        default:
            return state;
    }
}

const initialStateRobots = {
    isPending: false,
    robots: [],
    error: '',
}
export const requestRobots = (state=initialStateRobots, action={}) => {
    switch (action.type) {
      case REQUEST_ROBOT_PENDING:
        return Object.assign({}, state, {isPending: true})
      case REQUEST_ROBOT_SUCCESS:
        return Object.assign({}, state, {robots: action.payload, isPending: false})
      case REQUEST_ROBOT_FAILED:
        return Object.assign({}, state, {error: action.payload})
      default:
        return state
    }
  }