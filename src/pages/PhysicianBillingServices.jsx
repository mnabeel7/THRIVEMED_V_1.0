import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import physi from '../assets/subservices/physi.jpg'
import maximus from '../assets/subservices/maximus.webp'
import serve from '../assets/subservices/serve.jpg'
import denial from '../assets/subservices/denial.png'

export default function PhysicianBillingServices() {
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

  const additionalServices = [
    "Physicians Revenue Cycle Management",
    "Medical Practice Management Services",
    "Electronic Medical Record (EMR) Consultation",
    "Medical Transcription",
    "EMR/Technology Integration",
    "Financial Analysis & Reporting",
    "Credentialing Services",
    "Physicians Account Management",
    "Physicians Practice Management Consulting"
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Main Fluid Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        
        {/* Section 1: Hero Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left" data-aos="fade-right">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-teal-600">
              <span className="w-8 h-0.5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"></span>
              Physician Billing
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Comprehensive Billing Services for <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Practices of All Sizes</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Customized Revenue Cycle Management and Billing Solutions for Physician Practices of All Sizes. Whether you’re a single-provider practice or a large multi-specialty group, our services are tailored to help you streamline operations, reduce billing errors, and accelerate payment collection.
            </p>
            <div className="pt-4 flex justify-center lg:justify-start">
              <button
                onClick={handledemo}
                className="btn-primary"
              >
                Schedule a Demo
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 flex justify-center" data-aos="fade-left">
            <div className="relative group max-w-md w-full">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
              <img 
                src={physi} 
                alt="Physician Billing" 
                className="relative rounded-3xl shadow-lg w-full object-cover aspect-[4/3] sm:aspect-[1.4] lg:aspect-square" 
              />
            </div>
          </div>
        </div>

        {/* Section 2: Banner Title */}
        <div className="text-center py-6 border-y border-slate-200/50 dark:border-slate-800/50" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600" style={{ fontFamily: 'Outfit, sans-serif' }}>
            We Optimize Claims, Prevent Rejections, and Maximize Revenue
          </h2>
        </div>

        {/* Section 3: RCM Services (Alternating grid layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 order-last lg:order-first flex justify-center" data-aos="fade-right">
            <div className="relative group max-w-md w-full">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
              <img 
                src={maximus} 
                alt="RCM Services" 
                className="relative rounded-3xl shadow-lg w-full object-cover aspect-[4/3] sm:aspect-[1.4] lg:aspect-square" 
              />
            </div>
          </div>
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left" data-aos="fade-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Comprehensive Range of Revenue Cycle Management Services
            </h3>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
              ThriveMed's advanced physician revenue cycle management system enhances every stage of the RCM process, from patient scheduling and insurance verification to payer credentialing and claims management. We are dedicated to improving your practice's financial stability while easing the administrative complexities of managing insurance interactions. Our comprehensive medical billing services cater to all specialties, offering a unified solution that simplifies your billing operations and optimizes revenue generation.
            </p>
          </div>
        </div>

        {/* Section 4: Denial Management (Alternating grid layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left" data-aos="fade-right">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Denial and Rejection Management
            </h3>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
              Physicians often face revenue loss due to errors in medical billing that lead to claim rejections or denials. Our exceptional physician billing services ensure that every claim is meticulously tracked, preventing any missed income due to overlooked claims. We generate detailed analytical reports that highlight potential bottlenecks in the claims process and pre-authorization, allowing you to address issues proactively and optimize your revenue stream.
            </p>
            <div className="pt-4 flex justify-center lg:justify-start">
              <button
                onClick={handlecontact}
                className="btn-primary"
              >
                Contact Us
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 flex justify-center" data-aos="fade-left">
            <div className="relative group max-w-md w-full">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
              <img 
                src={denial} 
                alt="Denial Management" 
                className="relative rounded-3xl shadow-lg w-full object-cover aspect-[4/3] sm:aspect-[1.4] lg:aspect-square" 
              />
            </div>
          </div>
        </div>

        {/* Section 5: Additional Services */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left" data-aos="fade-right">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Additional Services Include
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              {additionalServices.map((service, idx) => (
                <div key={idx} className="flex items-start gap-3 group">
                  <div className="w-5 h-5 rounded-full bg-teal-500/10 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-600 dark:text-slate-300 text-sm sm:text-base font-medium">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 flex justify-center" data-aos="fade-left">
            <div className="relative group max-w-md w-full">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
              <img 
                src={serve} 
                alt="Additional Services" 
                className="relative rounded-3xl shadow-lg w-full object-cover aspect-[4/3] sm:aspect-[1.4] lg:aspect-square" 
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
