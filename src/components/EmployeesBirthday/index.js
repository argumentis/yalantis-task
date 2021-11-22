// base
import React from 'react'
import PropTypes from 'prop-types'

// redux
import { connect } from 'react-redux'

// components

// styles
import './employeesBirthday.css'

const months = [
  'November',
  'December',
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
]

const EmployeesBirthday = ({ selectedUsers, usersList }) => {
  console.log(selectedUsers, usersList)

  return (
    <div className="birthdayRoot">
      <h2>Employees birthday</h2>
      <div>
        {months.map((item) => (
          <div key={item} style={{ width: '100%', height: 50 }}>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (store) => {
  const { usersList, selectedUsers } = store.users
  return {
    usersList,
    selectedUsers,
  }
}

EmployeesBirthday.propTypes = {
  usersList: PropTypes.array.isRequired,
  selectedUsers: PropTypes.array.isRequired,
}

export default connect(mapStateToProps, {})(EmployeesBirthday)
