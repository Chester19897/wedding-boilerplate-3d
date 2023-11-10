import React from 'react'

type DateTimeDisplayProps = {
  value?: number
  type?: string
  first?: boolean
}

const DateTimeDisplay = ({ value, type, first }: DateTimeDisplayProps) => {
  return (
    <div className={!first ? 'md:ml-10 ml-5' : ''}>
      <p className="text-5xl md:text-6xl pt-3.5 leading-none font-medium text-[#585858]">
        {value}
      </p>
      <small>{type}</small>
    </div>
  )
}

export default DateTimeDisplay
