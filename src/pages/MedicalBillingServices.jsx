import React from 'react'
import mdetail from '../assets/subservices/mdetail.jpg'
import MBSBenefits from '../components/MBSBenefits'
import MBSwipper from '../components/MBSwipper'
import MBsecondswiper from '../components/MBsecondswiper'
export default function MedicalBillingServices() {

  return (
    <div className='mt-20'>
      <div className='border overflow-hidden'>
        <div className='bg-fixed relative'
          style={{

            backgroundImage: `url(${mdetail})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '450px', // Adjust height as needed
            opacity: 0.7,
            width: '100vw',
            // overflow:'hidden'
          }}>
          {/* <img src={hero2} className='w-full '  alt="" /> */}
          <div className="absolute backdrop-blur-xl w-[100%] mt-6 lg:mt-36 text-wrap  ">
            <h1 className='  text-center  font-bold text-2xl md:text-6xl text-[#003680] mb-2 '>Medical Billing Services</h1>
            <p className='  text-center   md:font-bold text-sm md:text-2xl mt-3 mb-3 text-wrap pl-12 pr-12 text-white  '>
              Thrive Med  has been at the forefront of revenue cycle management for over a decade, fully grasping the intricacies of the billing process and its effect on your practice's financial health. Our extensive medical billing services are designed to optimize workflows for practices of all sizes.
              With expertise across more than 50 specialties, we enable faster payments—up to 30% quicker—and enhance operational efficiency by as much as 50%.
            </p>
          </div>
        </div>
      </div>

      <MBSBenefits />
      <MBSwipper />
      <MBsecondswiper />
    </div>
  )
}
