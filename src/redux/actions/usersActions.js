export const GET_USERS_LIST = 'GET_USERS_LIST'

import axios from 'axios'
import _ from 'lodash'

export const getUsersList = () => {
  return (dispatch) => {
    axios
      .get('https://yalantis-react-school-api.yalantis.com/api/task0/users')
      .then((res) => {
        dispatch({ type: 'GET_USERS_LIST', payload: _.get(res, 'data', []) })
      })
      .catch((error) => alert(error))
  }
}
