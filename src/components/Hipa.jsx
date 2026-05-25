import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from '../assets/hipa/img1.jpg';
import img2 from '../assets/hipa/img2.jpeg';
import img3 from '../assets/hipa/img3.jpg';
import img4 from '../assets/hipa/img4.jpg';

export default function Hipa() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const cards = [
    {
      img: img1,
      title: 'Data Privacy',
      desc: 'Your personal health data is safeguarded with stringent privacy measures in compliance with HIPAA standards.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
    },
    {
      img: img2,
      title: 'Protected Health Info',
      desc: 'Protected Health Information (PHI) is securely protected according to HIPAA regulations at every touchpoint.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
        </svg>
      ),
    },
    {
      img: img3,
      title: 'Breach Prevention',
      desc: 'Implement strict data access controls and encryption to prevent unauthorized breaches.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
        </svg>
      ),
    },
    {
      img: img4,
      title: 'Electronic Health Records',
      desc: 'Securely manage and protect patient data with HIPAA-compliant Electronic Health Records.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="hipaa-section" className="relative py-20 overflow-hidden" style={{ background: '#f8fafc' }}>
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5" style={{ background: '#0d9488', filter: 'blur(120px)' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#0d9488' }}>
            <span className="w-8 h-0.5 rounded-full" style={{ background: 'linear-gradient(90deg, #0d9488, #2563eb)' }}></span>
            Compliance & Security
            <span className="w-8 h-0.5 rounded-full" style={{ background: 'linear-gradient(90deg, #2563eb, #0d9488)' }}></span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4" style={{ fontFamily: 'Outfit, sans-serif', color: '#0f172a' }}>
            HIPAA{' '}
            <span style={{ background: 'linear-gradient(135deg, #0d9488, #2563eb)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Compliance
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#64748b', lineHeight: 1.7 }}>
            All patient data is handled with the utmost confidentiality and in strict compliance with HIPAA regulations.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
              style={{
                background: 'white',
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                border: '1px solid rgba(226,232,240,0.8)',
              }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Icon badge */}
                <div
                  className="absolute -bottom-5 left-5 w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg transition-transform duration-500 group-hover:scale-110"
                  style={{ background: 'linear-gradient(135deg, #0d9488, #2563eb)' }}
                >
                  {card.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 pt-8">
                <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'Outfit, sans-serif', color: '#0f172a' }}>
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
