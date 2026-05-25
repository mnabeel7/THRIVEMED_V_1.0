import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import whypic from '../assets/choose2.jpg';

export default function Whychoose() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const features = [
    {
      title: 'Precision Driven',
      desc: 'Our processes are meticulously designed to ensure maximum accuracy and minimal claim denials.',
    },
    {
      title: 'Dedicated Support',
      desc: 'A dedicated team of billing experts available around the clock to support your practice.',
    },
    {
      title: 'Advanced Analytics',
      desc: 'Gain deep insights into your financial health with our cutting-edge reporting tools.',
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 rounded-l-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left: Image with overlapping badge */}
          <div className="w-full lg:w-1/2 relative" data-aos="fade-right">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={whypic} 
                alt="Medical Professional" 
                className="w-full h-[500px] object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <div 
              className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 animate-[float_5s_ease-in-out_infinite]"
              style={{ zIndex: 10 }}
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-r from-teal-500 to-emerald-500 shadow-lg shadow-teal-500/30">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-3xl font-black text-slate-800" style={{ fontFamily: 'Outfit, sans-serif' }}>10+</p>
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2" data-aos="fade-left">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-teal-600 mb-4">
              <span className="w-8 h-0.5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full"></span>
              Why Choose Us
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6" style={{ fontFamily: 'Outfit, sans-serif', lineHeight: 1.2 }}>
              Elevate Your Practice's <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Financial Health</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We specialize in optimizing revenue cycles for healthcare providers. Our tailored approach ensures that you receive the maximum reimbursement you deserve, allowing you to focus on what matters most: patient care.
            </p>

            <div className="space-y-6 mb-10">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center group-hover:bg-teal-500 transition-colors duration-300">
                    <svg className="w-6 h-6 text-teal-600 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>{feature.title}</h4>
                    <p className="text-slate-500">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={() => navigate('/Companyoverview')}
              className="px-8 py-3.5 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:shadow-teal-500/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
            >
              Learn More About Us
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
