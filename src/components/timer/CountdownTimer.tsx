import React from 'react'
import { useCountDown } from '../../hooks/useCountDown.tsx'
import ShowCounter from './ShowCounter.tsx'

type CountdownTimerProps = {
  targetDate?: number
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [days, hours, minutes, seconds] = useCountDown(targetDate)
  if (
    days &&
    hours &&
    minutes &&
    seconds &&
    days + hours + minutes + seconds <= 0
  )
    return <div></div>

  return (
    <>
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    </>
  )
}

export default CountdownTimer
