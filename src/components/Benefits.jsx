import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import benpic from '../assets/benefits.jpg';
import { useNavigate } from 'react-router-dom';

export default function Benefits() {
  let navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const handleContact = () => {
    navigate('/Contact');
  };

  const benefitsList = [
    {
      title: 'Accelerated Cash Flow',
      desc: 'Our streamlined processes ensure claims are submitted cleanly the first time, significantly reducing Days in AR and accelerating your cash flow.',
    },
    {
      title: 'Maximized Reimbursement',
      desc: 'Expert coding and aggressive denial management mean we capture every dollar you are owed from both insurance and patients.',
    },
    {
      title: 'Reduced Administrative Burden',
      desc: 'Free your staff from hours on the phone with payers. We handle the heavy lifting so your team can focus on patient care.',
    },
    {
      title: 'Comprehensive Reporting',
      desc: 'Gain crystal-clear visibility into your practice\'s financial health with our detailed, easy-to-understand analytics dashboards.',
    }
  ];

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900/30"></div>
      
      {/* Floating Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl mix-blend-screen"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl mix-blend-screen"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2" data-aos="fade-right">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-teal-400 mb-4">
              <span className="w-8 h-0.5 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full"></span>
              The ThriveMed Impact
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6" style={{ fontFamily: 'Outfit, sans-serif', lineHeight: 1.2 }}>
              Transform Your <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">Revenue Cycle</span>
            </h2>
            <p className="text-lg text-slate-300 mb-10 leading-relaxed">
              Partnering with ThriveMed RCM is more than just outsourcing billing; it's a strategic move to optimize your financial performance and secure your practice's future.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {benefitsList.map((item, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-teal-500/30 transition-all duration-300">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <button 
              onClick={handleContact}
              className="px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold rounded-full shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
            >
              Get a Free Revenue Analysis
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2" data-aos="fade-left">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-900/40 to-transparent z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
              <img 
                src={benpic} 
                alt="Medical Billing Experts" 
                className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Glass overlay badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 z-20 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-white font-bold text-lg mb-1 font-outfit">Your Partner in Growth</p>
                <p className="text-teal-300 text-sm">We handle the billing. You handle the healing.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
