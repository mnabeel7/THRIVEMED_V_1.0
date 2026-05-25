import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import coverage from '../assets/subservices/coveragee.webp'
import modern from '../assets/subservices/revenue.jpg'
import work from '../assets/subservices/work.webp'
import serve from '../assets/subservices/serve.jpg'

export default function CoverageDiscovery() {
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

  const benefitsList = [
    "Uncovers all possible coverage options to ensure maximum reimbursement",
    "Reduces Accounts Receivable Days",
    "Lowers the number of accounts sent to collections or written off",
    "Lowers collection costs for unpaid bills",
    "Minimizes overall bad debt",
    "Enhances patient satisfaction"
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
              Coverage Discovery
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Coverage Discovery <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Services</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              A large portion of uncompensated care results from uninsured patients or missed billing opportunities. Up to 10% of written-off self-pay accounts could be covered by insurance or government programs, representing recoverable revenue.
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
            </div>
          </div>
          <div className="lg:col-span-5 flex justify-center" data-aos="fade-left">
            <div className="relative group max-w-md w-full">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
              <img 
                src={coverage} 
                alt="Coverage Discovery" 
                className="relative rounded-3xl shadow-lg w-full object-cover aspect-[4/3] sm:aspect-[1.4] lg:aspect-square" 
              />
            </div>
          </div>
        </div>

        {/* Section 2: Revenue Boost */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8 border-t border-slate-200/50 dark:border-slate-800/50">
          <div className="lg:col-span-5 order-last lg:order-first flex justify-center" data-aos="fade-right">
            <div className="relative group max-w-md w-full">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
              <img 
                src={modern} 
                alt="Revenue Boost" 
                className="relative rounded-3xl shadow-lg w-full object-cover aspect-[4/3] sm:aspect-[1.4] lg:aspect-square" 
              />
            </div>
          </div>
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left" data-aos="fade-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Revenue Boost Through Coverage Discovery Services
            </h3>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
              Coverage Discovery Services help identify hidden insurance coverage, ensuring that providers capture revenue previously lost due to missed billing opportunities. By uncovering eligible insurance for self-pay or underinsured patients, healthcare providers can significantly boost their revenue.
            </p>
          </div>
        </div>

        {/* Banner Title */}
        <div className="text-center py-6 border-y border-slate-200/50 dark:border-slate-800/50" data-aos="fade-up">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Coverage Discovery Benefits Both Billing Teams and Front-End Staff
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-3xl mx-auto">
            Our services are highly valued by both front-end and billing staff, as they streamline workflows and improve efficiency. Additionally, they free up valuable time, allowing teams to focus on more critical tasks that demand their full attention.
          </p>
        </div>

        {/* Section 3: How It Works */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left" data-aos="fade-right">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
              How ThriveMed’s Coverage Discovery Service Operates
            </h3>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
              Manually researching potential payers for each patient would be impractical. Thrive Med's Coverage Discovery leverages specialized software tools to streamline this process. By automatically checking for coverage when a patient identifies as self-pay, we ensure that both patients and providers benefit from any available insurance. These tools feature advanced search capabilities, automated claim scrubbing, access to an extensive payer database, and sophisticated algorithms that minimize errors and false positives, ensuring accurate and efficient results.
            </p>
            <div className="pt-4 flex justify-center lg:justify-start">
              <button
                onClick={handledemo}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-white font-bold hover:bg-slate-300 dark:hover:bg-slate-700 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Schedule a Demo
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 flex justify-center" data-aos="fade-left">
            <div className="relative group max-w-md w-full">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
              <img 
                src={work} 
                alt="How It Works" 
                className="relative rounded-3xl shadow-lg w-full object-cover aspect-[4/3] sm:aspect-[1.4] lg:aspect-square" 
              />
            </div>
          </div>
        </div>

        {/* Section 4: Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8 border-t border-slate-200/50 dark:border-slate-800/50">
          <div className="lg:col-span-5 order-last lg:order-first flex justify-center" data-aos="fade-right">
            <div className="relative group max-w-md w-full">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
              <img 
                src={serve} 
                alt="Benefits of Using Coverage Discovery" 
                className="relative rounded-3xl shadow-lg w-full object-cover aspect-[4/3] sm:aspect-[1.4] lg:aspect-square" 
              />
            </div>
          </div>
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left" data-aos="fade-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Benefits of Using Coverage Discovery
            </h3>
            <div className="grid grid-cols-1 gap-4 text-left">
              {benefitsList.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3 group">
                  <div className="w-5 h-5 rounded-full bg-teal-500/10 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-600 dark:text-slate-300 text-sm sm:text-base font-medium">
                    {benefit}
                  </span>
                </div>
              ))}
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
              Let us uncover hidden coverage and optimize your revenue collection efficiently.
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
