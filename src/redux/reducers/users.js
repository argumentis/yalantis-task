import { UPDATE_USERS_LIST, UPDATE_SELECTED_LIST } from '../actions/usersActions'

const initialState = {
  usersList: [],
  selectedUsers: JSON.parse(localStorage.getItem('selectedUsers')) || [],
}

export function users(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USERS_LIST:
      return { ...state, usersList: action.payload }

    case UPDATE_SELECTED_LIST:
      localStorage.setItem('selectedUsers', JSON.stringify(action.payload))
      return { ...state, selectedUsers: action.payload }

    default:
      return state
  }
}
