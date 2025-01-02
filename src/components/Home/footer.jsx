// import React from 'react'

// const Footer = () => {
//   return (
//     <div>
//       <div className='bg-black w-full h-full p-24 grid grid-cols-2 md:grid-cols-4 gap-10 mt-10'>
//         <div className=' p-6 col-span-2 md:col-span-1 bg-none flex flex-col  gap-4'>
//             <p className='font-semibold text-lg text-white'>Kingsukh <br />Guest <br /> House</p>
//             <p className='text-gray-500 font-normal'>Discover a world of comfort, luxury, and adventure as you explore our curated selection of hotels, making every moment of your getaway truly extraordinary.</p>
//             <br /><button className="bg-pink-600 w-full md:w-36 font-semibold text-base text-white px-6 py-3 rounded-lg hover:bg-secondary transition-transform duration-300 hover:-translate-y-2 hover:text-black">
//             Book Now
//           </button>
//         </div>
//         <div className=' p-6 col-span-1 bg-none flex flex-col'>
//             <p className='font-semibold text-lg text-white'>QUICK LINKS</p>
//             <br />
//             <p className='text-gray-500 font-normal gap-5'>
//                 <ul className=''>
//                     <li><a href="#"> Browse Destinations</a></li><br />
//                     <li><a href="#">Special Offers & Packages</a></li><br />
//                     <li><a href="#"> Room Types & Amenities</a></li><br />
//                     <li><a href="#">Customer Reviews & Ratings</a></li><br />
//                     <li><a href="#">Travel Tips & Guides</a></li><br />
//                 </ul>
//             </p>
//         </div>
//         <div className=' p-6 col-span-1 bg-none text-white flex flex-col '>
//             <p className='font-semibold text-lg'>OUR SERVICES</p>
//             <br />
//             <p className='text-gray-500 font-normal'>
//                 <ul>
//                     <li><a href="#"> Browse Destinations</a></li><br />
//                     <li><a href="#">Special Offers & Packages</a></li><br />
//                     <li><a href="#"> Room Types & Amenities</a></li><br />
//                     <li><a href="#">Customer Reviews & Ratings</a></li><br />
//                     <li><a href="#">Travel Tips & Guides</a></li><br />
//                 </ul>
//             </p>
//         </div>
//         <div className='text-gray-500 font-normal p-6 col-span-1 bg-none flex flex-col  gap-4'>
//             <p className='font-semibold text-lg text-white'>CONTACT US</p>
//             <p>Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</p>
//             <p>kkghosh0099@gmail.com</p>
//             <p>+91 9007062180</p>
//             <div className="flex gap-5 justify-start text-2xl mt-16 p-2 text-white">
//               <a href="#" className="hover:scale-110">
//                 <i className="fab fa-facebook"></i>
//               </a>
//               <a href="#" className="hover:scale-110">
//                 <i className="fab fa-instagram"></i>
//               </a>
//               <a href="#" className="hover:scale-110">
//                 <i className="fab fa-twitter"></i>
//               </a>
//               <a href="#" className="hover:scale-110">
//                 <i className="fab fa-linkedin"></i>
//               </a>
//             </div>
//         </div>
//         <p className='text-gray-500 text-center col-span-4 mt-12 mb-[-65px] '>Copyright © 2024 Kingsukh Guest House. All rights reserved.</p>
//       </div>
//     </div>
//   )
// }

// export default Footer


import React from 'react';

const Footer = () => {
  return (
    <div className='bg-black '>
      <div className="bg-black w-full h-auto p-8 md:px-24 md:pt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Section 1: About */}
        <div className="p-4 flex flex-col gap-10">
          <p className="font-semibold text-xl text-white uppercase">
            Kingsukh <br /> Guest <br /> House
          </p>
          <p className="text-stone-600 text-pretty text-sm md:text-base leading-relaxed">
            Discover a world of comfort, luxury, and adventure as you explore our curated selection of hotels, making every moment of your getaway truly extraordinary.
          </p>
          <button className="bg-pink-600 w-full sm:w-36 font-semibold text-sm md:text-base text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition-transform duration-300 hover:-translate-y-1 hover:text-black">
            Book Now
          </button>
        </div>

        {/* Section 2: Quick Links */}
        <div className="p-4 flex flex-col">
          <p className="font-semibold text-xl text-white">QUICK LINKS</p>
          <ul className="text-gray-400 font-light text-sm md:text-lg leading-loose mt-4">
            <li>
              <a href="#" className="hover:text-white">Browse Destinations</a>
            </li>
            <li>
              <a href="#" className="hover:text-white">Special Offers & Packages</a>
            </li>
            <li>
              <a href="#" className="hover:text-white">Room Types & Amenities</a>
            </li>
            <li>
              <a href="#" className="hover:text-white">Customer Reviews & Ratings</a>
            </li>
            <li>
              <a href="#" className="hover:text-white">Travel Tips & Guides</a>
            </li>
          </ul>
        </div>

        {/* Section 3: Our Services */}
        <div className="p-4 flex flex-col">
          <p className="font-semibold text-lg text-white">OUR SERVICES</p>
          <ul className="text-gray-400 font-light text-sm md:text-base leading-loose mt-4">
            <li>
              <a href="#" className="hover:text-white">Browse Destinations</a>
            </li>
            <li>
              <a href="#" className="hover:text-white">Special Offers & Packages</a>
            </li>
            <li>
              <a href="#" className="hover:text-white">Room Types & Amenities</a>
            </li>
            <li>
              <a href="#" className="hover:text-white">Customer Reviews & Ratings</a>
            </li>
            <li>
              <a href="#" className="hover:text-white">Travel Tips & Guides</a>
            </li>
          </ul>
        </div>

        {/* Section 4: Contact Us */}
        <div className="p-4 flex flex-col gap-4">
          <p className="font-semibold text-lg text-white">CONTACT US</p>
          <p className="text-gray-400 font-light text-sm md:text-base">
            Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156
          </p>
          <p className="text-gray-400 font-light text-sm md:text-base">kkghosh0099@gmail.com</p>
          <p className="text-gray-400 font-light text-sm md:text-base">+91 9007062180</p>
          <div className="flex gap-5 justify-start text-2xl mt-4 text-white">
            <a href="#" className="hover:scale-110">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:scale-110">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:scale-110">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:scale-110">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-black text-center text-xs md:text-sm mt-6 pb-4">
        <p className=' text-lg text-gray-400'>Copyright © 2024 Kingsukh Guest House. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
