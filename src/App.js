// base
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import classNames from 'classnames'

// redux
import { connect } from 'react-redux'
import { getUsersList } from './redux/actions/usersActions'

// styles
import './App.css'

// components
import EmployeesList from './components/EmployeesList'
import EmployeesBirthday from './components/EmployeesBirthday'

const App = ({ getUsersList }) => {
  const [loading, setLoading] = useState(true)
  // get users list from api on mount
  useEffect(() =>
    getUsersList()
      .then(() => setLoading(false))
      .catch((error) => alert(error)), []
  )

  return (
    <div className={classNames('app', loading && 'appEmptyState')}>
      <div className="employeesList">
        <EmployeesList loading={loading} />
      </div>
      <div className="employeesBirthday">
        <EmployeesBirthday loading={loading} />
      </div>
    </div>
  )
}

App.propTypes = {
  getUsersList: PropTypes.func.isRequired,
}

export default connect(null, { getUsersList })(App)
