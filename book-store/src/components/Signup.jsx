import React from 'react'
import { IoIosMail } from "react-icons/io";


const Signup = () => {
  return (
    <div className='w-96 m-auto translate-y-1/2 border rounded-xl p-3'>
        <h1 className='font-bold text-4xl py-6'>SignUp</h1>
        <form action="">
        <div className="relative my-6" >
            <IoIosMail className="absolute left-3 top-[17px] text-gray-500" />
            <input
              type="text"
              placeholder="Enter Your Name"
              className="pl-10 py-3 w-full rounded-lg bg-slate-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:text-white"
            />
          </div>
        <div className="relative my-6">
            <IoIosMail className="absolute left-3 top-[17px] text-gray-500" />
            <input
              type="email"
              placeholder="Email"
              className="pl-10 py-3 w-full rounded-lg bg-slate-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:text-white"
            />
          </div>
        <div className="relative my-6">
            <IoIosMail className="absolute left-3 top-[17px] text-gray-500" />
            <input
              type="password"
              placeholder="Enter Your Password"
              className="pl-10 py-3 w-full rounded-lg bg-slate-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:text-white"
            />
          </div>
          <button className='px-5 py-2 bg-sky-500 text-black rounded-lg '>Submit</button>
        </form>
    </div>
  )
}

export default Signup