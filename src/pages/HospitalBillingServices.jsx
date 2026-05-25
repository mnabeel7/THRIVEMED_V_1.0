import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import hdetail from '../assets/subservices/hdetail.jpg'
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
    <div className='  mt-24'>
      {/* <div className='bg-fixed w-full'
        style={{
          backgroundImage: `url(${hdetail})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '800px' 
        }}>
      </div> */}
      <div className='overflow-hidden sm:max-w-xl sm:text-xl md:max-w-full md:text-xl lg:max-w-screen-2xl lg:text-xl m-auto'>
      <div className='bg-white'>
        <div className='flex mb-3 flex-col  lg:flex-row justify-center align-middle lg:ml-8 lg:mr-8 sm:mr-4 sm:ml-4 lg:pl-12 lg:pr-12 pl-4 pr-4 pt-4 pb-4'>
          <div className='content mt-10 lg:w-[60%]    flex flex-col justify-center'>
            <p className='font-bold text-4xl mb-4 text-center xl:text-4xl lg:text-start uppercase' data-aos="fade-down">Outsource Hospital Medical Billing Services</p>
            <p className='text-gray-500 ' data-aos="fade-up">ThriveMed RCM offers an extensive range of hospital medical billing solutions tailored to meet the specific needs of your healthcare organization. Our services include comprehensive practice management, patient engagement strategies, cutting-edge EHR/EMR technology solutions, medical accounts receivable (AR) recovery, and complete hospital revenue cycle management (RCM). We are committed to optimizing your hospital's financial performance by streamlining processes and ensuring accurate and timely reimbursement for all services provided.</p>
          </div>
          <img data-aos="zoom-in" src={hhero1} alt="hepatology" className=' lg:w-96 lg:h-96   m-auto mt-2  rounded-lg' />
        </div>
      </div>
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
      
     
    </div>
  )
}
