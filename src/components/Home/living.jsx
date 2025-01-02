import React from 'react';
import '../../assets/small.jpg';
import '../../assets/large.jpg';
import { useInView } from 'react-intersection-observer';

const rooms = [
  {
    id: 1,
    title: 'CONZ HEAVEN ROOM',
    description: 'Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.',
    price: 'Rs. 1000/night',
    image: 'src/assets/small.jpg',
  },
  {
    id: 2,
    title: 'LUXE SUITE',
    description: 'Experience luxury at its finest in our Luxe Suite, where elegance meets unparalleled comfort.',
    price: 'Rs. 2000/night',
    image: 'src/assets/large.jpg',
  },
];

const Living = () => {
  const [headingRef, headingInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [roomRefs, setRoomRefs] = React.useState([]);
  const [roomsInView, setRoomsInView] = React.useState([]);

  // Create refs for each room card
  React.useEffect(() => {
    setRoomRefs((refs) =>
      Array(rooms.length)
        .fill()
        .map((_, i) => refs[i] || React.createRef())
    );
  }, []);

  React.useEffect(() => {
    const observerOptions = { threshold: 0.2 };
    const observers = roomRefs.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setRoomsInView((prev) => [...new Set([...prev, index])]);
          }
        },
        observerOptions
      );
      if (ref.current) observer.observe(ref.current);
      return observer;
    });
    return () => observers.forEach((observer) => observer.disconnect());
  }, [roomRefs]);

  return (
    <div className="px-8 sm:px-16 lg:px-32 py-8">
      <div
        ref={headingRef}
        className={`transition-opacity duration-1000 ${
          headingInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <p className="font-serif font-thin text-xl sm:text-3xl lg:text-3xl mb-6">OUR LIVING ROOM _____</p>
        <h2 className="font-bold text-black text-xl sm:text-4xl lg:text-4xl mb-10">
          The Most Memorable Rest <br />
          Time Starts Here.
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        {rooms.map((room, index) => (
          <div
            key={room.id}
            ref={roomRefs[index]}
            className={`flex flex-col rounded-lg gap-5 shadow-lg transition-transform duration-700 ${
              roomsInView.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="relative rounded-md">
              <img
                src={room.image}
                alt={room.title}
                className="rounded-t-lg w-full h-70 object-cover"
              />
            </div>
            <div className="px-5">
              <h3 className="font-semibold text-lg">{room.title}</h3>
              <p className="text-gray-600 mb-5 mr-12">{room.description}</p>
              <p className="text-gray-600 mb-5 mr-12">
                Starting from <span className="text-black font-semibold">{room.price}</span>
              </p>
              <button
                type="button"
                className="bg-pink-600 text-center font-semibold p-2 rounded-lg w-1/3 mb-6"
              >
                BOOK
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Living;
