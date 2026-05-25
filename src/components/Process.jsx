import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import a from '../assets/iconsswiper/convenient.PNG';
import b from '../assets/iconsswiper/ingenious.PNG';
import c from '../assets/iconsswiper/innovatuve.PNG';
import d from '../assets/iconsswiper/precise.PNG';
import e from '../assets/iconsswiper/reasonable.PNG';

export default function Process() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const steps = [
    {
      img: a,
      title: 'Demographics Entry',
      desc: 'Accurate entry of patient data, ensuring the foundation for a clean claim.',
      step: '01',
    },
    {
      img: b,
      title: 'Coding & Audits',
      desc: 'Expert coding based on the latest guidelines, followed by strict quality audits.',
      step: '02',
    },
    {
      img: c,
      title: 'Claim Submission',
      desc: 'Electronic submission with multiple scrubbing layers to catch errors before sending.',
      step: '03',
    },
    {
      img: d,
      title: 'Payment Posting',
      desc: 'Rapid and accurate posting of payments and adjustments into your practice management system.',
      step: '04',
    },
    {
      img: e,
      title: 'Denial Management',
      desc: 'Aggressive follow-up on denied claims, appealing and resolving issues to secure your revenue.',
      step: '05',
    },
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20" data-aos="fade-up">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-teal-600 mb-4">
            <span className="w-8 h-0.5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full"></span>
            Our Workflow
            <span className="w-8 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></span>
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
            A Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Billing Process</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Our streamlined workflow ensures accuracy at every step, minimizing denials and maximizing your revenue cycle efficiency.
          </p>
        </div>

        {/* Process Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4 relative z-10">
          
          {/* Connector Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-[40%] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-teal-200 via-blue-200 to-teal-200 -z-10"></div>

          {steps.map((item, index) => (
            <div 
              key={index}
              className="relative group bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:border-teal-100 transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              {/* Step Number Badge */}
              <div className="absolute -top-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg shadow-teal-500/30 font-outfit">
                {item.step}
              </div>

              {/* Icon Image */}
              <div className="w-24 h-24 mb-6 mt-4 p-4 rounded-full bg-slate-50 border-2 border-dashed border-slate-200 group-hover:border-teal-400 group-hover:bg-teal-50 transition-colors duration-300">
                <img src={item.img} alt={item.title} className="w-full h-full object-contain filter group-hover:drop-shadow-md transition-all" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-slate-800 mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {item.desc}
              </p>
              
              {/* Hover highlight line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-teal-400 to-blue-500 rounded-t-full transition-all duration-300 group-hover:w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
