import React, { useState } from 'react'
import logo from '../../assests/logo/logo.png'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom'
const Navbar = () => {
  let [show, setShow] = useState(false)

  const showhandler = () => {
    setShow(true)
  }
  const hidehandler = () => {
    setShow(false)
  }
  return (
    <div className="bg-[#f2940c] fixed top-0 z-[999] w-full">
      <div className="max-w-[1100px] p-2  mx-auto">
        <div className="flex justify-between align-middle">
          <Link to={'/'}>
            <div>
              <img src={logo} width="200px" alt="logo" />
            </div>
          </Link>
          <div className="my-auto flex gap-5 align-middle justify-between sm:hidden md:hidden">
            <div>
              <a className="text-white px-3 text-xl uppercase cursor-pointer hover:text-[#108896] nav_link">
                Blogs
              </a>
            </div>
            <div>
              <a className="text-white  px-3 text-xl uppercase cursor-pointer hover:text-[#108896]">
                Cart
              </a>
            </div>
            <div>
              <a className="text-white px-3 text-xl uppercase cursor-pointer  hover:text-[#108896]">
                gallery
              </a>
            </div>
            <div>
              <a className="text-white px-3 text-xl uppercase cursor-pointer  hover:text-[#108896]">
                About{' '}
              </a>
            </div>
            <div>
              <a className="text-white px-3 text-xl uppercase cursor-pointer  hover:text-[#108896]   ">
                Contact{' '}
              </a>
            </div>
          </div>
          <div className="hidden sm:block md:block my-auto">
            {show ? (
              <AiOutlineClose
                className="text-3xl cursor-pointer"
                color="#ffffff"
                onClick={hidehandler}
              />
            ) : (
              <AiOutlineMenu
                className="text-3xl cursor-pointer "
                color="#ffffff"
                onClick={showhandler}
              />
            )}
          </div>
        </div>
        {show ? (
          <div className="block">
            <div>
              <a className="text-white px-3 text-xl uppercase cursor-pointer hover:text-[#108896]">
                Blogs
              </a>
            </div>
            <div>
              <a className="text-white  px-3 text-xl uppercase cursor-pointer hover:text-[#108896]">
                Cart
              </a>
            </div>
            <div>
              <a className="text-white px-3 text-xl uppercase cursor-pointer  hover:text-[#108896]">
                gallery
              </a>
            </div>
            <div>
              <a className="text-white px-3 text-xl uppercase cursor-pointer  hover:text-[#108896]">
                About{' '}
              </a>
            </div>
            <div>
              <a className="text-white px-3 text-xl uppercase cursor-pointer  hover:text-[#108896]   ">
                Contact{' '}
              </a>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  )
}

export default Navbar
