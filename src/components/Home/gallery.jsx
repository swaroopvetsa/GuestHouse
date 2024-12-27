import React from 'react'
import One from '../../assets/about.jpg'
import Two from '../../assets/home.webp'
import Three from '../../assets/baranti.webp'
import Four from '../../assets/palash.webp'
import Five from '../../assets/small.jpg'
import Six from '../../assets/baranti.webp'
import Seven from '../../assets/recep.jpg'
import Eight from '../../assets/flower.jpg'
import Nine from '../../assets/room1.jpg'
import Tenth from '../../assets/mithonDam.webp'

const Gallery = () => {
  return (
    <div className='h-screen'>
      <p className='text-center mb-8 font-serif text-xl'>GALLERY ____</p>
      <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 grid-rows-4">
        <img src={One} className="col-span-1 row-span-2 h-96 w-full object-cover" />
        <img src={Two} className="h-48 w-full object-cover col-span-2 sm:order-4 md:order-2 lg:order-2" />
        <img src={Three} className="h-48 w-full object-cover sm:order-3 md:order-3 lg:order-3" />
        <img src={Four} className="h-48 w-full object-cover sm:order-2 md:order-4 lg:order-4" />
        <img src={Five} className="h-48 w-full object-cover sm:order-5 md:order-5 lg:order-5" />
        <img src={Six} className="col-span-2 h-48 w-full object-cover sm:order-7 md:order-6 lg:order-6" />
        <img src={Seven} className="h-48 w-full object-cover sm:order-6 md:order-7 lg:order-7" />
        <img src={Eight} className="h-48 w-full object-cover sm:order-8 md:order-8 lg:order-8" />
        <img src={Nine} className="col-span-2 h-48 w-full object-cover sm:order-10 md:order-9 lg:order-9" />
        <img src={Tenth} className="h-48 w-full object-cover sm:order-9 md:order-10 lg:order-10" />
      </div>
    </div>
  )
}

export default Gallery
