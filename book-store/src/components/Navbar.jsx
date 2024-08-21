import React from 'react'
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className='flex justify-between px-6 py-4 text-gray-400'>
        <div className="logo   font-extrabold text-2xl cursor-pointer">
          <h1>Book<span className='text-sky-500'>Store</span></h1>
          </div>
        <nav className='flex gap-6'>
            <ul className='flex space-x-9 font-bold cursor-pointer '>
                <li className='hover:bg-slate-800 rounded-lg px-2 transition-colors duration-300'>Home</li>
                <li className='hover:bg-slate-800 rounded-lg px-2 transition-colors duration-300'>Books</li>
                <li className='hover:bg-slate-800 rounded-lg px-2 transition-colors duration-300'>Contact</li>
                <li className='hover:bg-slate-800 rounded-lg px-2 transition-colors duration-300'>About</li>
            </ul>
        <div className="search flex ">
              <input 
              className='border text-white border-gray-400 rounded-lg bg-transparent w-60 px-2 focus:outline-none focus:border-blue-500' type="search" placeholder='Search'/>
              <FaSearch className='relative top-2 right-6 cursor-pointer'/>
            </div>
            <button className=' px-2 bg-slate-900 text-white rounded-lg'>Login</button>
            <button className=' px-2 bg-sky-500 text-white rounded-lg'>SignUp</button>
        </nav>
    </header>
  )
}

export default Navbar
