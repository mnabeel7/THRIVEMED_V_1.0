import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import coverage from '../assets/subservices/Aar.webp'
import modern from '../assets/subservices/dd.jpg'

export default function ARRecoveryServices() {
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
              AR Recovery Services
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Thrive Med's AR Recovery Services <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Optimize Revenue Collection</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Thrive Med provides a full suite of AR management services, focusing on recovering revenue from aged accounts over 120 days. Our proven system excels at maximizing recovery, even for accounts previously considered uncollectible.
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
                src={coverage} 
                alt="AR Recovery" 
                className="relative rounded-3xl shadow-lg w-full object-cover aspect-[4/3] sm:aspect-[1.4] lg:aspect-square" 
              />
            </div>
          </div>
        </div>

        {/* Section 2: Strategy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8 border-t border-slate-200/50 dark:border-slate-800/50">
          <div className="lg:col-span-5 order-last lg:order-first flex justify-center" data-aos="fade-right">
            <div className="relative group max-w-md w-full">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
              <img 
                src={modern} 
                alt="Claims Management" 
                className="relative rounded-3xl shadow-lg w-full object-cover aspect-[4/3] sm:aspect-[1.4] lg:aspect-square" 
              />
            </div>
          </div>
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left" data-aos="fade-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Consistently boosting revenue through efficient claims management strategies
            </h3>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
              ThriveMed's advanced system monitors each claim from start to finish, ensuring our clients receive the full revenue they’re entitled to. With years of expertise, our strategy for handling aging AR accounts is finely tuned. Our old AR recovery service offers a swift and efficient solution to recover outstanding revenue.
            </p>
          </div>
        </div>

        {/* Section 3: Timeline 4-Step Approach */}
        <div className="py-12 border-t border-slate-200/50 dark:border-slate-800/50">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Thrive Med’s Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">4-Step Approach</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              A systematic method to resolving aging accounts and improving your collection rates efficiently.
            </p>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 dark:before:via-slate-700 before:to-transparent">

            {/* Step 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active" data-aos="fade-up" data-aos-delay="100">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-50 dark:border-slate-950 bg-teal-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                1
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-slate-900/60 p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="font-bold text-xl text-slate-800 dark:text-white mb-2 font-outfit">Comprehensive Assessment</div>
                <div className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Our AR team conducts a detailed review of all unresolved claims, ensuring every recoverable account is pursued, no matter the size.</div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active" data-aos="fade-up" data-aos-delay="200">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-50 dark:border-slate-950 bg-blue-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                2
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-slate-900/60 p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="font-bold text-xl text-slate-800 dark:text-white mb-2 font-outfit">Prioritization</div>
                <div className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Our team prioritizes analyzing older unpaid claims to prevent expirations, using advanced tools to maximize revenue while you focus on your practice.</div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active" data-aos="fade-up" data-aos-delay="300">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-50 dark:border-slate-950 bg-teal-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                3
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-slate-900/60 p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="font-bold text-xl text-slate-800 dark:text-white mb-2 font-outfit">Claim Adjustment and Resubmission</div>
                <div className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Our dedicated team ensures no claim is rejected or underpaid due to lack of follow-up, making appeals and monitoring denials to eliminate recurring issues.</div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active" data-aos="fade-up" data-aos-delay="400">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-50 dark:border-slate-950 bg-blue-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                4
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-slate-900/60 p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="font-bold text-xl text-slate-800 dark:text-white mb-2 font-outfit">Patient Engagement</div>
                <div className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">If the outstanding balance is patient responsibility, we provide clear reports and can manage direct patient interactions, ensuring they understand their charges.</div>
              </div>
            </div>

          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 bg-gradient-to-br from-teal-900 to-blue-900 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl" data-aos="zoom-in">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
              A More Efficient Approach to Managing Your Billing
            </h2>
            <p className="text-teal-100/80 text-base sm:text-lg">
              Let us take the burden of AR recovery off your shoulders so you can focus on what matters most.
            </p>
            <button
              onClick={handlecontact}
              className="px-8 py-4 rounded-xl bg-white text-blue-900 font-extrabold hover:bg-slate-100 hover:shadow-xl hover:shadow-white/10 hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center gap-2"
            >
              Contact Us Today
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
