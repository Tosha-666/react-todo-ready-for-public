import React from 'react'
import { formatDistanceToNow } from 'date-fns'
import PropTypes from 'prop-types'
import EditItem from '../NewTaskForm/NewTaskForm'
import Timer from '../Timer'

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

  state={
    timer:'stop',
    timeLeft:0,

  }

  onChangeTimerStatus = () =>{
    this.setState(({timer})=>{
      switch (timer) {
        case 'stop'||'pause':
          return { timer:'start'}
        case 'start':
          return { timer:'pause'}
        default: 
          return null
          
      }
    })
  }
  
  // onChangeTimer = () =>{
  //   this.setState((state)=>({timer: !state.timer}))
  // }

  onSaveTime =(time)=>{
    this.setState({timeLeft:time})
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

    const {timer,timeLeft}=this.state

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

    const timerActivateClass =()=>{ 
      switch (timer) {
        case 'start': 'timer-start'
        break
        case 'stop':  'timer-pause'
        break
        case 'pause': 'timer-pause'
        break
        
        default:
          'timer-pause'
          break;
      }
    }
   
    


      
  const  startStop =()=>{

    switch (timer) {
      case 'start':
        <Timer 
      className='timer-wrapper'
      timeLeft={timeLeft}
      />
        break;
    case 'stop':
      null
      break;
      case 'pause':
       <p>{timeLeft}</p> 
      break
      
      default:
        break;
    }
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
            <button 
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
        
             {startStop()}
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
        {edit && <EditItem editForm={editForm} label={label} />}
      </li>
    )
  }
}
