import PropTypes from 'prop-types'
import React from 'react'
import './employeesList.css'
import _ from 'lodash'
import { connect } from 'react-redux'
import { getUsersList } from '../../redux/actions/usersActions'

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

function EmployeesList({ usersList }) {
  const handleChangeActive = (e) => {
    const { value } = e.target
    console.log(value)
  }

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
              <h3>{letter}</h3>
              {_.isEmpty(employeesList) ? (
                <p>No employees</p>
              ) : (
                employeesList.map((employee) => {
                  return (
                    <div key={employee.id}>
                      {`${employee.firstName} ${employee.lastName}`}
                      <div onChange={handleChangeActive}>
                        <input type="radio" value={true} name="gender" /> active
                        <input type="radio" value={false} name="gender" /> not active
                      </div>
                    </div>
                  )
                })
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
  getUsersList: PropTypes.func.isRequired,
  usersList: PropTypes.array.isRequired,
}

export default connect(mapStateToProps, { getUsersList })(EmployeesList)
