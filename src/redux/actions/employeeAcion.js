import axios from 'axios';
import {REGISTER_EMPLOYEE,GET_EMPLOYEES } from '../constants';
export function registerEmployeeActions(details) {
    return function (dispatch) {
      dispatch({
        "type": REGISTER_EMPLOYEE,
        "payload":details
      })
    }
  }
  export function getEmployees() {
    let url = 'http://localhost:3000/data/employees.json';
    return function (dispatch) {
      return axios.get(url).then((res) => {
        dispatch({
          "type": GET_EMPLOYEES,
          "payload": res.data
        })
      }).catch(function (error) { 
        alert(error)
        console.log(error);
      })
    }
  }