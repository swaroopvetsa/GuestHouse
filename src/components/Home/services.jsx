import React from 'react';
import '../../assets/palash.webp';

import { FaLock, FaConciergeBell, FaUtensils, FaMapSigns } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const Services = () => {
  const [headingRef, headingInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [listItemRefs, setListItemRefs] = React.useState([]);
  const [itemsInView, setItemsInView] = React.useState([]);

  // Create refs for each list item
  React.useEffect(() => {
    setListItemRefs((listRefs) =>
      Array(4)
        .fill()
        .map((_, i) => listRefs[i] || React.createRef())
    );
  }, []);

  React.useEffect(() => {
    const observerOptions = { threshold: 0.2 };
    const observers = listItemRefs.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setItemsInView((prev) => [...new Set([...prev, index])]);
          }
        },
        observerOptions
      );
      if (ref.current) observer.observe(ref.current);
      return observer;
    });
    return () => observers.forEach((observer) => observer.disconnect());
  }, [listItemRefs]);

  return (
    <div className="w-full h-screen pt-20">
      <div className="w-full h-4/5 bg-cover bg-center bg-[url('src/assets/palash.webp')] relative">
        <div
          ref={headingRef}
          className={`bg-white px-16 shadow-lg absolute lg:right-40 lg:top-0 lg:bottom-0 lg:w-2/5 h-full flex flex-col justify-center ${
            headingInView ? 'animate-fadeIn opacity-100' : 'opacity-0'
          }`}
        >
          <p className="text-2xl font-normal font-serif mb-3">SERVICES _____</p>
          <h2 className="font-sans font-semibold text-black text-4xl mb-12 pr-20">
            Strive Only For The Best.
          </h2>
          <ul className="space-y-10 font-medium text-xl">
            {['High Class Security', '24 Hours Room Service', 'Restaurant', 'Tourist Guide Support'].map(
              (text, index) => (
                <li
                  ref={listItemRefs[index]}
                  key={index}
                  className={`flex items-center ${
                    itemsInView.includes(index) ? 'animate-fadeRight opacity-100' : 'opacity-0'
                  }`}
                >
                  {index === 0 && <FaLock className="text-gray-700 mr-4" />}
                  {index === 1 && <FaConciergeBell className="text-gray-700 mr-4" />}
                  {index === 2 && <FaUtensils className="text-gray-700 mr-4" />}
                  {index === 3 && <FaMapSigns className="text-gray-700 mr-4" />}
                  <span>{text}</span>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 px-32 py-20 md:grid-cols-2">
        <div className="px-24 py-6 text-center font-semibold text-3xl">
          100+<br />
          <span className="font-medium text-lg text-slate-500">Bookings Completed</span>
        </div>
        <div className="px-24 py-6 text-center font-semibold text-3xl">
          150+<br />
          <span className="font-medium text-lg text-slate-500">Happy Customers</span>
        </div>
      </div>
    </div>
  );
};

export default Services;
