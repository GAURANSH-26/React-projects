import React from 'react';
import Tree from '../assets/heroimage2.png';
import { IoIosMail } from "react-icons/io";

const Banner = () => {
  return (
    <div className='banner-container flex'>
      <div className="banner-content text-gray-400 px-5 w-full">
        <div className="heading font-bold text-4xl my-20">
          <h1>Hello, Welcome here to learn something <span className='text-sky-500'>new everyday!!!</span></h1>
        </div>
        <div className="pg font-bold text-xl tracking-wide">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam quisquam saepe quae aperiam in! Id molestias officiis rem nemo?
            Nisi adipisci illo temporibus saepe, voluptatum molestias tempore laudantium praesentium voluptas.</p>
        </div>

        <form action="" className='my-20'>
          <div className="relative">
            <IoIosMail className="absolute left-3 top-[17px] text-gray-500" />
            <input
              type="email"
              placeholder="Email"
              className="pl-10 py-3 w-full rounded-lg bg-slate-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:text-white"
            />
          </div>
          <button className='px-5 py-2 bg-sky-500 text-black rounded-lg my-4'>Submit</button>
        </form>
      </div>
      <div className="banner-img">
        <img className='max-w-[80%]' src={Tree} alt="Tree" />
      </div>
    </div>
  );
}

export default Banner;
