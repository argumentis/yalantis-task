// base
import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

// components
import ListItem from './ListItem'

// styles
import './employeesList.css'

const ListByLetter = ({ letter, employeesList }) => {
  return (
    <div className="lettersListItem">
      <h3 className="letter">{letter}</h3>
      <div className="usersList">
        {_.isEmpty(employeesList) ?
          <p className="noData">
            No employees
          </p> :
          employeesList.map((item) => <ListItem key={item.id} employee={item}/>)
        }
      </div>
    </div>
  )
}

ListByLetter.propTypes = {
  letter: PropTypes.string.isRequired,
  employeesList: PropTypes.array.isRequired,
}

export default ListByLetter
