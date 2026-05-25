import React, { useEffect } from 'react'
import hero2 from '../assets/hero2.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Subservice from '../components/Subservice';
import Whychoose from '../components/Whychoose'
import CarousalServices from '../components/CarousalServices';
export default function Services() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className=''>
      {/* <div className='bg-fixed w-full'
        style={{
          backgroundImage: `url(${hero2})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '500px' // Adjust height as needed
        }}>
      
      </div> */}
      <CarousalServices/>
      <Subservice />
      <Whychoose />
    </div>
  )
}
