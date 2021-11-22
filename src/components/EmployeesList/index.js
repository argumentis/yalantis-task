// base
import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

// redux
import { connect } from 'react-redux'

// components
import ListItem from './ListItem'

// styles
import './employeesList.css'

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

const EmployeesList = ({ usersList }) => {
  return (
    <div className="root">
      <h2>Employees</h2>
      <div className="lettersList">
        {alphabet.map((letter, index) => {
          // we are search users by the first letter of the name, depending on the current letter
          const employeesList = usersList.filter((item) => {
            if (!_.isString(item.firstName)) return false
            return item.firstName[0] === letter
          })

          return (
            <div key={index} className="lettersListItem">
              <h3 className="letter">{letter}</h3>
              {_.isEmpty(employeesList) ? (
                <p className="usersList">No employees</p>
              ) : (
                <div className="usersList">
                  {employeesList.map((item) => (
                    <ListItem key={item.id} employee={item} />
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

const mapStateToProps = (store) => {
  const { usersList } = store.users
  return {
    usersList,
  }
}

EmployeesList.propTypes = {
  usersList: PropTypes.array.isRequired,
}

export default connect(mapStateToProps, {})(EmployeesList)
