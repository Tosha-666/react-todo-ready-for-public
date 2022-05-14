import React from 'react'
import PropTypes from 'prop-types'

export default class Header extends React.Component  {
  static defaultProps = {
      addItem: () => { },
  }

  static propTypes = {
     addItem: PropTypes.func
 }

 addItem = this.props.addItem

 state={
   value:'',
   minutes:'',
   seconds:'',
 }


  onSubmiteForm = (e) => {
    e.preventDefault()
    if (this.state.value.trim() !== ''
      &&!Number.isNaN(Number(this.state.minutes))
      &&!Number.isNaN(Number(this.state.seconds))
      &&this.state.minutes<59
      &&this.state.minutes>0
      &&this.state.seconds<59
      &&this.state.seconds>0) {
      this.addItem(this.state.value.trim(), [Number(this.state.minutes), Number(this.state.seconds)])
      this.setState({
        value:'',
        minutes:'',
        seconds:'',
      })

    } else{ 
      this.setState({
        value:'',
        minutes:'',
        seconds:'',
      })
    alert('Введите корректные значения от 0 до 59')}
   
  }


  render() {
    const {value, minutes, seconds}=this.state

  return<header className="header">
      <h1>todos</h1>
      <form
        className="new-todo-form"
        id="new-todo-form"
        onSubmit={(event) => this.onSubmiteForm(event)}
      >
        <input
          className="new-todo"
          type="text"
          required
          placeholder="Task"
          autoFocus
          value={value}
          onChange={(event) => this.setState({value:event.target.value})}
        />

        <input
          className="new-todo-form__timer"
          type="text"
          required
          placeholder="Min"
          autoFocus
          value={minutes}
          min={0}
          max={59}
          onChange={(event) => this.setState({minutes:event.target.value})}
        />

        <input
          className="new-todo-form__timer"
          type="text"
          required
          placeholder="Sec"
          autoFocus
          value={seconds}
          min={0}
          max={59}
          onChange={(event) => this.setState({seconds:event.target.value})}
        />

        <input type="submit" value="Submit" className="submit" />
      </form>
    </header>
  }
    
}


