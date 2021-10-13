import axios from 'axios';
import {USERS_LIST} from '../constants'
export function getUsers() {
  let url = 'http://localhost:3000/sample.json';
  return function (dispatch) {
    return axios.get(url).then((res) => {
      dispatch({
        "type": USERS_LIST,
        "payload": res.data
      })
    }).catch(function (error) { 
      alert(error)
      console.log(error);
    })
  }
}
