// base
import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

// styles
import './employeesBirthday.css'

const BirthdayList = ({ monthName, employeesInMonth }) => {

  return (
    <div className="flexContainer">
      <h4>{monthName}</h4>
      {_.isEmpty(employeesInMonth) ?
        <p>No Employees</p> :
        <div className="flexContainer">
          {employeesInMonth.map((item) => (
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
