// import React from 'react';
// import Location from '../../assets/Location.png';
// import Call from '../../assets/call.png';
// import Mail from '../../assets/mail.png';
// import '@fortawesome/fontawesome-free/css/all.min.css';

// function Form() {
//   return (
//     <div className="relative flex flex-col md:flex-row justify-between p-8 gap-8 mb-16">
//       {/* Contact Info Section */}
//       <div className="bg-pink-600 text-white p-6 rounded-3xl flex flex-col gap-6 md:w-1/3 relative -top-4">
//         <h3 className="text-2xl font-bold">Contact Info</h3>
//         <div className="flex gap-4 items-start">
//           <img src={Location} alt="Location" className="w-6 h-6" />
//           <p>Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</p>
//         </div>
//         <div className="flex gap-4 items-center">
//           <img src={Mail} alt="Mail" className="w-6 h-6" />
//           <a href="mailto:kkghosh009@gmail.com" className="hover:underline">
//             kkghosh009@gmail.com
//           </a>
//         </div>
//         <div className="flex gap-4 items-center">
//           <img src={Call} alt="Call" className="w-6 h-6" />
//           <a href="tel:+919007062180" className="hover:underline">
//             +91 9007062180
//           </a>
//         </div>
//         <div className="flex gap-5 justify-normal text-2xl mt-16 p-2">
//           <a href="#" className="hover:scale-110">
//             <i className="fab fa-facebook"></i>
//           </a>
//           <a href="#" className="hover:scale-110">
//             <i className="fab fa-instagram"></i>
//           </a>
//           <a href="#" className="hover:scale-110">
//             <i className="fab fa-twitter"></i>
//           </a>
//           <a href="#" className="hover:scale-110">
//             <i className="fab fa-linkedin"></i>
//           </a>
//         </div>
//       </div>

//       {/* Send a Message Section */}
//       <div className="flex-1 bg-white shadow-lg rounded-lg">
//         <h3 className="text-2xl font-bold text-pink-600 mb-6">Send a Message</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <input
//             type="text"
//             placeholder="First Name"
//             className="border border-gray-300 p-3 rounded-md  focus:ring-pink-500"
//           />
//           <input
//             type="text"
//             placeholder="Last Name"
//             className="border border-gray-300 p-3 rounded-md focus:ring-pink-500"
//           />
//           <input
//             type="email"
//             placeholder="Email Address"
//             className="border border-gray-300 p-3 rounded-md focus:ring-pink-500"
//           />
//           <input
//             type="text"
//             placeholder="Mobile Number"
//             className="border border-gray-300 p-3 rounded-md focus:ring-pink-500"
//           />
//         </div>
//         <textarea
//           placeholder="Write your message here..."
//           className="border border-gray-300 p-3 rounded-md w-full mt-4 focus:ring-2 focus:ring-pink-500"
//           rows="4"
//         ></textarea>
//         <button className="bg-pink-600 text-white px-8 py-2 rounded-xl hover:bg-pink-800 mt-4">
//           Send
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Form;

import React from 'react';
import Location from '../../assets/location.png';
import Call from '../../assets/call.png';
import Mail from '../../assets/mail.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Form = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-center h-[200%] md:h-screen bg-white relative m-12">
      {/* Contact Info Section */}
      <div className="h-auto md:h-[70%] bg-pink-500 p-8 rounded-3xl w-[70%] md:w-1/4 md:absolute md:pl-8 md:left-28">
        <div className="pt-8">
          <h2 className="text-3xl font-semibold mb-6 text-white">Contact Info</h2>
          <div className="flex gap-4 items-start text-white">
            <img src={Location} alt="Location" className="w-6 h-6" />
            <p>Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</p>
          </div>
          <div className="flex gap-4 items-center text-white mt-4">
            <img src={Mail} alt="Mail" className="w-6 h-6" />
            <a href="mailto:kkghosh009@gmail.com" className="hover:underline">
              kkghosh009@gmail.com
            </a>
          </div>
          <div className="flex gap-4 items-center text-white mt-4">
            <img src={Call} alt="Call" className="w-6 h-6" />
            <a href="tel:+919007062180" className="hover:underline">
              +91 9007062180
            </a>
          </div>
          <div className="flex gap-5 justify-start text-2xl mt-16 p-2 text-white">
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

      {/* Send Message Form Section */}
      <div className="w-[90%] my-10 md:w-[70%] h-[90%] md:h-[80%] py-12 md:ml-16 ml-0 shadow-2xl rounded-2xl bg-white    overflow md:overflow-hidden flex flex-col md:flex-col">
        <div className="px-6 pl-[10%] sm:pl-[33%] pt-[3%] text-lg">
          <h2 className="text-2xl font-semibold font-serif text-pink-500 mb-6">Send a Message</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 pt-0 text-lg md:pt-0">
            <input
              type="text"
              placeholder="First Name"
              className="border border-gray-300 rounded px-4 py-2"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border border-gray-300 rounded px-4 py-2"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 rounded px-4 py-2"
            />
            <input
              type="tel"
              placeholder="Mobile Number"
              className="border border-gray-300 rounded px-4 py-2"
            />
          </div>
          <textarea
            placeholder="Write your message here..."
            className="w-full border border-gray-300 rounded text-lg px-4 py-2 mb-6 h-28"
          ></textarea>
          <button className="bg-pink-600 text-white px-8 py-3 rounded-xl hover:bg-pink-500">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
