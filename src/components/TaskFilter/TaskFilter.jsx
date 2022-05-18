import React from 'react'
import PropTypes from 'prop-types'

const TaskFilter = ({ filter, activeButtonClass }) => {
  TaskFilter.propTypes = {
    filter: PropTypes.func,
    activeButtonClass: PropTypes.func,
  }
  TaskFilter.defaultProps = {
    filter: () => {},
    activeButtonClass: () => {},
  }
  return (
    <ul className="filters">
      <li>
        <button
          type="button"
          onClick={() => filter('all')}
          className={activeButtonClass('all')}
        >
          All
        </button>
      </li>
      <li>
        <button
          type="button"
          onClick={() => filter('active')}
          className={activeButtonClass('active')}
        >
          Active
        </button>
      </li>
      <li>
        <button
          type="button"
          onClick={() => filter('complited')}
          className={activeButtonClass('complited')}
        >
          Completed
        </button>
      </li>
    </ul>
  )
}

export default TaskFilter
