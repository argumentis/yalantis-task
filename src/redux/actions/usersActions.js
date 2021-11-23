// base
import axios from 'axios'
import _ from 'lodash'

//actions
export const UPDATE_USERS_LIST = 'UPDATE_USERS_LIST'
export const UPDATE_SELECTED_LIST = 'UPDATE_SELECTED_LIST'

export const getUsersList = () => {
  return (dispatch, getState) => {
    return axios.get('https://yalantis-react-school-api.yalantis.com/api/task0/users')
      .then((res) => {
        const usersData = _.get(res, 'data', [])
        const selectedUsers = _.get(getState(), 'users.selectedUsers', [])

        // checking users on selected
        const upgradedArray = usersData.map((item) => {
          if (selectedUsers.includes(item.id)) return { ...item, selected: true }
          return { ...item, selected: false }
        })

        dispatch({ type: 'UPDATE_USERS_LIST', payload: upgradedArray })
        return res
      })
  }
}

export const updateUser = (userId, status) => {
  return (dispatch, getState) => {
    const usersData = _.get(getState(), 'users.usersList', [])
    const updatedArray = usersData.map((item) => {
      if (item.id === userId) return { ...item, selected: status }
      return item
    })
    dispatch({ type: 'UPDATE_USERS_LIST', payload: updatedArray })
    dispatch(updateSelectedList(updatedArray))
  }
}

export const updateSelectedList = (list) => {
  const updatedList = list.filter((item) => item.selected).map((item) => item.id)
  return (dispatch) => {
    dispatch({ type: 'UPDATE_SELECTED_LIST', payload: updatedList })
  }
}
