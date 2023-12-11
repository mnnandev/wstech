import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className='bg-[#2699fb] p-4'>
        <div className='max-w-[1240px]  py-[12px] mx-auto flex justify-between items-center'>
          <div className='text-3xl font-bold'>
            Ws tech
          </div>
          {
            toggle ? <AiOutlineClose className='text-white text-xl md:hidden block cursor-pointer' onClick={() => setToggle(!toggle)}/> :
             <AiOutlineMenu className='text-white text-xl md:hidden block cursor-pointer' onClick={() => setToggle(!toggle)}/>
            }
          <ul className='hidden md:flex text-white gap-10 '>
            <li>Home</li>
            <li>company</li>
            <li>resources</li>
            <li>About</li>
            <li>contact</li>
          </ul>
          {/* responsive menu */}
          <ul className={`md:hidden w-full h-screen text-white fixed bg-black left-0 top-[92px] duration-300 ${toggle ? "left-[0]" : "left-[-100%]"}`}>
            <li className='p-5'>Home</li>
            <li className='p-5'>company</li>
            <li className='p-5'>resources</li>
            <li className='p-5'>About</li>
            <li className='p-5'>contact</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header