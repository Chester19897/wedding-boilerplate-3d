import React from 'react'
import DateTimeDisplay from './DateTimeDisplay.tsx'

type ShowCounterProps = {
  days?: number
  hours?: number
  minutes?: number
  seconds?: number
}

const ShowCounter = ({ days, hours, minutes, seconds }: ShowCounterProps) => {
  return (
    <div className="show-counter">
      <div className="overflow-hidden flex flex-wrap mt-5 justify-center sm:justify-start">
        <DateTimeDisplay value={days} type={'Ngày'} first={true} />
        <DateTimeDisplay value={hours} type={'Giờ'} />
        <DateTimeDisplay value={minutes} type={'Phút'} />
        <DateTimeDisplay value={seconds} type={'Giây'} />
      </div>
    </div>
  )
}

export default ShowCounter
