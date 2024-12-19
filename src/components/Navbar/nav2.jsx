import React from "react";

function nav2() {
  return (
    <div className="md:hidden mt-4 bg-pink-500">
      <ul className="flex flex-col items-center gap-2 transition-transform duration-300 ease-in-out">
        {["Home", "About", "Services", "Rooms", "Gallery", "Contact"].map(
          (item, index) => (
            <li
              key={index}
              className="uppercase cursor-pointer transition-transform duration-300 transform hover:scale-105 text-black rounded px-2"
            >
              {item}
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default nav2             