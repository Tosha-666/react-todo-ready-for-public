import React from 'react'
import { formatDistanceToNow } from 'date-fns'
import PropTypes from 'prop-types'
import {NewTaskForm} from '../NewTaskForm'
import Timer from '../Timer'


export default class Task extends React.Component {
  static defaultProps = {
    label: 'Your text',
    date: new Date(),
    onDestroyed: () => {},
    onToggleDone: () => {},
    done: false,
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
    edit: PropTypes.bool,
    onEdit: PropTypes.func,
    editForm: PropTypes.func,
  }



  
  // onChangeTimer = () =>{
  //   this.setState((state)=>({timer: !state.timer}))
  // }



  render() {
    const {
      label,
      date,
      onDestroyed,
      onToggleDone,
      done,
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

          <input   // label
            className="toggle"
            type="checkbox"
            checked={done}
            onChange={onToggleDone}
          />
                     {/* ======================Timer================= */}
          <label>
            <Timer/>
            {/* <button 
            type="button" 
            className={timerActivateClass()}
            onClick={this.onChangeTimerStatus}
             >{' '}
            </button>


            <button 
            type="button" 
            className='timer-stop'
             onClick={this.onChangeTimer}
             >{' '}
            </button>
              <span >{startStop(timerStatus)}</span> */}
             
            {/* ======================Timer================= */}

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
}
