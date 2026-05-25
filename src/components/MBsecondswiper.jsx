import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function MBsecondswiper() {
  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  const steps = [
    {
      title: 'Fast Filing',
      desc: 'Accelerated submission of claims within 24-48 hours to minimize payment turnaround time.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
        </svg>
      )
    },
    {
      title: 'Clean Claims',
      desc: 'Advanced scrubbing systems yielding a 98%+ first-pass clean claim acceptance rate.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Tracking System',
      desc: 'Real-time status updates and end-to-end audit trails for every single claim.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: 'Rigorous Follow-up',
      desc: 'Persistent engagement with insurance payers on all pending or contested filings.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.656 48.656 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7C4.65 9.547 4.6 10.768 4.6 12s.05 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.092-1.209.138-2.43.138-3.662z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5" />
        </svg>
      )
    },
    {
      title: 'A/R Management',
      desc: 'Proactive lifecycle auditing to convert outstanding receivables into paid practice balances.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-teal-600 mb-4">
            <span className="w-8 h-0.5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"></span>
            Our Performance Strategy
            <span className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"></span>
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
            How ThriveMed <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Increases</span> Client Revenue
          </h2>
          <p className="text-base text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Our systematic, data-driven approach guarantees optimal claims capture and accelerated cash flow.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-white/70 dark:bg-slate-900/60 backdrop-blur-md rounded-2xl p-6 border border-slate-200/50 dark:border-slate-800/50 hover:border-teal-400/50 dark:hover:border-teal-500/50 hover:bg-white dark:hover:bg-slate-900 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-teal-500/5 hover:-translate-y-1.5 flex flex-col items-center text-center"
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              {/* Bullet point / Circular Icon container */}
              <div className="w-14 h-14 rounded-full bg-teal-50 dark:bg-teal-950/30 text-teal-600 dark:text-teal-400 border border-teal-100/50 dark:border-teal-900/30 flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-teal-500 group-hover:to-blue-500 group-hover:text-white group-hover:shadow-md group-hover:shadow-teal-500/20">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300" style={{ fontFamily: 'Outfit, sans-serif' }}>
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {step.desc}
              </p>

              {/* Number Index on Card */}
              <span className="absolute top-4 right-4 text-xs font-black text-slate-300/40 dark:text-slate-800/40 group-hover:text-teal-500/20 transition-colors duration-300">
                {`0${index + 1}`}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
