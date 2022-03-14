import React from 'react'
import PropTypes from 'prop-types'
import { Task } from '../Task'

const Tasklist =({
  toDoItem,
  onDestroyed,
  onToggleDone,
  onEdit,
  editForm,
})=> {
  Tasklist.defaultProps = {
    toDoItem: [],
    onDestroyed: () => {},
    onEdit: () => {},
    onToggleDone: () => {},
    editForm: () => {},
  }

  Tasklist.propTypes = {
    toDoItem: PropTypes.arrayOf(PropTypes.shape),
    onDestroyed: PropTypes.func,
    onEdit: PropTypes.func,
    onToggleDone: PropTypes.func,
    editForm: PropTypes.func,
  }

  return (
    <ul className="todo-list">
      {toDoItem.map((listEl) => (
        <Task
          date={listEl.date}
          label={listEl.label}
          done={listEl.done}
          time={listEl.time}
          edit={listEl.edit}
          key={listEl.id}
          onDestroyed={() => onDestroyed(listEl.id)}
          onToggleDone={() => onToggleDone(listEl.id)}
          onEdit={() => onEdit(listEl.id)}
          editForm={editForm}
        />
      ))}
    </ul>
  )
}

export default Tasklist
