// base
import PropTypes from 'prop-types'
import React, { useEffect } from 'react'

// redux
import { connect } from 'react-redux'
import { getUsersList } from './redux/actions/usersActions'

// styles
import './App.css'

// components
import EmployeesList from './components/EmployeesList'
import EmployeesBirthday from './components/EmployeesBirthday'

const App = ({ getUsersList }) => {
  // get users list from api on mount
  useEffect(() => getUsersList(), [])

  return (
    <div className="app">
      <div className="employeesList">
        <EmployeesList />
      </div>
      <div className="employeesBirthday">
        <EmployeesBirthday />
      </div>
    </div>
  )
}

App.propTypes = {
  getUsersList: PropTypes.func.isRequired,
  usersList: PropTypes.array.isRequired,
}

export default connect(null, { getUsersList })(App)
