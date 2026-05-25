import React from 'react'
import imagebilling from '../assets/subservices/ImageBilling.webp'
import maximus from '../assets/subservices/maximus.webp'
import serve from '../assets/subservices/serve.jpg'
import denial from '../assets/subservices/denial.png'
import tickk from '../assets/subservices/tickk.png'
import fdoc from '../assets/subservices/fdoc.jpg'
import modern from '../assets/subservices/modern.jpg'
export default function ImagingCenterBilling() {
  return (
    <div className='mt-20'>
    <div className='border overflow-hidden'>
   <div className='bg-fixed relative'
     style={{

       backgroundImage: `url(${imagebilling})`,
       backgroundSize: 'cover',
       backgroundRepeat: 'no-repeat',
       height: '450px', // Adjust height as needed
       opacity: 0.6,
       width:'100vw',
       // overflow:'hidden'
     }}>
     {/* <img src={hero2} className='w-full '  alt="" /> */}
     <div className="absolute backdrop-blur-2xl w-[100%] mt-4 lg:mt-36 text-wrap ">
       <h1 className='  text-center  font-bold text-2xl md:text-6xl text-[#003680] mb-2 '>Imaging Center Billing Services</h1>
       <p className='  text-center   md:font-bold text-sm md:text-2xl mt-3 mb-3 text-wrap pl-12 pr-12 text-green-700 m-auto sm:max-w-xl sm:text-xl md:max-w-full md:text-xl lg:max-w-screen-2xl lg:text-2xl  '>ThriveMed RCM offers an extensive suite of services tailored to the specific needs of your imaging center. From revenue cycle management (RCM) and accounts receivable recovery to EHR/EMR solutions, practice management, and patient engagement, you can rely on a single radiology billing partner to streamline your operations and enhance your financial performance.</p>
     </div>
   </div>
 </div>

{/*  */}
<div className="flex mt-6  m-auto sm:max-w-xl sm:text-xl md:max-w-full md:text-xl lg:max-w-screen-2xl lg:text-2xl  flex-col items-center gap-10 pl-10 pr-10  pb-16">
        
        {/* maximus image block */}
        <div class="flex flex-col  sm:max-w-xl sm:text-xl md:max-w-full md:text-xl lg:max-w-screen-2xl lg:text-xl lg:flex-row-reverse justify-between items-center py-12    lg:px-4">

          <div className='flex flex-col lg:w-1/2'>
            <div class="text-start  mb-6">
              <h2 class="text-4xl font-bold leading-tight bg-gradient-to-r from-green-400 to-blue-700 bg-clip-text text-transparent">Advanced Radiology Billing Solutions for Optimal Revenue Recovery.</h2>
              <p class="text-gray-600 mt-4 ">Our specialized radiology billing services ensure accurate coding and efficient claim management, allowing your practice to focus on delivering exceptional patient care while maximizing revenue.</p>
            </div>


            {/* <div class="flex flex-col md:flex-row    mb-8">
              <button class="bg-gradient-to-r from-green-400 to-blue-700 text-white text-center md:rounded-xl py-2 px-4 rounded hover:bg-[#2d7223] transition duration-300">
                Schedule a Demo
              </button>
            </div> */}
          </div>

          <div class="relative">
            <img src={fdoc} alt="About Image" class="w-full h-auto max-w-lg rounded-3xl" />
          </div>


        </div>
        <p className=" sm:max-w-xl sm:text-2xl  md:max-w-full md:text-xl lg:max-w-screen-2xl lg:text-4xl text-center  bg-gradient-to-r from-green-400 to-blue-700 bg-clip-text text-transparent font-bold animate-fadeIn  pl-10 pr-10   ">
        We handle the complexities of billing and collections, so you can concentrate on what matters most caring for your patients.
        </p>
        <p className='  text-center text-sm md:text-2xl  mb-3 text-wrap pl-12 pr-12 text-gray-500  '>At ThriveMed RCM, we take the burden of navigating the intricate billing landscape off your shoulders, ensuring that your practice remains compliant and financially sound, so you can keep your focus where it belongs on your patients. Our specialized radiology billing experts ensure every claim is accurately coded and promptly processed, leading to faster reimbursements and fewer denials.</p>
        

        {/* denial management */}
        <div class="flex flex-col sm:max-w-xl sm:text-xl md:max-w-full md:text-xl lg:max-w-screen-2xl lg:text-xl lg:flex-row justify-between items-center py-12    lg:px-4">

          <div className='flex flex-col lg:w-1/2'>
            <div class="text-start  mb-6">
              <h2 class="text-4xl font-bold leading-tight bg-gradient-to-r from-green-400 to-blue-700 bg-clip-text text-transparent">Navigating Challenges of Advanced Coding</h2>
              <p class="text-gray-600 mt-4">Radiology billing is complex due to evolving technologies and treatments, leading to potential claim denials from incorrect coding. ThriveMed's expertise ensures accurate billing for both technical and professional services, maximizing your reimbursements. Handling the nuances of free-standing and mobile imaging centers, we streamline your RCM process for optimal efficiency.</p>
            </div>

            <div class="flex flex-col md:flex-row    mb-8">
              <button class="bg-gradient-to-r from-green-400 to-blue-700 text-white text-center md:rounded-xl py-2 px-4 rounded hover:bg-[#2d7223] transition duration-300">
                <a href="/Contact"> Contact Us</a>
              </button>
            </div>
          </div>

          <div class="relative">
            <img src={modern} alt="About Image" class="w-full h-auto max-w-lg rounded-3xl" />
          </div>


        </div>

       {/*  */}
 {/* additional services block */}
        <div class="flex  flex-col  sm:max-w-xl sm:text-xl md:max-w-full md:text-xl lg:max-w-screen-2xl lg:text-xl lg:flex-row justify-between items-center  lg:px-4">

          <div className='flex flex-col lg:w-1/2'>
            <div class="text-start  mb-6">
              <h2 class="text-4xl font-bold leading-tight bg-gradient-to-r from-green-400 to-blue-700 bg-clip-text text-transparent mb-3">Additional Services Include</h2>
              <div className='flex flex-col lg:flex-row gap-5'>
                <ul>
                  <li className='flex'><img src={tickk} className='w-6 h-5' alt="" />Physicians Revenue Cycle Management</li>
                  <li className='flex'><img src={tickk} className='w-6 h-5' alt="" />Medical Practice Management Services</li>
                  <li className='flex'><img src={tickk} className='w-6 h-5' alt="" />Electronic Medical Record (EMR) Consultation</li>
                  <li className='flex'><img src={tickk} className='w-6 h-5' alt="" />Medical Transcription</li>
                  <li className='flex'><img src={tickk} className='w-6 h-5' alt="" />EMR/Technology Integration</li>
                </ul>
                <ul>
                  <li className='flex'><img src={tickk} className='w-6 h-5' alt="" />Financial Analysis & Reporting</li>
                  <li className='flex'><img src={tickk} className='w-6 h-5' alt="" />Credentialing Services</li>
                  <li className='flex'><img src={tickk} className='w-6 h-5' alt="" />Physicians Account Management</li>
                  <li className='flex'><img src={tickk} className='w-6 h-5' alt="" />Physicians Practice Management Consulting</li>
                </ul>
              </div>
              {/* <p class="text-gray-600 mt-4">Thrive Med's advanced physician revenue cycle management system enhances every stage of the RCM process, from patient scheduling and insurance verification to payer credentialing and claims management. We are dedicated to improving your practice's financial stability while easing the administrative complexities of managing insurance interactions. Our comprehensive medical billing services cater to all specialties, offering a unified solution that simplifies your billing operations and optimizes revenue generation for your practice.</p> */}
            </div>
          </div>

          <div class="relative">
            <img src={serve} alt="About Image" class="w-full h-auto max-w-lg rounded-3xl" />
          </div>


        </div>

      </div>
     
   </div>
  )
}
