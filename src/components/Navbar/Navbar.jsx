import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Nav from "../Navbar/nav";
import Nav2 from "../Navbar/nav2";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleResize = () => window.innerWidth >= 768 && setIsOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full h-screen bg-cover bg-center bg-[url('src/assets/home.webp')] relative">
           
    <div className="py-4 bg-none" >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="">
          <p className="text-lg font-semibold">
            Kingsukh 
            <br /><span className="text-orange-800">
              <a href="/">Guest House</a></span>
          </p>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-between">
          <Nav />
        </div>

        {/* Button Section */}
        <div className="hidden md:block">
          <a
            href="https://www.apple.com"
            className="bg-primary text-white px-4 py-2 rounded-xl hover:bg-secondary transform transition-transform duration-9600 hover:-translate-y-2 hover:text-black"
          >
            BOOK NOW
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden ">
          <button onClick={toggle} aria-label="Toggle Menu" className=" text-3xl pr-7">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <Nav2 />
      )}
    </div>
    <div className="text-center pt-40 ">
      <p className="text-xl text-slate-300">Simple - Unique - Friendly<br /><br /></p>
      <p className="text-6xl text-white ">Make Yourself At Home<br/>In Our <a href="/" className="text-red-500">Guest House</a>.</p>
    </div> 
    </div>
  );
};

export default Navbar;