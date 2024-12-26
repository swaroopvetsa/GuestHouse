import React from 'react';
import '../../assets/palash.webp';

import { FaLock, FaConciergeBell, FaUtensils, FaMapSigns } from 'react-icons/fa';

const Services = () => {
  return (
    <div className='w-full h-screen pt-24'>
        <div className="w-full h-4/5 bg-cover bg-center bg-[url('src/assets/palash.webp')] relative">
            <div className='bg-white px-16 shadow-lg absolute lg:right-40 lg:top-0 lg:bottom-0 lg:w-2/5 h-full flex flex-col justify-center animate-fadeIn'>
                <p className='text-2xl font-normal font-serif mb-3'>SERVICES  _____</p>
                <h2 className='font-sans font-semibold text-black text-4xl mb-12 pr-20'>Strive Only For The Best.</h2>
                <ul className='space-y-10 font-medium text-xl'>
                    <li className='flex items-center'>
                        <FaLock className='text-gray-700 mr-4' />
                        <span>High Class Security</span>
                    </li>
                    <li className='flex items-center'>
                        <FaConciergeBell className='text-gray-700 mr-4' />
                        <span>24 Hours Room Service</span>
                    </li>
                    <li className='flex items-center'>
                        <FaUtensils className='text-gray-700 mr-4' />
                        <span>Restaurant</span>
                    </li>
                    <li className='flex items-center'>
                        <FaMapSigns className='text-gray-700 mr-4' />
                        <span>Tourist Guide Support</span>
                    </li>
                </ul>
            </div>
        </div>
        <div className=" grid grid-cols-1 px-32 py-20 md:grid-cols-2" >
            <div className='px-24 py-6 text-center font-semibold text-3xl'>100+<br/><span className='font-medium text-lg text-slate-500'> Bookings Completed</span></div>
            <div className='px-24 py-6 text-center font-semibold text-3xl'> 150+<br/><span className='font-medium text-lg text-slate-500'> Happy Customers</span></div>
        </div>
    </div>
  );
};

export default Services;
