import React from 'react';

const Map = () => {
  return (
    <div className="w-full h-screen pt-32">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1828.2519037777527!2d86.859265!3d23.586258!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e3fdd3ff9ebb%3A0x517a57e3f93c1807!2sKingsukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1735235836786!5m2!1sen!2sin"
        className="w-full h-4/5 border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
