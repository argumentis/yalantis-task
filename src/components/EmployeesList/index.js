// base
import React from 'react'
import PropTypes from 'prop-types'
import Loader from 'react-loader-spinner'

// redux
import { connect } from 'react-redux'

// components
import ListByLetter from './ListByLetter'

// styles
import './employeesList.css'

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

const EmployeesList = ({ usersList, loading }) => {
  return (
    <div className="employeesListRoot">
      <h2>Employees</h2>
      {loading ?
        <div className="spinnerContainer">
          <Loader
            type="TailSpin"
            color="#00BFFF"
            height={80}
            width={80}
          />
        </div> :
        <div className="lettersList">
          {alphabet.map((letter, index) => {
            // search users by the first letter of the name, depending on the current letter
            const employeesList = usersList.filter((item) => item.firstName[0] === letter)
            return (
              <ListByLetter
                key={index}
                letter={letter}
                employeesList={employeesList}
              />
            )
          })}
        </div>
      }
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
  loading: PropTypes.bool,
  usersList: PropTypes.array.isRequired,
}

export default connect(mapStateToProps, {})(EmployeesList)
