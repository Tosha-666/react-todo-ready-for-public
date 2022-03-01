import React from 'react'


export default class Timer extends React.Component{

    state={
      timerStatus:'stop',
      hours:0,
      min:0,
      sec:0,
      timer:null
      }
    
      // timer=setTimeout(()=>this.add(), 1000)

      componentWillUnmount() {
        clearInterval(this.state.timer);
      }

       tick=()=>{
        this.setState(({sec})=>({
            sec:sec+1
          }))
          if (this.state.sec >= 60) {
            this.setState(({min})=>({
            sec:0,
            min:min+1
          }))
              if (this.state.min >= 60) {
                this.setState(({hours})=>({
                  min:0,
                  hours:hours+1
                }))

              }
          }
      }

      onButtonStop=()=>{
        clearInterval(this.state.timer);
        this.setState({
          timerStatus:'stop',
          hours:0,
          min:0,
          sec:0,
          timer:null}
        )
      }
       
      timerState=()=>{
        this.setState((state)=>{
          if (state.timerStatus==='stop'){
            return {timerStatus:'pause'}
          }
          if (state.timerStatus==='start')
            {
              return {timerStatus:'pause'}
          }
          if (state.timerStatus==='pause')
          {
            return {timerStatus:'start'}
          }
           return {timerStatus:'start'}
          },()=>this.timerStartCondition())
      }

      timerStartCondition =()=>{
        if (this.state.timerStatus==='pause'){
          const timer = setInterval(this.tick, 1000)
          this.setState({timer})
        } if (this.state.timerStatus==='start'){
          clearInterval(this.state.timer)
        }
      }
      

    render(){
        const{hours,min,sec,timerStatus}=this.state
        const timerActivateClass =()=>{ 
          switch (timerStatus) {
            case 'start': 
              return 'timer-start'
            case 'stop':  
              return 'timer-start'
            case 'pause':
              return 'timer-pause'
             default:
              return 'timer-pause'
                 }
        }
                
           return(
          <div className='timer'>
          <button 
          type="button" 
          className={timerActivateClass()}
          onClick={this.timerState}
           >{' '}
          </button>

          <button 
          type="button" 
          className='timer-stop'
          onClick={this.onButtonStop}
           >{' '}
          </button>

        <p className='timer'>{hours}:{min}:{sec}</p>
        </div>
        )
    }
}