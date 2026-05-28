import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Adetail from '../assets/subservices/Adetail.jpg'
import doctor from '../assets/subservices/doctor.jpg'
import maximus from '../assets/subservices/ps.png'
import denial from '../assets/subservices/nn.webp'
import { useNavigate } from 'react-router-dom';
export default function AmbulatorySurgeryBilling() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


  let navigate = useNavigate();

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
                Ambulatory Surgery Centers
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Ambulatory <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Billing Services</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Ambulatory Surgery Centers (ASCs) face similar billing challenges as hospitals but often have a smaller billing team to handle these complexities. Outsourcing medical billing to ThriveMed RCM alleviates the burden of keeping up with intricate coding regulations, allowing you to focus on managing a successful surgery center.
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
                  src={Adetail} 
                  alt="Ambulatory Billing Services" 
                  className="relative rounded-3xl shadow-lg w-full object-cover aspect-[4/3] sm:aspect-[1.4] lg:aspect-square" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* top back image section */}
      <div className="flex mt-10  m-auto sm:max-w-xl sm:text-xl md:max-w-full md:text-xl lg:max-w-screen-2xl lg:text-2xl  flex-col items-center gap-10 pl-10 pr-10  pb-16">
        <p className="text-4xl text-center  bg-gradient-to-r from-green-400 to-blue-700 bg-clip-text text-transparent font-bold animate-fadeIn  ">
        Efficient ASC Revenue Cycle Management to Address Rising Costs and Diminishing Reimbursements
        </p>
        {/* <p className="text-xl text-center  bg-gradient-to-r from-green-400 to-blue-700 bg-clip-text text-transparent font-bold animate-fadeIn  "> */}
        {/* ThriveMed RCM provides relief from billing confusion and increases revenue for ambulatory surgery centers. */}
        <div class="flex flex-col justify-center  w-full  md:flex-row gap-6   mb-8">
            <button className=''> <a href="tel:+1 908-270-2999" class="bg-[#003680] md:rounded-xl w-full md:p-5 md:w-40 text-white text-center py-2  px-4  rounded hover:bg-[#1a365e] transition duration-300">
              Call Us
            </a>
            </button>
            <button> <a href="/RCM" class="bg-[#37b822] text-white md:p-5 text-center md:rounded-xl py-2 px-4 rounded hover:bg-[#2d7223] transition duration-300">
              Schedule Demo
            </a>
            </button>
          </div>
        {/* </p> */}
        {/* maximus image block */}
        <div class="flex flex-col  sm:max-w-xl sm:text-xl md:max-w-full md:text-xl lg:max-w-screen-2xl lg:text-xl lg:flex-row justify-between items-center py-12    lg:px-4">

          <div className='flex flex-col lg:w-1/2'>
            <div class="text-start  mb-6">
              <h2 class="text-4xl font-bold leading-tight bg-gradient-to-r from-green-400 to-blue-700 bg-clip-text text-transparent">Patient Scheduling</h2>
              <p class="text-gray-600 2xl:text-3xl mt-4">The medical revenue cycle starts with patient scheduling, and successful payment outcomes hinge on this critical first step. Our team of skilled ASC billing professionals ensures that the intake and scheduling process accurately captures all necessary information and is thoroughly documented.</p>
            </div>


            {/* <div class="flex flex-col md:flex-row    mb-8">
              <button class="bg-gradient-to-r from-green-400 to-blue-700 text-white text-center md:rounded-xl py-2 px-4 rounded hover:bg-[#2d7223] transition duration-300">
                Schedule a Demo
              </button>
            </div> */}
          </div>

          <div class="relative">
            <img src={maximus} alt="Patient Scheduling" class="w-full h-auto max-w-lg rounded-3xl" />
          </div>


        </div>
        {/* denial management */}
        <div class="flex flex-col sm:max-w-xl sm:text-xl md:max-w-full md:text-xl lg:max-w-screen-2xl lg:text-xl lg:flex-row-reverse justify-between items-center    lg:px-4">

          <div className='flex flex-col lg:w-1/2'>
            <div class="text-start  mb-6">
              <h2 class="text-4xl font-bold leading-tight bg-gradient-to-r from-green-400 to-blue-700 bg-clip-text text-transparent">Negotiating Out-of-Network Reimbursement Rates</h2>
              <p class="text-gray-600 2xl:text-3xl mt-4">While insurance networks and government payer reimbursements are often fixed, ASCs can enhance their revenue by effectively negotiating rates as out-of-network providers. This process can be challenging, as payers employ skilled negotiators. Thrive Med's experienced negotiation team understands the intricacies involved, ensuring our ASC billing services secure the highest possible reimbursements.</p>
            </div>

            <div class="flex flex-col md:flex-row    mb-8">
              <button
                onClick={handlecontact}
                class="bg-gradient-to-r from-green-400 to-blue-700 text-white text-center md:rounded-xl py-2 px-4 rounded hover:bg-[#2d7223] transition duration-300">
                Contact Us
              </button>
            </div>
          </div>

          <div class="relative">
            <img src={denial} alt="Negotiating Out-of-Network Reimbursement Rates" class="w-full h-auto max-w-lg rounded-3xl" />
          </div>


        </div>
      </div>
      <div className='lg:px-4'>
        <div class="flex  m-auto flex-col sm:max-w-xl sm:text-xl md:max-w-full md:text-xl lg:max-w-screen-2xl lg:text-xl lg:flex-row justify-between items-center     lg:px-4">

          <div className='flex flex-col lg:w-1/2'>
            <div class="text-start  mb-6">
              {/* <h2 class="text-4xl font-bold leading-tight bg-gradient-to-r from-green-400 to-blue-700 bg-clip-text text-transparent">Denial and Rejection Management</h2> */}
              <p class="text-gray-600 2xl:text-3xl mt-4">Ambulatory surgery centers (ASCs) face the same billing challenges as hospitals, but with a much smaller staff to manage the complexities. It’s like trying to navigate a maze with fewer guides. By outsourcing to ThriveMed RCM, you remove the burden of staying on top of intricate coding guidelines, allowing your surgery center to focus on patient care. As a leading ASC billing partner, we ensure you capture the maximum reimbursements from payers, so your revenue cycle runs smoothly without the stress.</p>
            </div>

            <div class="flex flex-col md:flex-row    mb-8">
              <button
                onClick={handledemo}
                class="bg-gradient-to-r from-green-400 to-blue-700 text-white text-center md:rounded-xl py-2 px-4 rounded hover:bg-[#2d7223] transition duration-300">
                 Free Demo
              </button>
            </div>
          </div>

          <div class="relative">
            <img src={doctor} alt="Doctor" class="w-full h-auto max-w-lg rounded-3xl" />
          </div>


        </div>
      </div>
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
    </>
  )
}
