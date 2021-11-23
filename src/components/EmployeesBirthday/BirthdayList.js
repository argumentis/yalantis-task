// base
import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

// styles
import './employeesBirthday.css'

const BirthdayList = ({ monthName, employeesInMonth }) => {

  const byField = (field) => {
    return (a, b) => a[field] > b[field] ? 1 : -1
  }

  return (
    <div className="flexContainer">
      <h4>{monthName}</h4>
      {_.isEmpty(employeesInMonth) ?
        <p>No Employees</p> :
        <div className="flexContainer">
          {employeesInMonth.sort(byField('lastName')).map((item) => (
            <p key={item.id}>
              {`${item.lastName} ${item.firstName} - ${item.dob}`}
            </p>
          ))}
        </div>
      }
    </div>
  )
}

BirthdayList.propTypes = {
  monthName: PropTypes.string.isRequired,
  employeesInMonth: PropTypes.array.isRequired,
}

export default BirthdayList
