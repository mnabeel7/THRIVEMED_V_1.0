import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Whatwedo() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const cards = [
    {
      title: 'Increased Revenue',
      desc: 'Our clients typically see a 15-20% increase in collected revenue within the first six months of partnering with us.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
        </svg>
      )
    },
    {
      title: 'Reduced AR Days',
      desc: 'We aggressively work down your outstanding accounts receivable, improving cash flow and financial stability.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Lower Denial Rates',
      desc: 'Through meticulous coding and thorough claim scrubbing, we significantly decrease the rate of denied claims.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Focus on Patient Care',
      desc: 'By handling the administrative burden of billing, we free up your staff to concentrate on providing excellent patient care.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      )
    },
    {
      title: 'Customized Solutions',
      desc: 'We tailor our billing processes to fit the specific needs and workflows of your medical practice.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="what-we-do">
      {/* Background elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-teal-50 rounded-full filter blur-3xl opacity-50"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-50 rounded-full filter blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div data-aos="fade-right">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-teal-600 mb-4">
              <span className="w-8 h-0.5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full"></span>
              Why Choose Us
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
              The ThriveMed <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Advantage</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              We go beyond basic billing. We act as an extension of your practice, actively analyzing your revenue cycle to find missed opportunities and optimize your financial performance.
            </p>
            
            <ul className="space-y-4 mb-8">
              {['End-to-End RCM Solutions', 'Certified Expert Billers', 'Transparent Reporting', '100% HIPAA Compliant'].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-700 font-semibold">
                  <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Swiper */}
          <div className="relative w-full max-w-sm mx-auto lg:max-w-md" data-aos="zoom-in" data-aos-delay="200">
            <Swiper
              effect={'cards'}
              grabCursor={true}
              modules={[EffectCards, Autoplay]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              className="mySwiper w-[280px] sm:w-[320px]"
            >
              {cards.map((card, index) => (
                <SwiperSlide key={index} className="rounded-3xl bg-slate-900 overflow-hidden relative shadow-2xl group">
                  {/* Card Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 z-0"></div>
                  
                  {/* Decorative glow */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full filter blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-500 z-0"></div>

                  <div className="relative z-10 p-8 h-[360px] flex flex-col justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500/20 to-blue-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-6 group-hover:scale-110 transition-transform duration-500">
                      {card.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                      {card.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed text-sm">
                      {card.desc}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          
        </div>
      </div>
    </section>
  );
}
