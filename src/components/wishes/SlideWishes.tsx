import Wishes from './Wishes.tsx'
import { useState } from 'react'
import { data } from '../../../public/data/data.ts'

const SlideWishes = () => {
  const [values, setValues] = useState({
    name: '',
    message: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }))
  }

  const handleFormSubmit = (newData) => {
    data.push(newData)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = {
      id: data.length,
      name: e.target.name.value,
      message: e.target.message.value
    }

    handleFormSubmit(formData)
    setValues({ name: '', message: '' })
  }

  return (
    <div className="wish">
      <div className="container m-auto flex flex-col-reverse lg:grid lg:grid-cols-[1fr_1fr] gap-10 items-center">
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
              <h2 className="text-2xl md:text-3xl uppercase text-center">
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
                value={values.name}
                className="input rounded w-full"
                placeholder="Tên của bạn..."
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                value={values.message}
                rows={4}
                className="textarea rounded resize-none"
                placeholder="Viết lời chúc của bạn tại đây..."
                onChange={handleChange}
              ></textarea>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
