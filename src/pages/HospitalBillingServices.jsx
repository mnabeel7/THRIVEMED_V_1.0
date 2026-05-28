import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import hhero1 from '../assets/subservices/hhero1.jpg'
import hhero2 from '../assets/subservices/hhero2.jpg'
import hhero3 from '../assets/subservices/hhero3.png'
import hhero4 from '../assets/subservices/hhero4.jpg'
export default function HospitalBillingServices() {

  let navigate=useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


  const handledemo=()=>{
    navigate('/RCM')
  }

  const handlecontact=()=>{
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
                Hospital Billing Services
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Outsource Hospital <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Medical Billing Services</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                ThriveMed RCM offers an extensive range of hospital medical billing solutions tailored to meet the specific needs of your healthcare organization. Our services include comprehensive practice management, patient engagement strategies, cutting-edge EHR/EMR technology solutions, medical AR recovery, and complete hospital revenue cycle management.
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
                  src={hhero1} 
                  alt="Hospital Medical Billing" 
                  className="relative rounded-3xl shadow-lg w-full object-cover aspect-[4/3] sm:aspect-[1.4] lg:aspect-square" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='overflow-hidden sm:max-w-xl sm:text-xl md:max-w-full md:text-xl lg:max-w-screen-2xl lg:text-xl m-auto'>
      <div className=''>
        <div className='flex mb-3 flex-col  lg:flex-row justify-center align-middle lg:ml-8 lg:mr-8 sm:mr-4 sm:ml-4 lg:pl-12 lg:pr-12 pl-4 pr-4 pt-4 pb-4'>
          <div className='content lg:w-[60%]   flex flex-col justify-center'>
            <p className='font-bold text-4xl mb-4 text-center xl:text-4xl lg:text-start capitalize' data-aos="fade-down">Freeing Up Resources and Reducing Billing Administration</p>
            <p className='text-gray-500 ' data-aos="fade-up">ThriveMed RCM specializes in comprehensive hospital billing services, allowing healthcare facilities to focus on patient care while we manage the complexities of billing and coding. Our dedicated revenue cycle management team ensures that your hospital maximizes its financial performance by streamlining processes, reducing errors, and improving cash flow. We take pride in offering a seamless, efficient billing experience that supports your organization’s goals and enhances overall operational efficiency.</p>
            <button
              data-aos="zoom-in"
              type="button"
              className="text-white w-52 h-14 mt-4 mx-auto  bg-gradient-to-r from-green-500 to-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
             onClick={handledemo}
            >

              Schedule a Demo
            </button>
          </div>
          <img data-aos="fade-left" src={hhero2} alt="hepatology" className='h-[10%] lg:w-[30%] lg:h-[30%] m-auto mt-2  rounded-lg' />
        </div>
      </div>
      <div className='bg-white'>
        <div className='flex mb-3 flex-col  lg:flex-row justify-center align-middle lg:ml-8 lg:mr-8 sm:mr-4 sm:ml-4 lg:pl-12 lg:pr-12 pl-4 pr-4 pt-4 pb-4'>
          <div className='content lg:w-[60%]    flex flex-col justify-center'>
            <p className='font-bold text-4xl mb-4 text-center xl:text-4xl lg:text-start uppercase' data-aos="fade-down">We Will Recover Your Lost Money</p>
            <p className='text-gray-500 ' data-aos="fade-up">Inefficient hospital billing systems lead to significant revenue losses, with a large percentage of claims needing corrections before they can be processed. At ThriveMed RCM, we proactively adapt to ongoing regulatory changes, ensuring our hospital billing and collection services are both compliant and efficient. Our dedicated team delivers comprehensive, customized billing solutions designed to minimize errors and maximize revenue recovery for your hospital.</p>
          </div>
          <img data-aos="zoom-in" src={hhero3} alt="hepatology" className='w-64 h-64 lg:w-72 lg:h-72   m-auto mt-2 rounded-lg' />
        </div>
      </div>
      <div className=''>
        <div className='flex mb-3 flex-col  lg:flex-row justify-center align-middle lg:ml-8 lg:mr-8 sm:mr-4 sm:ml-4 lg:pl-12 lg:pr-12 pl-4 pr-4 pt-4 pb-4'>
          <div className='content lg:w-[60%]   flex flex-col justify-center'>
            <p className='font-bold text-4xl mb-4 text-center xl:text-4xl lg:text-start capitalize' data-aos="fade-down">We Will Handle Your Errors Trigger & Denials</p>
            <p className='text-gray-500 ' data-aos="fade-up">ThriveMed RCM manages every aspect of hospital medical billing, boosting your revenue while removing the burden of maintaining an in-house billing department. Our expert hospital revenue cycle management team works to enhance the financial health of your healthcare organization, ensuring seamless operations and improved profitability.</p>
          </div>
          <img data-aos="fade-left" src={hhero4} alt="hepatology" className=' lg:w-[30%] lg:h-[30%] m-auto mt-4  rounded-lg' />
        </div>
      </div>
      </div>
      <div className='bg-blue-950 p-5'>
        <div className='sm:max-w-xl sm:text-xl md:max-w-full md:text-xl lg:max-w-screen-2xl  lg:text-xl  m-auto   flex   flex-col  lg:flex-row justify-center align-middle  p-6'>
          <div className='content    flex flex-col justify-center'>
            <p className='font-bold  text-4xl mb-4 text-center xl:text-4xl lg:text-start capitalize text-white'>Looking for Revenue Impact? Speak to us!!!</p>
          </div>
          <button
              // data-aos="zoom-in"
              type="button"
              className="text-white w-52 h-14 mt-4 mx-auto border-4 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
           
              onClick={handlecontact}
           >
             Contact Us 
            </button>
        </div>
      </div>
      
     
    </>
  )
}
