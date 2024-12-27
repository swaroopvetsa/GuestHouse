import React from 'react';
import '../../assets/about.jpg';

const About = () => {
  return (
    <div className="about mt-10 p-4 md:p-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        {/* Image Section */}
        <div className="w-full flex justify-center md:justify-end ">
          <img 
            src="src/assets/about.jpg" 
            alt="About us" 
            className="rounded-xl w-60 max-h-[85vh]  md:w-4/5 object-fill" 
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col gap-6 md:pr-24">
          <p className="font-bold text-lg md:text-lg">ABOUT US _____</p>
          <p className="font-bold text-3xl md:text-4xl md:pr-7 leading-snug">
            The Best Holidays Start Here!
          </p>
          <p className="text-gray-500  text-base md:font-normal leading-relaxed">
            Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat Dam. Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant garden oasis. Your ideal retreat beckons, promising a harmonious blend of nature's beauty and heartfelt hospitality. Explore the hidden gems of Purulia, creating memories that linger long after your stay.
          </p>
          <p>
            <a href="https://youtube.com/" className="text-blue-900 font-semibold text-md md:text-lg block">
              Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156
            </a>
            <a href="https://chatgpt.com/" className="text-blue-600 font-semibold text-sm md:text-lg">
              Contact us: +91 9007062180
            </a>
          </p>
          <button className="bg-pink-600 w-full md:w-36 font-semibold text-base text-white px-6 py-3 rounded-lg hover:bg-secondary transition-transform duration-300 hover:-translate-y-2 hover:text-black">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
