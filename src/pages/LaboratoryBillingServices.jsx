import React from 'react'
import labo from '../assets/subservices/labo.jpg'
import herolab from '../assets/subservices/herolab.jpg'
import { useNavigate } from 'react-router-dom';
import icon1 from '../assets/New folder/icon1.PNG'
import icon2 from '../assets/New folder/icon2.PNG'
import icon3 from '../assets/New folder/icon3.PNG'
import icon4 from '../assets/New folder/icon4.PNG'
import icon5 from '../assets/New folder/icon5.PNG'


export default function LaboratoryBillingServices() {
  let navigate = useNavigate();
  const handlecontact = () => {
    navigate('/Contact')
  }

  const slides = [
    {
      title: "Established Expertise in Laboratory Billing Solutions",
      description: "With over $2 billion recovered for clinical labs, it's evident that we have the expertise to optimize the revenue cycle and streamline billing for laboratory services.",
      icon: icon1,
    },
    {
      title: "Specialized Knowledge and Experience in Laboratory Billing",
      description: "With over two plus  years of dedicated experience in laboratory billing, we have established ourselves as a leading company in the industry, demonstrating proven expertise and specialization in this field.",
      icon: icon2,
    },
    {
      title: "Innovative, Technology-Powered Solutions for Laboratory Billing",
      description: "Utilizing cutting-edge technology, we automate workflows, enhance productivity, and deliver real-time data for your clinical lab billing services.",
      icon: icon3,
    },
    {
      title: "Tailored Solutions for Your Laboratory Billing Needs",
      description: "We ensure personalized coordination with each client to achieve optimal results and develop bespoke laboratory billing services tailored to their specific needs.",
      icon: icon4,
    },
    {
      title: "Client-Centric Solutions for Laboratory Billing",
      description: "Our core principle is to ensure that all stakeholders reach their objectives. We are dedicated to leveraging our expertise to support and enhance your clinical lab billing services, from the initial setup to advanced stages of development.",
      icon: icon5,
    }
  ];
  return (
    <div className='mt-20'>
      <div className='border overflow-hidden'>
        <div className='bg-fixed relative'
          style={{

            backgroundImage: `url(${labo})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '450px', // Adjust height as needed
            opacity: 0.6,
            width: '100vw',
            // overflow:'hidden'
          }}>
          {/* <img src={hero2} className='w-full '  alt="" /> */}
          <div className="absolute backdrop-blur-2xl w-[100%] mt-6 lg:mt-36 text-wrap  ">
            <h1 className='  text-center  font-bold text-2xl md:text-6xl text-[#003680] mb-2 '>Laboratory Billing Services</h1>
            <p className='  text-center   md:font-bold text-sm md:text-2xl mt-3 mb-3 text-wrap pl-12 pr-12 text-green-700 m-auto sm:max-w-xl sm:text-xl md:max-w-full md:text-xl lg:max-w-screen-2xl lg:text-2xl  '>ThriveMed RCM provides comprehensive lab billing services, managing every step of the medical revenue cycle, from payer credentialing to aging AR recovery. Our laboratory billing solutions can be tailored to your needs, offering everything from insurance verification and patient billing to advanced coding software and full RCM packages.</p>
          </div>
        </div>
      </div>
      <div class="flex flex-col m-auto   sm:max-w-xl sm:text-xl md:max-w-full md:text-xl lg:max-w-screen-2xl lg:text-xl lg:flex-row justify-between items-center py-12 px-2   lg:px-4">

        <div className='flex flex-col lg:w-1/2'>
          <div class="text-start  mb-6">
            <h2 class="text-4xl 2xl:text-5xl font-bold leading-tight text-[#003680]">Complete and Efficient Laboratory Billing Services for Streamlined Operations.</h2>
            <p class="text-gray-600 2xl:text-3xl mt-4">Unlike many medical billing companies that focus solely on high-revenue providers, ThriveMed’s cutting-edge approach is specifically tailored for lab billing, where high volumes of low-value claims require swift processing. Our system efficiently scrubs and submits hundreds of claims within 48 hours, with a dedicated manager assigned to oversee each client, ensuring every claim is tracked and reimbursed accurately.</p>
          </div>


          <div class="flex flex-col md:flex-row gap-6   mb-8">
            {/* <button> <a href="tel:(281) 864-0448" class="bg-[#003680] md:rounded-xl w-full md:p-5 md:w-40  text-white text-center py-2  px-4  rounded hover:bg-[#1a365e] transition duration-300">
              Call Us
            </a>
            </button> */}
            <button
              onClick={handlecontact}
              class="bg-[#37b822] text-white text-center md:p-5  md:rounded-xl py-2 px-4 rounded hover:bg-[#2d7223] transition duration-300">
              Leave A Message
            </button>
          </div>
        </div>

        <div class="relative">
          <img src={herolab} alt="About Image" class="w-full h-auto  max-w-lg rounded-3xl shadow-lg" />
        </div>


      </div>

      {/* third section cards */}
      <div className="w-full m-auto mt-10 py-8 bg-white sm:max-w-xl sm:text-xl md:max-w-full md:text-xl lg:max-w-screen-2xl">
        {/* <div className="text-center mb-6 ">
        <img src={process} className='m-auto' alt="" />
        <h2 className="text-4xl font-bold uppercase" data-aos="zoom-in">Billing Process </h2>
      </div> */}
        <p  className='text-4xl 2xl:text-6xl text-center mb-10  bg-gradient-to-r from-green-400 to-blue-700 bg-clip-text text-transparent font-bold animate-fadeIn  pl-20 pr-20 lg:pl-72 lg:pr-64' data-aos-duration="1000">
          Why ThriveMed is the Best Choice for Your Laboratory Billing Services?
        </p>
        <div className="lg:p-10 p-5 lg:pl-12 lg:pr-12 flex gap-6 flex-wrap justify-center">
          {slides.map((slide, index) => (
            <div 
              key={index}
              className="group block max-w-sm p-6 w-full bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 rounded-2xl shadow-sm hover:shadow-xl hover:text-white hover:bg-gradient-to-r hover:from-teal-500 hover:to-blue-500 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div className="w-16 h-16 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-5 mx-auto border border-slate-100 dark:border-slate-700 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/10 group-hover:border-white/20">
                  <img 
                    src={slide.icon} 
                    alt={slide.title} 
                    className="w-10 h-10 object-contain group-hover:brightness-0 group-hover:invert dark:brightness-0 dark:invert transition-all duration-300" 
                  />
                </div>
                <h5 
                  className="mb-3 text-lg font-bold tracking-tight text-slate-800 dark:text-slate-200 group-hover:text-white text-center transition-colors duration-300"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  {slide.title}
                </h5>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 group-hover:text-slate-100 text-center leading-relaxed mt-2 transition-colors duration-300">
                {slide.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* last section */}
      <div className='bg-blue-950'>

<div className='bg-blue-950 p-5 sm:max-w-xl sm:text-xl md:max-w-full md:text-xl lg:max-w-screen-2xl lg:text-xl m-auto'>
  <div className='flex   flex-col  lg:flex-row justify-between align-middle lg:ml-8 lg:mr-8 sm:mr-4 sm:ml-4 lg:pl-12 lg:pr-12 pl-4 pr-4 pt-4 pb-4'>
    <div className='content flex flex-col justify-center'>
      <p className=' text-xl 2xl:text-3xl mb-4 text-center   lg:text-start capitalize text-white'>Call or Email ThriveMed RCM's Today to See How We Can Help You.</p>
    </div>
    <button
      // data-aos="zoom-in"
      onClick={handlecontact}
      type="button"
      className="text-white  w-52 h-14 mt-4 mx-auto border-4 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Contact Us
    </button>
  </div>
</div>
</div>
    </div>
  )
}
