import PropTypes from 'prop-types'
import React from 'react'
// import './employeesList.css'
// import _ from 'lodash'
import { connect } from 'react-redux'
import { getUsersList } from '../../redux/actions/usersActions'

function ListItem({ employee }) {
  const handleChangeActive = (e) => {
    const { value } = e.target
    console.log(value)
  }

  return (
    <div>
      {`${employee.firstName} ${employee.lastName}`}
      <div onChange={handleChangeActive}>
        <input type="radio" value={true} name="gender" /> active
        <input type="radio" value={false} name="gender" /> not active
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

ListItem.propTypes = {
  getUsersList: PropTypes.func.isRequired,
  employee: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, { getUsersList })(ListItem)
