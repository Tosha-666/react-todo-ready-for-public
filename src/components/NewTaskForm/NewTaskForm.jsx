import React, { useState } from 'react'
import PropTypes from 'prop-types'

const NewTaskForm = ({ editForm, label, onEditEsc })=> {
  NewTaskForm.defaultProps = {
    editForm: () => {},
    label: '',
    onEditEsc: () => {},
  }
  NewTaskForm.propTypes = {
    editForm: PropTypes.func,
    label: PropTypes.string,
    onEditEsc: PropTypes.func,
  }

  const [newlabel, setNewLabel] = useState(label)

  const onSubmiteForm = (e) => {
    e.preventDefault()
    editForm(newlabel)
  }
  const onLabelChange = (e) => {
    setNewLabel(e.target.value)
  }

  const escFunction = (event)=>{
    if(event.keyCode === 27) {
      onEditEsc()
    }
  }

  return (
    <form onSubmit={onSubmiteForm}>
      <label>
        <input
          type="text"
          className="edit"
          value={newlabel}
          onChange={onLabelChange}
          onKeyDown={(event)=>escFunction(event)}
          autoFocus
        />
      </label>
    </form>
  )
}

export default NewTaskForm
