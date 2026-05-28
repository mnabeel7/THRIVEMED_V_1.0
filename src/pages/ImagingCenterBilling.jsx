import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import imagebilling from '../assets/subservices/ImageBilling.webp'
import serve from '../assets/subservices/serve.jpg'
import tickk from '../assets/subservices/tickk.png'
import fdoc from '../assets/subservices/fdoc.jpg'
import modern from '../assets/subservices/modern.jpg'

export default function ImagingCenterBilling() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  const handledemo = () => {
    navigate('/RCM')
  }

  const handlecontact = () => {
    navigate('/Contact')
  }

  return (
    <>
      <section className="py-20 mt-16 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
        {/* Background Orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
          
          {/* Hero Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left" data-aos="fade-right">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-teal-600">
                <span className="w-8 h-0.5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"></span>
                Imaging Center Billing
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Imaging Center <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Billing Services</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                ThriveMed RCM offers an extensive suite of services tailored to the specific needs of your imaging center. From revenue cycle management (RCM) and accounts receivable recovery to EHR/EMR solutions, practice management, and patient engagement, you can rely on a single radiology billing partner to streamline your operations and enhance your financial performance.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <button
                  onClick={handlecontact}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold hover:shadow-lg hover:shadow-teal-500/30 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Contact Us
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
                <button
                  onClick={handledemo}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-white font-bold hover:bg-slate-300 dark:hover:bg-slate-700 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Schedule Demo
                </button>
              </div>
            </div>
            <div className="lg:col-span-5 flex justify-center" data-aos="fade-left">
              <div className="relative group max-w-md w-full">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
                <img 
                  src={imagebilling} 
                  alt="Imaging Center Billing" 
                  className="relative rounded-3xl shadow-lg w-full object-cover aspect-[4/3] sm:aspect-[1.4] lg:aspect-square" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

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
            <img src={fdoc} alt="Doctor" class="w-full h-auto max-w-lg rounded-3xl" />
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
            <img src={modern} alt="Modern Equipment" class="w-full h-auto max-w-lg rounded-3xl" />
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
            <img src={serve} alt="Services" class="w-full h-auto max-w-lg rounded-3xl" />
          </div>


        </div>

      </div>
     
    </>
  )
}
