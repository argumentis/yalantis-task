import { GET_USERS_LIST } from '../actions/usersActions'

const initialState = {
  usersList: [],
  selectedUsers: ['5e00928d91e7feaa9872ec08', '5e00928df892b0c84c82db9d'],
}

// JSON.parse(localStorage.getItem('selectedUsers')) || []
// localStorage.setItem('selectedUsers', JSON.stringify([...state.selectedUsers, action.payload]))

export function users(state = initialState, action) {
  switch (action.type) {
    case GET_USERS_LIST:
      // checking users on selected
      const updatedArray = action.payload.map((item) => {
        if (state.selectedUsers.includes(item.id)) return { ...item, selected: true }
        return { ...item, selected: false }
      })
      return { ...state, usersList: updatedArray }

    default:
      return state
  }
}
