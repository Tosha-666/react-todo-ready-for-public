import React from 'react'
import { formatDistanceToNow } from 'date-fns'
import PropTypes from 'prop-types'
import EditItem from './NewtaskForm'

export default class Task extends React.Component {
  static defaultProps = {
    label: 'Your text',
    date: new Date(),
    onDestroyed: () => {},
    onToggleDone: () => {},
    done: false,
    checked: false,
    edit: false,
    onEdit: () => {},
    editForm: () => {},
  }

  static propTypes = {
    label: PropTypes.string,
    date: PropTypes.instanceOf(Date),
    onDestroyed: PropTypes.func,
    onToggleDone: PropTypes.func,
    done: PropTypes.bool,
    checked: PropTypes.bool,
    edit: PropTypes.bool,
    onEdit: PropTypes.func,
    editForm: PropTypes.func,
  }

  render() {
    const {
      label,
      date,
      onDestroyed,
      onToggleDone,
      done,
      checked,
      edit,
      onEdit,
      editForm,
    } = this.props
    const daysBetween = formatDistanceToNow(date)

    const classNames = () => {
      if (edit) {
        return 'editing'
      }
      if (done) {
        return 'completed'
      }
      return ''
    }

    return (
      <li className={classNames()}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={checked}
            onChange={onToggleDone}
          />
          <label>
            <span
              className="description"
              onClick={onToggleDone}
              onKeyDown={onToggleDone}
              role="button"
              tabIndex={0}
            >
              {label}
            </span>
            <span className="created">created {daysBetween} ago</span>
          </label>
          <button
            type="button"
            className="icon icon-edit"
            onClick={onEdit}
            onKeyDown={onEdit}
          >
            {' '}
          </button>

          <button
            type="button"
            className="icon icon-destroy"
            onClick={onDestroyed}
          >
            {' '}
          </button>
        </div>
        {edit && <EditItem editForm={editForm} label={label} />}
      </li>
    )
  }
}
