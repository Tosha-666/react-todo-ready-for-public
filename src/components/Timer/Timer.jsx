import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const Timer =({ time })=>{
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

    </span>
  )
}

export default Timer

