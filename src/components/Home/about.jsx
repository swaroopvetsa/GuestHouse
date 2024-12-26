import React from 'react'
import '../../assets/about.jpg'

const About = () => {
  return (
  <div className="about mt-10 p-32">
    <div className='flex justify-between items-center gap-5 px-10 md:flex flex-row'>
      <div className='hidden w-1/2 sm:flex'>
        <img src="src\assets\about.jpg" alt="About us image" className=' rounded-lg max-h-[80vh] ' />
      </div>
      <div className='w-1/2 flex flex-col justify-items-start gap-4' >
        <p className='font-bold text-1xl'>ABOUT US _____</p>
        <h2 className='font-bold text-4xl'>The Best Holidays Start
           Here!</h2>
        <p className='text-gray-600 font-light text-lg'>Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat Dam. Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant garden oasis. Your ideal retreat beckons, promising a harmonious blend of nature's beauty and heartfelt hospitality. Explore the hidden gems of Purulia, creating memories that linger long after your stay.</p>
        <p ><a href="https://youtube.com/"className='text-blue-700 text-xl'>Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</a><br /><a href="https://chatgpt.com/" className='text-blue-600 text-lg'>Contact us: +91 9007062180</a></p>
        {/* <div className="absolute  bottom-[-40px] left-1/2 transform -translate-x-1/2 flex justify-center items-center bg-white w-4/5 rounded-lg shadow-lg py-4"></div> */}
        
        <button className="bg-pink-600 w-36 font-semibold text-base text-white px-6 py-3 rounded-xl hover:bg-secondary transform transition duration-300 hover:-translate-y-2 hover:text-black">BookNow</button>
      </div>
    </div>
  </div>
  )
}

export default About
