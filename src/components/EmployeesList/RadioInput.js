// base
import React from 'react'
import PropTypes from 'prop-types'

// styles
import './employeesList.css'

const RadioInput = ({ id, selected, title, value }) => {
  return (
    <div className="radioInput">
      <input type="radio" name={id} value={value} defaultChecked={selected} />
      <div>{title}</div>
    </div>
  )
}

RadioInput.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
}

export default RadioInput
