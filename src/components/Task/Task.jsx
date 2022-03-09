import React from 'react'
import { formatDistanceToNow } from 'date-fns'
import PropTypes from 'prop-types'
import { NewTaskForm } from '../NewTaskForm'
import Timer from '../Timer'

const Task = function Task({
  label,
  date,
  onDestroyed,
  onToggleDone,
  done,
  edit,
  onEdit,
  editForm,
  time,
}) {
  Task.defaultProps = {
    label: 'Your text',
    date: new Date(),
    onDestroyed: () => {},
    onToggleDone: () => {},
    done: false,
    edit: false,
    onEdit: () => {},
    editForm: () => {},
    time: [0, 0],
  }
  Task.propTypes = {
    label: PropTypes.string,
    date: PropTypes.instanceOf(Date),
    onDestroyed: PropTypes.func,
    onToggleDone: PropTypes.func,
    done: PropTypes.bool,
    edit: PropTypes.bool,
    onEdit: PropTypes.func,
    editForm: PropTypes.func,
    time: PropTypes.arrayOf(PropTypes.number),
  }
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
        <input // label
          className="toggle"
          type="checkbox"
          checked={done}
          onChange={onToggleDone}
        />
        {/* ======================Timer================= */}
        <label>
          <span
            className="title"
            onClick={onToggleDone}
            onKeyDown={onToggleDone}
            role="button"
            tabIndex={0}
          >
            {label}
          </span>

          <Timer time={time} />

          <span className="description">created {daysBetween} ago</span>
        </label>
        <button
          title="edit"
          type="button"
          className="icon icon-edit"
          onClick={onEdit}
          onKeyDown={onEdit}
        >
          {' '}
        </button>

        <button
          title="destroy"
          type="button"
          className="icon icon-destroy"
          onClick={onDestroyed}
        >
          {' '}
        </button>
      </div>
      {edit && <NewTaskForm editForm={editForm} label={label} />}
    </li>
  )
}
export default Task

// export default class Task extends React.Component {
//   static defaultProps = {
//     label: 'Your text',
//     date: new Date(),
//     onDestroyed: () => {},
//     onToggleDone: () => {},
//     done: false,
//     edit: false,
//     onEdit: () => {},
//     editForm: () => {},
//     time:[0,0]
//   }

//   static propTypes = {
//     label: PropTypes.string,
//     date: PropTypes.instanceOf(Date),
//     onDestroyed: PropTypes.func,
//     onToggleDone: PropTypes.func,
//     done: PropTypes.bool,
//     edit: PropTypes.bool,
//     onEdit: PropTypes.func,
//     editForm: PropTypes.func,
//     time:PropTypes.arrayOf(PropTypes.number)
//   }

//   // onChangeTimer = () =>{
//   //   this.setState((state)=>({timer: !state.timer}))
//   // }

//   render() {
//     const {
//       label,
//       date,
//       onDestroyed,
//       onToggleDone,
//       done,
//       edit,
//       onEdit,
//       editForm,
//       time
//     } = this.props

//     const daysBetween = formatDistanceToNow(date)

//     const classNames = () => {
//       if (edit) {
//         return 'editing'
//       }
//       if (done) {
//         return 'completed'
//       }
//       return ''
//     }

//     return (
//       <li className={classNames()}>
//         <div className="view">

//           <input   // label
//             className="toggle"
//             type="checkbox"
//             checked={done}
//             onChange={onToggleDone}
//           />
//                      {/* ======================Timer================= */}
//           <label>
//             <span
//             className='title'
//             onClick={onToggleDone}
//             onKeyDown={onToggleDone}
//             role="button"
//             tabIndex={0}
//             >{label}</span>

//               <Timer
//               time={time}/>

//             <span className="description">created {daysBetween} ago</span>
//           </label>
//           <button
//             title="edit"
//             type="button"
//             className="icon icon-edit"
//             onClick={onEdit}
//             onKeyDown={onEdit}
//           >
//             {' '}
//           </button>

//           <button
//             title="destroy"
//             type="button"
//             className="icon icon-destroy"
//             onClick={onDestroyed}
//           >
//             {' '}
//           </button>
//         </div>
//         {edit && <NewTaskForm editForm={editForm} label={label} />}
//       </li>
//     )
//   }
// }
