import React from 'react';
import contact from '../assets/contact.jpg';
import Contactform from '../components/Contactform';

export default function Contact() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 transition-colors duration-300 min-h-screen pt-20 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>


      {/* Hero Section */}
      <div className="relative w-full h-[40vh] min-h-[300px] overflow-hidden">
        <img src={contact} alt="Contact Us" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white text-center font-outfit" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">Touch</span>
          </h1>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-16 relative z-10">

        {/* Intro Text */}
        <div className="bg-white/70 dark:bg-slate-900/60 backdrop-blur-3xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/50 dark:border-slate-800/50 mb-16 animate-on-scroll visible text-center max-w-4xl mx-auto">
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
            ThriveMed RCM is the ideal financial partner for managing your revenue cycle. We tailor our services to meet your needs and act as an extension of your team. All inquiries are returned within 24 hours.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

          {/* Call Card */}
          <div className="bg-white/70 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 p-8 rounded-3xl flex flex-col items-center text-center group hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center text-teal-600 dark:text-teal-400 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-teal-400 group-hover:to-blue-500 group-hover:text-white transition-all duration-500 mb-6 shadow-lg shadow-teal-500/20">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2 font-outfit" style={{ fontFamily: 'Outfit, sans-serif' }}>Call Us</h3>
            <p className="text-slate-500 dark:text-slate-400 mb-4 font-semibold text-lg">+1 908-224-1996</p>
            <a href="tel:+19082702999" className="mt-auto text-blue-600 dark:text-blue-400 font-bold hover:text-teal-500 dark:hover:text-teal-400 transition-colors inline-flex items-center gap-2">
              Make a call
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>

          {/* Email Card */}
          <div className="bg-white/70 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 p-8 rounded-3xl flex flex-col items-center text-center group hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center text-teal-600 dark:text-teal-400 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-teal-400 group-hover:to-blue-500 group-hover:text-white transition-all duration-500 mb-6 shadow-lg shadow-teal-500/20">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2 font-outfit" style={{ fontFamily: 'Outfit, sans-serif' }}>Email Us</h3>
            <p className="text-slate-500 dark:text-slate-400 mb-4 font-semibold text-lg">info@thrivemedrcm.com</p>
            <a href="mailto:info@thrivemedrcm.com" className="mt-auto text-blue-600 dark:text-blue-400 font-bold hover:text-teal-500 dark:hover:text-teal-400 transition-colors inline-flex items-center gap-2">
              Send an email
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>

          {/* Location Card */}
          <div className="bg-white/70 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 p-8 rounded-3xl flex flex-col items-center text-center group hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center text-teal-600 dark:text-teal-400 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-teal-400 group-hover:to-blue-500 group-hover:text-white transition-all duration-500 mb-6 shadow-lg shadow-teal-500/20">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2 font-outfit" style={{ fontFamily: 'Outfit, sans-serif' }}>Location</h3>
            <p className="text-slate-500 dark:text-slate-400 mb-4 font-semibold text-lg">13236 N 7th St Ste 4<br />Phoenix, AZ 85022</p>
            <a href="https://maps.google.com/?q=13236+N+7th+St+Ste+4+Phoenix+AZ+85022" target="_blank" rel="noreferrer" className="mt-auto text-blue-600 dark:text-blue-400 font-bold hover:text-teal-500 dark:hover:text-teal-400 transition-colors inline-flex items-center gap-2">
              Get Directions
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>

        </div>

        {/* Form and Map Grid */}
        <div className="bg-white/70 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 rounded-3xl overflow-hidden grid lg:grid-cols-2 shadow-2xl">

          <div className="p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-extrabold text-slate-800 dark:text-white mb-6 font-outfit" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Send us a Message
              </h3>
              <Contactform />
            </div>
          </div>

          <div className="h-[400px] lg:h-full min-h-[400px] bg-slate-200">
            <iframe
              title="ThriveMed Location"
              src="https://maps.google.com/maps?q=13236 N 7th St Ste 4 Phoenix, AZ 85022&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

        </div>

      </div>
    </div>
  );
}
