import React from 'react'
import PropTypes from 'prop-types'

export default class Timer extends React.Component {
  static defaultProps = {
    time: [],
  }

  static propTypes = {
    time: PropTypes.arrayOf(PropTypes.number),
  }

  time = this.props.time

  state = {
    timeleft: this.time,
    timer: null,
  }

  componentWillUnmount() {
    const { timer } = this.state
    clearInterval(timer)
  }

  startTimer = () => {
    clearInterval(this.state.timer)
    let min = this.state.timeleft[0]
    let seconds = this.state.timeleft[1]
    const timer = setInterval(() => {
      const { timeleft } = this.state

      if (timeleft[1] <= 59 && timeleft[1] > 0) {
        seconds = this.state.timeleft[1] - 1
        this.setState({ timeleft: [timeleft[0], seconds] })
      }
      if (timeleft[1] === 0 && timeleft[0] > 0) {
        min = timeleft[0] - 1
        seconds = 59
        this.setState({ timeleft: [min, seconds] })
      }
      if (timeleft[0] === 0 && timeleft[1] === 0) {
        clearInterval(timer)
        min = 0
        seconds = 0
        this.setState({ timeleft: [0, 0] })
      }
      return [0, 0]
    }, 1000)
    return this.setState({ timer })
  }

  stopTimer = () => {
    clearInterval(this.state.timer)
  }

  render() {
    const { timeleft } = this.state
    return (
      <span className="description timer-block">
        <button
          type="button"
          className="icon icon-play"
          onClick={() => this.startTimer()}
        >
          {' '}
        </button>

        <button
          type="button"
          className="icon icon-pause"
          onClick={() => this.stopTimer()}
        >
          {' '}
        </button>

        <span className="time">
          {`0${timeleft[0].toString()}`.slice(-2)}:
          {`0${timeleft[1].toString()}`.slice(-2)}
        </span>
      </span>
    )
  }
}

// export default Timer
