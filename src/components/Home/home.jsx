import React from 'react'
import Navbar from '../Navbar/Navbar'

const Home = () => {
  return (
    <div className="home">
      <div className="w-full h-screen bg-cover bg-center  bg-[url('src/assets/home.webp')] relative" >
        <Navbar />
        {/* Middle text */}
        <div className="block text-center pt-40 sm:text-sm">
          <p className="text-xl text-slate-300 font-serif ">Simple - Unique - Friendly<br /><br /></p>
          <p className="text-6xl text-white font-semibold">Make Yourself At Home<br/>In Our <a href="/" className="text-pink-600">Guest House</a>.</p>
        </div>

        {/* Book Now Session  */}
        <div className="absolute  bottom-[-40px] left-1/2 transform -translate-x-1/2 flex justify-center items-center bg-white w-4/5 rounded-lg shadow-lg py-4">
          <a
          href="https://www.apple.com"
          className="bg-pink-600 font-semibold text-white px-6 py-3 rounded-xl hover:bg-secondary transform transition duration-300 hover:-translate-y-2 hover:text-black"
          >
            BOOK NOW
          </a>
        </div>
      </div>    
    </div>
  )
}

export default Home
