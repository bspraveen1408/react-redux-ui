import {GET_EMPLOYEES, REGISTER_EMPLOYEE} from '../constants'
export function employeeReducer(state = [], action) {
    switch (action.type) {
        case REGISTER_EMPLOYEE:
            let list = Object.assign([],state);
            list.push(action.payload)
            return list
            case  GET_EMPLOYEES:
                return action.payload
        default:
            return state;
    }
}
