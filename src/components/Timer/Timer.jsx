import React from 'react'


export default class Timer extends React.Component{

    state={
        counter:0,
    
      }
    
    // // onChangeTimer=()=>{
    // //   this.state.timer?this.startTimer():this.stopTimer()
    // // }
    
    // stopTimer =()=>{
    
    // clearInterval(this.startTimer)
    
  
    componentDidMount() {
        this.timerID()
      }

  

      componentWillUnmount() {
        clearInterval(this.timerID);
      }

      timerID = ()=>setInterval(
          () =>  this.setState((state)=>({
            counter: state.counter+1
          })),
          1000
        );

    //   tick() {
       
    //   }

    render(){
        const{counter}=this.state
        return(
        <p>{counter}</p>
        )
    }
}