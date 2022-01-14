import React from 'react'
import PropTypes from 'prop-types'
import TaskFilter from './tasks/TaskFilter'

const Footer = function footer ({
  elseToDo,
  deleteComplited,
  filter,
  getFilteredItems,
  activeButtonClass,
}) {
  Footer.propTypes = {
    elseToDo: PropTypes.number,
    deleteComplited: PropTypes.func,
    filter: PropTypes.func,
    getFilteredItems: PropTypes.func,
    activeButtonClass: PropTypes.func,
  }
  Footer.defaultProps = {
    elseToDo: 0,
    deleteComplited: () => {},
    filter: () => {},
    getFilteredItems: () => {},
    activeButtonClass: () => {},
  }
  return (
    <footer className="footer">
      <span className="todo-count">{elseToDo} items left</span>
      <TaskFilter
        filter={filter}
        getFilteredItems={getFilteredItems}
        activeButtonClass={activeButtonClass}
      />
      <button
        type="button"
        className="clear-completed"
        onClick={deleteComplited}
      >
        Clear completed
      </button>
    </footer>
  )
}

export default Footer
