import React from 'react'

const Home = () => {
  return (
    <div >
        <div className="w-full h-screen bg-cover bg-center bg-[url('src/assets/home.jpg')] absolute">
        {/* Optional Content Over the Background */}
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Welcome to Our Website
          </h1>
        </div>
      </div>
      
    </div>
  )
}

export default Home
