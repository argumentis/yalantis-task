export const GET_USERS_LIST = 'GET_USERS_LIST'
export const UPDATE_USER = 'UPDATE_USER'

import axios from 'axios'
import _ from 'lodash'

export const getUsersList = () => {
  return (dispatch, getState) => {
    axios
      .get('https://yalantis-react-school-api.yalantis.com/api/task0/users')
      .then((res) => {
        const usersData = _.get(res, 'data', [])
        const selectedUsers = _.get(getState(), 'users.selectedUsers', [])
        // checking users on selected
        const upgradedArray = usersData.map((item) => {
          if (selectedUsers.includes(item.id)) return { ...item, selected: true }
          return { ...item, selected: false }
        })
        dispatch({ type: 'GET_USERS_LIST', payload: upgradedArray })
      })
      .catch((error) => alert(error))
  }
}

export const updateUser = (userId, params) => {
  return (dispatch, getState) => {
    const usersData = _.get(getState(), 'users.usersList', [])
    const updatedArray = usersData.map((item) => {
      if (item.id === userId) return { ...item, ...params }
      return item
    })
    dispatch({ type: 'UPDATE_USER', payload: updatedArray })
  }
}
