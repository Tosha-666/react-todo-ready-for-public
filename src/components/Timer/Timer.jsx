import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const Timer = function Timer({ time }) {
  Timer.defaultProps = {
    time: [],
  }
  Timer.propTypes = {
    time: PropTypes.arrayOf(PropTypes.number),
  }
  const [timerStatus, setTimerStatus] = useState(false)
  const [timeleft, setTimeLeft] = useState(time)

  useEffect(() => {
    let timer = null
    if (timerStatus) {
      timer = setInterval(() => {
        setTimeLeft((prevtime) => {
          if (prevtime[1] <= 59 && prevtime[1] > 0) {
            const seconds = prevtime[1] - 1
            return [prevtime[0], seconds]
          }
          if (prevtime[1] === 0 && prevtime[0] > 0) {
            const min = prevtime[0] - 1
            const seconds = 59
            return [min, seconds]
          }
          if (prevtime[0] === 0 && prevtime[1] === 0) {
            clearInterval(timer)
            return [0, 0]
          }
          return [prevtime[0], prevtime[1]]
        })
      }, 1000)
    } else {
      clearInterval(timer)
    }

    return () => clearInterval(timer)
  }, [timerStatus])

  return (
    <span className="description">
      <button
        type="button"
        className="icon icon-play"
        onClick={() => setTimerStatus(true)}
      >
        {' '}
      </button>

      <button
        type="button"
        className="icon icon-pause"
        onClick={() => setTimerStatus(false)}
      >
        {' '}
      </button>
      <span className="time">
        {`0${timeleft[0].toString()}`.slice(-2)}:
        {`0${timeleft[1].toString()}`.slice(-2)}
      </span>
      {/* 
          {!timerStatus&&(<button 
          type="button" 
          className='timer-start'
          onClick={()=>setTimerStatus(true)}
           >{' '}
          </button>)}
         {timerStatus&&(<button 
        type="button" 
        className='timer-pause'
        onClick={()=>setTimerStatus(false)}
          >{' '}
        </button>)}
        <button 
          type="button" 
          className='timer-stop'
          onClick={()=>setTime(0)}
           >{' '}
          </button>

        <p className='timer'>
          <span>{time}</span>
        </p> */}
    </span>
  )
}

export default Timer

// export default class Timer extends React.Component{

//     state={
//       timerStatus:'stop',
//       hours:0,
//       min:0,
//       sec:0,
//       timer:null
//       }

//       // timer=setTimeout(()=>this.add(), 1000)

//       componentWillUnmount() {
//         clearInterval(this.state.timer);
//       }

//        tick=()=>{
//         this.setState(({sec})=>({
//             sec:sec+1
//           }))
//           if (this.state.sec >= 60) {
//             this.setState(({min})=>({
//             sec:0,
//             min:min+1
//           }))
//               if (this.state.min >= 60) {
//                 this.setState(({hours})=>({
//                   min:0,
//                   hours:hours+1
//                 }))

//               }
//           }
//       }

//       onButtonStop=()=>{
//         clearInterval(this.state.timer);
//         this.setState({
//           timerStatus:'stop',
//           hours:0,
//           min:0,
//           sec:0,
//           timer:null}
//         )
//       }

//       timerState=()=>{
//         this.setState((state)=>{
//           if (state.timerStatus==='stop'){
//             return {timerStatus:'pause'}
//           }
//           if (state.timerStatus==='start')
//             {
//               return {timerStatus:'pause'}
//           }
//           if (state.timerStatus==='pause')
//           {
//             return {timerStatus:'start'}
//           }
//            return {timerStatus:'start'}
//           },()=>this.timerStartCondition())
//       }

//       timerStartCondition =()=>{
//         if (this.state.timerStatus==='pause'){
//           const timer = setInterval(this.tick, 1000)
//           this.setState({timer})
//         } if (this.state.timerStatus==='start'){
//           clearInterval(this.state.timer)
//         }
//       }

//     render(){
//         const{hours,min,sec,timerStatus}=this.state
//         const timerActivateClass =()=>{
//           switch (timerStatus) {
//             case 'start':
//               return 'timer-start'
//             case 'stop':
//               return 'timer-start'
//             case 'pause':
//               return 'timer-pause'
//              default:
//               return 'timer-pause'
//                  }
//         }

//            return(
//           <div className='timer'>
//           <button
//           type="button"
//           className={timerActivateClass()}
//           onClick={this.timerState}
//            >{' '}
//           </button>

//           <button
//           type="button"
//           className='timer-stop'
//           onClick={this.onButtonStop}
//            >{' '}
//           </button>

//         <p className='timer'>{hours}:{min}:{sec}</p>
//         </div>
//         )
//     }
// }
