import React from 'react'
import { Carousel } from 'flowbite-react'

type Props = {
  data: Array<any>
}

const Wishes = ({ data }: Props) => {
  return (
    <div className="max-h-[350px] md:max-h-[650px] h-[650px] sm:h-64 xl:h-[650px] 2xl:h-96 p-5">
      <Carousel
        slideInterval={3000}
        leftControl={<div></div>}
        rightControl={<div></div>}
      >
        {data.map((item) => (
          <div
            className="w-full flex flex-col gap-3 p-7 backdrop-blur-sm bg-white/70 rounded-lg"
            key={item.id}
          >
            <div className="flex gap-4 items-center">
              <div className="avatar placeholder">
                <div className="bg-[#000] text-neutral-content rounded-full w-8">
                  <span className="text-xs">♥</span>
                </div>
              </div>
              <div className="text-3xl text-[#3f3f46]">{item.name}</div>
            </div>
            <div className="text-[18px] font-thin text-[#3f3f46]">
              {item.message}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default Wishes
