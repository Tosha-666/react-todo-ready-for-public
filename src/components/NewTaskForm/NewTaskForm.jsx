import React, { useState } from 'react'
import PropTypes from 'prop-types'

const NewTaskForm = ({ editForm, label })=> {
  NewTaskForm.defaultProps = {
    editForm: () => {},
    label: '',
  }
  NewTaskForm.propTypes = {
    editForm: PropTypes.func,
    label: PropTypes.string,
  }

  const [newlabel, setNewLabel] = useState(label)

  const onSubmiteForm = (e) => {
    e.preventDefault()
    editForm(newlabel)
  }
  const onLabelChange = (e) => {
    setNewLabel(e.target.value)
  }

  return (
    <form onSubmit={onSubmiteForm}>
      <label>
        <input
          type="text"
          className="edit"
          value={newlabel}
          onChange={onLabelChange}
          autoFocus
        />
      </label>
    </form>
  )
}

export default NewTaskForm
