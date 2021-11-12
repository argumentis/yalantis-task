import './App.css'
import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getUsersList } from './redux/actions/usersActions'
import EmployeesList from './components/EmployeesList'

function App({ getUsersList, usersList }) {
  // get users list from api on mount
  useEffect(() => getUsersList(), [])
  console.log(usersList)
  return (
    <div className="app">
      <div className="employeesList">
        <EmployeesList />
      </div>
      <div className="employeesBirthday">list</div>
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
