import {USERS_LIST} from '../constants'
export function userReducer(state = [], action) {
    switch (action.type) {
        case USERS_LIST:
            return action.payload
        default:
            return state;
    }
}
