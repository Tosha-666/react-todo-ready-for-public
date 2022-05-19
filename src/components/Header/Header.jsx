import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Header = ({ addItem }) => {
  Header.defaultProps = {
    addItem: () => {},
  }

  Header.propTypes = {
    addItem: PropTypes.func,
  }

  const [value, setValue] = useState('')
  const [minutes, setMinutes] = useState('')
  const [seconds, setSeconds] = useState('')

  const onSubmiteForm = (e) => {
    e.preventDefault()
    if (
      value.trim() !== '' &&
      !Number.isNaN(Number(minutes)) &&
      !Number.isNaN(Number(seconds))
    ) {
      addItem(value.trim(), [Number(minutes), Number(seconds)])
      setValue('')
      setMinutes('')
      setSeconds('')
    } else {
      setValue('')
      setMinutes('')
      setSeconds('')
      alert('Введите корректные значения от 0 до 59')
    }
  }

  return (
    <header className="header">
      <h1>todos</h1>
      <form
        className="new-todo-form"
        id="new-todo-form"
        onSubmit={(event) => onSubmiteForm(event)}
      >
        <input
          className="new-todo"
          type="text"
          required
          placeholder="Task"
          autoFocus
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />

        <input
          className="new-todo-form__timer"
          type="number"
          required
          placeholder="Min"
          autoFocus
          value={minutes}
          min={0}
          max={59}
          onChange={(event) => setMinutes(event.target.value)}
        />

        <input
          className="new-todo-form__timer"
          type="number"
          required
          placeholder="Sec"
          autoFocus
          value={seconds}
          min={0}
          max={59}
          onChange={(event) => setSeconds(event.target.value)}
        />

        <input type="submit" value="Submit" className="submit" />
      </form>
    </header>
  )
}

export default Header
