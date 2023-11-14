import Wishes from './Wishes.tsx'
import React, { type ChangeEvent, type FormEvent, useState } from 'react'
import data from './data.ts'

const SlideWishes = () => {
  const [values, setValues] = useState({
    name: '',
    message: ''
  })

  const handleChange = (
    e: ChangeEvent<HTMLInputElement & HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setValues((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    data.push({ ...values, id: data?.length > 0 ? data?.length + 1 : 0 })
    setValues({ name: '', message: '' })
  }

  return (
    <div className="wish">
      <div className="container m-auto flex flex-col-reverse lg:grid lg:grid-cols-[1.5fr_1fr] gap-10 items-center">
        <div className="bg-[url('assets/bg-8.jpg')] bg-cover bg-center w-full">
          <div className="rounded-lg w-full">
            <div className="max-h-[350px] md:max-h-[650px] w-full">
              <Wishes data={data} />
            </div>
          </div>
        </div>
        <div className="md:p-7 md:shadow-md">
          <div className="p-5 md:px-10 md:py-12 backdrop-blur-lg bg-white/30 md:border border-[#F3ECE9] md:rounded">
            <div className="flex flex-col justify-center items-center gap-3 px-5 mb-10">
              <h2 className="text-2xl md:text-3xl uppercase text-center text-[#837a7a]">
                Gửi lời chúc
              </h2>
              <p className="md:text-lg text-zinc-500 text-center mt-2">
                Những lời chúc tốt đẹp sẽ góp phần vun đắp hạnh phúc cho gia
                đình nhỏ của Việt & Ngọc
              </p>
            </div>
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                className="rounded"
                value={values.name}
                placeholder="Tên của bạn..."
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                value={values.message}
                className="rounded"
                rows={4}
                placeholder="Lời chúc..."
                onChange={handleChange}
              />
              <button
                type="submit"
                className="rounded text-[#fff] border-2 border-solid  bg-transparent hover:bg-[#837a7ac9] hover:text-white hover:transition bg-[#837a7a] text-lg h-10 rounded-lg"
              >
                Gửi lời chúc
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SlideWishes
