import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import * as yup from 'yup'

type FormData = {
  name: string
  phoneNumber: string
}

const schema = yup
  .object({
    name: yup.string().required(),
    phoneNumber: yup.string().required()
  })
  .required()

const Form = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
    setValue
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      phoneNumber: ''
    },
    resolver: yupResolver(schema)
  })

  const onSubmit = handleSubmit((data) => console.log(data))

  return (
    <div className="container px-4">
      <div className="relative md:max-w-[650px] max-w-[570px] p-5 shadow-[0_2px_16.8px_3.2px_rgba(0,0,0,.08)] bg-[#fff] rounded-[322px] my-0 mx-auto">
        <div className="form-wrapper md:py-[130px] md:px-[60px] py-[50px] px-[15px] relative border border-solid border-[#a3888c] rounded-[322px]">
          <div className="form-attending">
            <div>
              <div className="form-title mb-11 text-center">
                <h2
                  className="
                before:content-['']
                before:absolute
                before:left-[50%]
                before:bottom-[-20%]
                before:w-[70%]
                before:h-px
                before:translate-x-[-50%] before:bg-[#e7e7e7] font-medium text-[#a3888c] inline-block pb-5 relative mt-2 md:text-[30px]
                after:content-['']
                after:absolute
                after:left-[-10%]
                after:bottom-0
                after:w-[120%]
                after:h-px
                after:bg-[#e7e7e7]
                text-[22px]
                "
                >
                  Lời mời
                </h2>
              </div>
            </div>
            <form onSubmit={onSubmit}>
              <div>
                <p className="text-center">
                  Thân mời,
                  <br />
                  Thân mời quý khách tới dự bữa tiệc chung vui cùng gia đình
                  chúng tôi vào hồi
                </p>
                <p>10:00 - Thứ 7, Ngày 2/12/2023</p>
                <p>
                  Bữa cơm thân mật sẽ diễn ra vào lúc 10h00, thứ bảy, ngày
                  02/12/2023.
                  <br />
                  Tức ngày 20/10 năm Quý Mão (Âm Lịch)
                </p>
                <p>TẠI: Nhà Văn Hoá Thôn Chi Chỉ</p>
                <p>Xã Đồng Cương, huyện Yên Lạc, tỉnh Vĩnh Phúc</p>
              </div>
              <div>
                <h3>Xác nhận tham gia</h3>
              </div>
              <div className="form-input">
                <input
                  className="block w-full mb-5 border-b border-solid border-[#cde0ef] bg-transparent text-[#787878] pl-0 text-xl rounded-0 h-14"
                  placeholder="Your Name"
                  {...register('name', { required: true })}
                />
                <p>{errors.name?.message}</p>
              </div>
              <div className="form-input">
                <input
                  className="block w-full mb-5 border-b border-solid border-[#cde0ef] bg-transparent text-[#787878] pl-0 text-xl rounded-0 h-14"
                  placeholder="Your Phone Number"
                  {...register('phoneNumber', { required: true })}
                />
                <p>{errors.phoneNumber?.message}</p>
              </div>
              <div className="submit text-center">
                <button type="submit">Send An Inquiry</button>
              </div>
            </form>
          </div>
          <div className="hidden md:block md:absolute md:left-[-30%] md:bottom-[-10%] md:z-[-1]">
            <picture>
              <source srcSet="/assets/vector-2.webp" type="image/webp" />
              <img src="/assets/vector-2.webp" />
            </picture>
          </div>
          <div className="hidden md:block md:absolute md:right-[-26%] md:top-[-3%] md:z-[-1]">
            <picture>
              <source srcSet="/assets/vector-1.webp" type="image/webp" />
              <img src="/assets/vector-1.webp" />
            </picture>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form
