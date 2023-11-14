import React from 'react'

const NavMenu = () => {
  return (
    <nav className="hidden md:block sticky top-0 z-[100] backdrop-blur-lg bg-white/70 shadow">
      <section className="md:container md:mx-auto px-4">
        <section className="flex flex-wrap mx-4 px-4">
          <section className="grid grid-cols-12 w-full">
            <section className="col-span-3 flex items-center">
              <h1>
                <a className="logo flex items-center justify-center gap-1 text-5xl text-[#837a7a]">
                  Việt
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30.22 30.01"
                    width="11"
                    height="11"
                    className="ml-0.5"
                  >
                    <defs></defs>
                    <g id="a"></g>
                    <g id="b">
                      <g id="c">
                        <path
                          className="d"
                          d="M13.69,30.01c-.66-4.72-4.16-8.45-7.36-11.99S-.1,10.37,0,5.61c.02-1.06,.22-2.14,.75-3.06C2.1,.19,5.39-.55,7.93,.41c2.54,.97,4.37,3.26,5.51,5.72,1.33-2.73,3.78-4.97,6.72-5.72,2.94-.75,6.33,.15,8.27,2.48,2.38,2.86,2.2,7.2,.54,10.52s-4.52,5.87-7.33,8.3c-2.81,2.43-5.71,4.92-7.47,8.19"
                        ></path>
                      </g>
                    </g>
                  </svg>
                  Ngọc
                </a>
              </h1>
            </section>
            <section className="col-span-9">
              <ul className="flex justify-end">
                <li className="px-5">
                  <a
                    href="#section0"
                    className="block cursor-pointer text-[16px] font-[500] px-2.5 py-8 text-[#3f3f46]"
                  >
                    Home
                  </a>
                </li>
                <li className="px-5">
                  <a
                    href="#section1"
                    className="block cursor-pointer text-[16px] font-[500] px-2.5 py-8 text-[#3f3f46]"
                  >
                    Couple
                  </a>
                </li>
                <li className="px-5">
                  <a
                    href="#section2"
                    className="block cursor-pointer text-[16px] font-[500] px-2.5 py-8 text-[#3f3f46]"
                  >
                    Story
                  </a>
                </li>
                <li className="px-5">
                  <a
                    href="#section3"
                    className="block cursor-pointer text-[16px] font-[500] px-2.5 py-8 text-[#3f3f46]"
                  >
                    Khoảnh khăc
                  </a>
                </li>
                <li className="px-5">
                  <a
                    href="#section5"
                    className="block cursor-pointer text-[16px] font-[500] px-2.5 py-8 text-[#3f3f46]"
                  >
                    Gửi lời chúc
                  </a>
                </li>
              </ul>
            </section>
          </section>
        </section>
      </section>
    </nav>
  )
}

export default NavMenu
