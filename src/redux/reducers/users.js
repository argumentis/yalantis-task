import { GET_USERS_LIST, UPDATE_USER } from '../actions/usersActions'

const initialState = {
  usersList: [],
  selectedUsers: ['5e00928d91e7feaa9872ec08', '5e00928df892b0c84c82db9d'],
}

// JSON.parse(localStorage.getItem('selectedUsers')) || []
// localStorage.setItem('selectedUsers', JSON.stringify([...state.selectedUsers, action.payload]))

export function users(state = initialState, action) {
  switch (action.type) {
    case GET_USERS_LIST:
      return { ...state, usersList: action.payload }

    case UPDATE_USER:
      return { ...state, usersList: action.payload }

    default:
      return state
  }
}
