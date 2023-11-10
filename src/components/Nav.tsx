import React from 'react'

const NavMenu = () => {
  return (
    <nav className="relative bg-transparent">
      <section className="md:container md:mx-auto px-4">
        <section className="flex flex-wrap mx-4 px-4">
          <section className="grid grid-cols-12 w-full">
            <section className="col-span-3">Logo</section>
            <section className="col-span-9">
              <ul className="flex">
                <li className="px-5">
                  <a
                    href="/"
                    className="block cursor-pointer text-[16px] font-[500] px-2.5 py-8"
                  >
                    Home
                  </a>
                </li>
                <li className="px-5">
                  <a
                    href="/"
                    className="block cursor-pointer text-[16px] font-[500] px-2.5 py-8"
                  >
                    Couple
                  </a>
                </li>
                <li className="px-5">
                  <a
                    href="/"
                    className="block cursor-pointer text-[16px] font-[500] px-2.5 py-8"
                  >
                    Story
                  </a>
                </li>
                <li className="px-5">
                  <a
                    href="/"
                    className="block cursor-pointer text-[16px] font-[500] px-2.5 py-8"
                  >
                    Gallery
                  </a>
                </li>
                <li className="px-5">
                  <a
                    href="/"
                    className="block cursor-pointer text-[16px] font-[500] px-2.5 py-8"
                  >
                    Event
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
