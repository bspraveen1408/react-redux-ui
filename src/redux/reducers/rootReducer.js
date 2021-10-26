import { combineReducers } from 'redux';
import { employeeReducer } from './empReducer';
import {userReducer} from './appReducer';



export default combineReducers({
  usersList:userReducer,
  employees:employeeReducer
})   