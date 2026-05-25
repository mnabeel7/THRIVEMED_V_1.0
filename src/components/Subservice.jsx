import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import s1 from '../assets/services/s1.PNG'
import s2 from '../assets/services/s2.PNG'
import s3 from '../assets/services/s3.PNG'
import s4 from '../assets/services/s4.PNG'
import s5 from '../assets/services/s5.PNG'
import s6 from '../assets/services/s6.PNG'
import s7 from '../assets/services/s7.PNG'
import s8 from '../assets/services/s8.PNG'

export default function Subservice() {
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, [])

  const services = [
    { img: s1, title: 'Hospital Billing Services', path: '/HospitalBillingServices', desc: 'Full-service hospital billing with end-to-end revenue cycle management.' },
    { img: s2, title: 'Physician Billing Services', path: '/PhysicianBillingServices', desc: 'Dedicated billing solutions so you can focus on patient care.' },
    { img: s3, title: 'Laboratory Billing Services', path: '/LaboratoryBillingServices', desc: 'Precise claims management and faster reimbursements for labs.' },
    { img: s4, title: 'Imaging Center Services', path: '/ImagingCenterBilling', desc: 'Streamlined billing for radiology and imaging centers.' },
    { img: s5, title: 'Coverage Discovery', path: '/CoverageDiscovery', desc: 'Identify overlooked insurance coverage to maximize reimbursement.' },
    { img: s6, title: 'AR Recovery Services', path: '/ARRecoveryServices', desc: 'Recover outstanding payments and improve your cash flow.' },
    { img: s7, title: 'Ambulatory Surgery Billing', path: '/AmbulatorySurgeryBilling', desc: 'Fast reimbursements for outpatient surgical centers.' },
    { img: s8, title: 'Medical Billing Services', path: '/MedicalBillingServices', desc: 'Comprehensive billing to reduce errors and maximize revenue.' },
  ]

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-teal-600 mb-4">
            <span className="w-8 h-0.5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"></span>
            What We Offer
            <span className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"></span>
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Services</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Comprehensive billing solutions tailored for every healthcare specialty.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link
              to={service.path}
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-teal-500/10 border border-slate-100 hover:border-teal-200 transition-all duration-500 hover:-translate-y-2 flex flex-col"
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              {/* Icon Container - Centered */}
              <div className="flex items-center justify-center pt-10 pb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-slate-50 to-teal-50 border-2 border-dashed border-slate-200 group-hover:border-teal-400 group-hover:from-teal-50 group-hover:to-blue-50 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-teal-500/20">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-12 h-12 object-contain"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Content - Centered */}
              <div className="px-6 pb-8 flex-1 flex flex-col items-center text-center">
                <h3 className="text-lg font-bold text-slate-800 group-hover:text-teal-700 transition-colors mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {service.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">
                  {service.desc}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-teal-600 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Learn More
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-teal-400 to-blue-500 rounded-t-full transition-all duration-500 group-hover:w-2/3"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
