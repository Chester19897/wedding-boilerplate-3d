import React from 'react'
import { Carousel } from 'flowbite-react'

type Props = {
  data: Array<any>
}

const Wishes = ({ data }: Props) => {
  return (
    <div className="max-h-[350px] md:max-h-[650px] h-[650px] sm:h-64 xl:h-[650px] 2xl:h-96 p-5">
      <Carousel>
        {data.map((item) => (
          <div
            className="w-[80%] flex flex-col gap-3 p-7 backdrop-blur-sm bg-white/70 rounded-lg"
            key={item.id}
          >
            <h2>{item.name}</h2>
            <p>{item.message}</p>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default Wishes
