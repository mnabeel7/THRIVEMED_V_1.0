import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Companyoverview() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  const handleContact = () => {
    navigate('/Contact')
  }

  const teamFeatures = [
    {
      title: "Certified Coders",
      desc: "Our team of AAPC certified coders and experienced billers bring a wealth of expertise to your facility, ensuring precise and thorough work. We leverage our deep understanding to educate your team on best practices that lead to enhanced revenue generation.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Proven Experience",
      desc: "With over 10 years of experience in the medical billing industry, we've established strong, enduring relationships with both insurance companies and our clients. We advocate effectively for our clients to achieve outstanding results.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
      )
    },
    {
      title: "Personalized Services",
      desc: "Our team works closely together to deliver tailored services that meet each client’s unique needs. Recognizing the complexity of medical billing, we are committed to streamlining the process and securing prompt reimbursements.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.97 5.97 0 00-.75-2.906m-.75 2.906H6m12 0a5.97 5.97 0 01-.75-2.906m-.75 2.906H6m0 0a9.094 9.094 0 01-3.741-.479 3 3 0 014.682-2.72m-2.94 3.198l-.001.031c0 .225.012.447.037.666A11.944 11.944 0 0012 21c2.17 0 4.207-.576 5.963-1.584A6.062 6.062 0 0018 18.72m-12 0a5.97 5.97 0 01.75-2.906m.75 2.906H18m-12 0a5.97 5.97 0 00.75-2.906m.75 2.906H18M15 8.25a3 3 0 11-6 0 3 3 0 016 0zm-3 9a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" />
        </svg>
      )
    },
    {
      title: "Up-To-Date Audits",
      desc: "Our team stays informed on the latest industry regulations and compliance updates to guarantee precise and effective billing. We collaborate with clients to understand their specific needs and customize our workflows accordingly.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        
        {/* Section 1: Hero Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left" data-aos="fade-right">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-teal-600">
              <span className="w-8 h-0.5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"></span>
              About ThriveMed RCM
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Billing and Payments.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Right On Time</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              From the moment your patient walks in until you receive payment for the services rendered, our RCM services team supports your growth by focusing on problem areas in your revenue cycle management.
            </p>
            <div className="pt-4 flex justify-center lg:justify-start">
              <button
                onClick={handleContact}
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
                src="https://rightmedicalbilling.com/wp-content/uploads/2023/09/about-intro.jpg" 
                alt="About ThriveMed" 
                className="relative rounded-3xl shadow-lg w-full object-cover aspect-[4/3] sm:aspect-[1.4] lg:aspect-square" 
              />
            </div>
          </div>
        </div>

        {/* Section 2: Statement & Key Highlights */}
        <div className="text-center max-w-3xl mx-auto space-y-4" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Keystone of Your Financial Performance
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed">
            From the first patient interaction to the final payment, our RCM team enhances your financial health by identifying and addressing challenges in your revenue cycle, ensuring your practice operates smoothly and profitably.
          </p>
        </div>

        {/* Section 3: Vision & Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <div 
            className="group bg-white/70 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-8 hover:border-teal-400 dark:hover:border-teal-500/80 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col items-center md:items-start text-center md:text-left space-y-4"
            data-aos="fade-right"
          >
            <div className="w-12 h-12 rounded-full bg-teal-500/10 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Our Vision
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              To be the premier partner in healthcare revenue cycle management, recognized for transforming practice workflows, accelerating payouts, and empowering clinicians through cutting-edge technology and transparent reporting.
            </p>
          </div>

          {/* Mission Card */}
          <div 
            className="group bg-white/70 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-8 hover:border-teal-400 dark:hover:border-teal-500/80 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col items-center md:items-start text-center md:text-left space-y-4"
            data-aos="fade-left"
          >
            <div className="w-12 h-12 rounded-full bg-teal-500/10 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.64 8.38a14.98 14.98 0 00-6.16 12.12A14.98 14.98 0 009.64 8.38l1.58-.34m5.84 2.58a14.96 14.96 0 00-6.16-4.22L9.64 8.38m5.84 2.58L10.5 18" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Our Mission
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              To deliver reliable, high-yield, and compliant billing solutions that streamline operations, minimize claim rejection rates, and maximize reimbursement. We advocate tirelessly for medical practices of all sizes, allowing clinicians to focus fully on their patients.
            </p>
          </div>
        </div>

        {/* Section 4: Split details & Team Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Text Block */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left" data-aos="fade-right">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
              About Our Team & Core Philosophy
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed">
              <p>
                At ThriveMed RCM, our team of dedicated professionals is committed to delivering exceptional medical billing and coding services. Our experts bring a deep understanding of the latest industry standards and a wealth of experience to every client engagement. We pride ourselves on our ability to navigate the complexities of healthcare billing with precision, ensuring that our clients receive accurate and timely support.
              </p>
              <p>
                We prioritize accessibility, transparency, and open communication in every client interaction. We strive to build strong, lasting relationships by being readily available to address any questions or concerns. Our team of experts is not only highly knowledgeable but also dedicated to offering personalized support.
              </p>
            </div>
          </div>

          {/* Right Cards List */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6" data-aos="fade-left">
            {teamFeatures.map((item, idx) => (
              <div 
                key={idx}
                className="group p-6 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-teal-500/10 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <h4 className="font-extrabold text-base sm:text-lg text-slate-850 dark:text-slate-200 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    {item.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
