import React from 'react'
import speciality from '../assets/speciality.jpg'
import Subspeciality from '../components/Subspeciality'
export default function Specialities() {
  return (
    <div className="overflow-hidden">
      <div className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center overflow-hidden">
        {/* Background Image Container */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: `url(${speciality})`,
          }}
        />
        {/* Dark Tint Overlay with Blur */}
        <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-[2px]" />
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mt-16 md:mt-24">
          <h1 
            className="font-extrabold text-3xl md:text-6xl text-white tracking-tight uppercase drop-shadow-lg mb-4" 
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            OUR SPECIALITIES
          </h1>
          <p className="text-slate-200 font-medium text-base md:text-2xl max-w-2xl mx-auto drop-shadow-md">
            We Help at Every Step From Concept to Market.
          </p>
        </div>
      </div>

      <Subspeciality />
    </div>
  )
}
