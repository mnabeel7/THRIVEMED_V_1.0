import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

import sp1 from '../assets/specialities/sp1.PNG'
import sp2 from '../assets/specialities/sp2.PNG'
import sp3 from '../assets/specialities/sp3.PNG'
import sp4 from '../assets/specialities/sp4.PNG'
import sp5 from '../assets/specialities/sp5.PNG'
import sp6 from '../assets/specialities/sp6.PNG'
import sp7 from '../assets/specialities/sp7.PNG'
import sp8 from '../assets/specialities/sp8.PNG'
import sp9 from '../assets/specialities/sp9.PNG'
import sp10 from '../assets/specialities/sp10.PNG'
import sp11 from '../assets/specialities/sp11.PNG'
import sp12 from '../assets/specialities/sp12.PNG'
import sp13 from '../assets/specialities/sp13.PNG'
import sp14 from '../assets/specialities/sp14.PNG'
import sp15 from '../assets/specialities/sp15.PNG'
import sp16 from '../assets/specialities/sp16.PNG'
import sp17 from '../assets/specialities/sp17.PNG'
import sp18 from '../assets/specialities/sp18.PNG'
import sp19 from '../assets/specialities/sp19.PNG'
import sp20 from '../assets/specialities/sp20.PNG'
import sp21 from '../assets/specialities/sp21.PNG'
import sp23 from '../assets/specialities/sp23.PNG'
import sp24 from '../assets/specialities/sp24.PNG'
import sp25 from '../assets/specialities/sp25.PNG'

const speciality = [
  { sp: sp1, title: 'Hepatology' },
  { sp: sp2, title: 'Cardiology' },
  { sp: sp3, title: 'Nephrology' },
  { sp: sp4, title: 'Oncology' },
  { sp: sp5, title: 'Nephrology' },
  { sp: sp6, title: 'Podiatry' },
  { sp: sp7, title: 'Psychiatric' },
  { sp: sp8, title: 'Psychology' },
  { sp: sp9, title: 'Clinical Lab' },
  { sp: sp10, title: 'Hematology' },
  { sp: sp11, title: 'Orthopedics' },
  { sp: sp12, title: 'Rheumatology' },
  { sp: sp13, title: 'Dermatology' },
  { sp: sp14, title: 'Gynecology' },
  { sp: sp15, title: 'Pulmonology' },
  { sp: sp16, title: 'Thorasic Surgery' },
  { sp: sp17, title: 'Physical Therapy' },
  { sp: sp18, title: 'Pathology Lab' },
  { sp: sp19, title: 'Ambulatory Surgery' },
  { sp: sp20, title: 'Pain Management' },
  { sp: sp21, title: 'Neurosurgery' },
  { sp: sp23, title: 'Radiology' },
  { sp: sp24, title: 'Molecular Lab' },
  { sp: sp25, title: 'Pediatric' }
]

export default function Subspeciality() {
  const navigate = useNavigate()

  useEffect(() => {
    AOS.init({ duration: 600, once: true })
  }, [])

  const handledynamicroute = () => {
    navigate('/Ourspecialities')
  }

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-teal-600 mb-4">
            <span className="w-8 h-0.5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"></span>
            Specialized Fields
            <span className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"></span>
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Fields of <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Expertise</span>
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Providing tailored billing solutions for a diverse range of medical specialties.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {speciality.map((special, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-sm hover:shadow-xl hover:border-teal-400 dark:hover:border-teal-500/80 transition-all duration-300 cursor-pointer active:scale-95 text-center"
              onClick={handledynamicroute}
              data-aos="fade-up"
              data-aos-delay={(index % 5) * 50}
            >
              {/* Circular Icon Container */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md group-hover:bg-white dark:group-hover:bg-slate-750">
                <img
                  src={special.sp}
                  alt={special.title}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                  loading="lazy"
                />
              </div>

              {/* Title */}
              <p
                className="capitalize font-bold text-sm sm:text-base text-slate-800 dark:text-slate-200 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300 line-clamp-2"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                {special.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
