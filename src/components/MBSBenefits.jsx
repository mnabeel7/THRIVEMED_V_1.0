import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import mbenefit from '../assets/subservices/medbiller.png';
import tick from '../assets/subservices/tickk.png';
export default function MBSBenefits() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const listitems = [
    {
      title: 'Revenue Increase',
      text: 'Minimum 10% increase and up to 30%'
    },
    {
      title: 'Customized',
      text: 'Choose only the services that benefit your business'
    },
    {
      title: 'High Volume',
      text: 'Innovative system facilitates processing thousands of claims daily'
    },
    {
      title: 'Personalized Support',
      text: 'Manager assigned to each client plus live phone support'
    },
    {
      title: 'Secure',
      text: 'Data transmission and encryption designed by top-level security specialists'
    },
    {
      title: 'Risk-Free Pricing',
      text: 'No hidden charges, pay only for successful collections'
    },
  ]
  return (
    <div className="overflow-hidden flex justify-center items-center py-12 lg:text-xl ">
      <div className="flex flex-col p-3 gap-28 justify-center items-center lg:flex-row-reverse lg:justify-between max-w-7xl mx-auto">
        <div className='w-full lg:w-1/2 lg:h-[600px]'>
          <img src={mbenefit} data-aos="zoom-in" className='w-full h-full object-cover rounded-3xl' alt="Benefits" />
        </div>
        <div className="right flex flex-col justify-between lg:w-1/2 w-full pr-8 pl-8 ">
          <div>
            <h2 className="text-3xl font-bold font-sans capitalize mb-2 bg-gradient-to-r from-green-400 to-blue-700 bg-clip-text text-transparent" data-aos="fade-down">ThriveMed RCM's Cutting-Edge Billing Solutions Offer Distinct Advantages</h2>
          </div>
          <div className="mx-auto mt-4">
            <div className="w-full text-black rounded-lg">
              {
                listitems.map((item) => {
                  return (
                    <div className="flex gap-4 mb-4">
                      <img src={tick} alt="benefittick" className="lg:w-8 lg:h-8 w-6 h-6 object-contain" />
                      <div className="inner" data-aos="fade-up">
                        <p className="mb-2 text-xl font-bold bg-gradient-to-r from-green-400 to-blue-700 bg-clip-text text-transparent">{item.title}</p>
                        <p className="mb-2 text-gray-600">{item.text}</p>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            <button type="button" data-aos="zoom-out" className="text-white mb-4 border-white border bg-gradient-to-r from-green-400 to-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
             Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
