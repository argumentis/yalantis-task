// base
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// redux
import { connect } from 'react-redux'
import { updateUser } from '../../redux/actions/usersActions'

// components
import RadioButton from './RadioButton'

// styles
import './employeesList.css'

const ListItem = ({ employee, updateUser }) => {

  const handleChangeActive = (id) => (e) => {
    const { value } = e.target
    updateUser(id, value === 'true')
  }

  const buttons = [
    {
      id: employee.id,
      title: 'active',
      value: 'true',
      checked: employee.selected,
    },
    {
      id: employee.id,
      title: 'not active',
      value: 'false',
      checked: !employee.selected,
    },
  ]

  return (
    <div className="listItem">
      <h4 className={classNames('employeeName', employee.selected && 'checkedName')}>
        {`${employee.firstName} ${employee.lastName}`}
      </h4>
      <div
        className="buttonsContainer"
        onChange={handleChangeActive(employee.id)}
      >
        {buttons.map((item, index) => (
          <RadioButton
            key={index}
            id={item.id}
            title={item.title}
            value={item.value}
            selected={item.checked}
          />
        ))}
      </div>
    </div>
  )
}

ListItem.propTypes = {
  updateUser: PropTypes.func.isRequired,
  employee: PropTypes.object.isRequired,
}

export default connect(null, { updateUser })(ListItem)
