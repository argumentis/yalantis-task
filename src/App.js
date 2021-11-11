import './App.css'
import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getUsersList } from './redux/actions/usersActions'

function App({ getUsersList, usersList }) {
  // get users list from api on mount
  useEffect(() => getUsersList(), [])

  return (
    <div className="App">
      {usersList.map((item) => (
        <div key={item.id}>
          {item.firstName} {item.lastName}
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = (store) => {
  const { usersList } = store.users
  return {
    usersList,
  }
}

App.propTypes = {
  getUsersList: PropTypes.func.isRequired,
  usersList: PropTypes.array.isRequired,
}

export default connect(mapStateToProps, { getUsersList })(App)
