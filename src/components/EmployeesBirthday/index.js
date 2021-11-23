// base
import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import _ from 'lodash'

// redux
import { connect } from 'react-redux'

// components
import BirthdayList from './BirthdayList'

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

const EmployeesBirthday = ({ selectedUsers, usersList = [], loading }) => {
  // find employees info by id and add parsed fields about birthday
  const selectedList = usersList
    .filter((item) => selectedUsers.includes(item.id))
    .map((item) => (
      {
        ...item,
        birthdayMonth: moment(item.dob).format('MMMM'),
        dob: moment(item.dob).format('LL')
      }
    ))

  return (
    <div className="birthdayRoot">
      <h2>Employees birthday</h2>
      <div className="flexContainer">
        {_.isEmpty(selectedUsers) || loading ?
          <h4>Employees List is empty</h4> :
          <div>
            {months.map((item) => {
              // filtered users by month name
              const employeesInMonth = selectedList.filter((employees) => employees.birthdayMonth === item)
              return (
                <BirthdayList
                  key={item}
                  monthName={item}
                  employeesInMonth={employeesInMonth}
                />
              )
            })}
          </div>
        }
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
  loading: PropTypes.bool,
  usersList: PropTypes.array.isRequired,
  selectedUsers: PropTypes.array.isRequired,
}

export default connect(mapStateToProps, {})(EmployeesBirthday)
